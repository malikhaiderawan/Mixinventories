/**
 * Mix Inventories — Hybrid AI Sales Concierge Endpoint (/api/chat)
 * Supports GROQ_API_KEY (openai/gpt-oss-20b) with automatic fallback
 * to GEMINI_API_KEY (gemini-3.8-flash).
 */

import { buildConciergeSystemPrompt } from '../js/brand-context.js';

const GROQ_MODELS = [
  'openai/gpt-oss-20b',
  'qwen/qwen3.8-27b',
  'openai/gpt-oss-120b'
];

async function callGroq(groqKey, systemPrompt, messages) {
  let lastErr = null;
  for (const model of GROQ_MODELS) {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${groqKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map((m) => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: String(m.content || '')
          }))
        ],
        temperature: 0.4,
        max_tokens: 550
      })
    });

    if (groqRes.ok) {
      const data = await groqRes.json();
      const text = data.choices?.[0]?.message?.content || '';
      if (text) return text;
    }

    const errText = await groqRes.text().catch(() => groqRes.statusText);
    lastErr = new Error(`Groq ${model} error (${groqRes.status}): ${errText}`);
    if (groqRes.status !== 429 && groqRes.status !== 404 && groqRes.status < 500) {
      throw lastErr;
    }
  }
  throw lastErr || new Error('All Groq models failed');
}

const GEMINI_MODELS = [
  'gemini-flash-lite-latest',
  'gemini-3-flash-preview',
  'gemini-3.8-flash'
];

async function callGemini(geminiKey, systemPrompt, messages) {
  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: String(m.content || '') }]
  }));

  let lastErr = null;
  for (const model of GEMINI_MODELS) {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(geminiKey)}`;
    const aiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        contents,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 550
        }
      })
    });

    if (aiRes.ok) {
      const data = await aiRes.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      if (text) return text;
    }

    const errText = await aiRes.text().catch(() => aiRes.statusText);
    lastErr = new Error(`Gemini ${model} error (${aiRes.status}): ${errText}`);
    if (aiRes.status !== 429 && aiRes.status !== 404 && aiRes.status < 500) {
      throw lastErr;
    }
  }
  throw lastErr || new Error('All Gemini models failed');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { messages, productContext } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        ok: false,
        error: 'Invalid request: "messages" array is required.'
      });
    }

    if (messages.length > 25) {
      return res.status(400).json({
        ok: false,
        error: 'Conversation history exceeds maximum allowable length (25 messages).'
      });
    }

    const latestMessage = messages[messages.length - 1];
    if (!latestMessage || typeof latestMessage.content !== 'string' || latestMessage.content.trim().length === 0) {
      return res.status(400).json({
        ok: false,
        error: 'Latest message content must be a non-empty string.'
      });
    }

    if (latestMessage.content.length > 1200) {
      return res.status(400).json({
        ok: false,
        error: 'Message exceeds maximum allowable length of 1200 characters.'
      });
    }

    const groqKey = (process.env.GROQ_API_KEY || '').trim();
    const geminiKey = (process.env.GEMINI_API_KEY || '').trim();

    if (!groqKey && !geminiKey) {
      return res.status(200).json({
        ok: false,
        status: 'unconfigured',
        message: 'No GROQ_API_KEY or GEMINI_API_KEY configured in environment.'
      });
    }

    const systemPrompt = buildConciergeSystemPrompt(productContext || null);

    let assistantResponseText = '';
    let provider = '';

    if (groqKey) {
      try {
        assistantResponseText = await callGroq(groqKey, systemPrompt, messages);
        provider = 'groq';
      } catch (groqErr) {
        console.warn('Groq failed, attempting Gemini fallback:', groqErr.message);
        if (geminiKey) {
          assistantResponseText = await callGemini(geminiKey, systemPrompt, messages);
          provider = 'gemini';
        } else {
          throw groqErr;
        }
      }
    } else if (geminiKey) {
      assistantResponseText = await callGemini(geminiKey, systemPrompt, messages);
      provider = 'gemini';
    }

    let recommendedIds = [];
    const match = assistantResponseText.match(/<!--RECOMMENDED:(\[.*?\])-->/);
    if (match) {
      try {
        recommendedIds = JSON.parse(match[1]);
        assistantResponseText = assistantResponseText.replace(/<!--RECOMMENDED:.*?-->/, '').trim();
      } catch (_) {
        recommendedIds = [];
      }
    }

    return res.status(200).json({
      ok: true,
      provider,
      text: assistantResponseText,
      recommendedIds
    });
  } catch (error) {
    console.error('Mix Inventories Concierge API Error:', error);
    return res.status(200).json({
      ok: false,
      status: 'fallback',
      error: 'AI concierge service temporarily unavailable; falling back to local catalog search.'
    });
  }
}
