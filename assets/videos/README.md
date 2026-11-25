# ORVÉL — Luxury Watch Hero Video Assets

This directory hosts the HTML5 cinematic video background files for the **ORVÉL — Fine Timepieces** digital flagship hero section.

---

## 1. Required Video Files & Specifications

The hero slider seamlessly loads and plays three local video background files. If any file is absent or blocked by browser power/data-saver modes, the engine instantly and gracefully displays the 2560px high-resolution motion poster fallback with Ken Burns camera drift and studio lighting sheen.

### Slide 1: Dark Luxury Watch Reveal
* **Files**:
  * `assets/videos/hero-slide-1-reveal.mp4` (H.264 / AAC or Muted)
  * `assets/videos/hero-slide-1-reveal.webm` (VP9 / Opus or Muted)
* **Creative Direction**: Dark luxury mechanical watch reveal, moving metallic reflections, dramatic black/gold studio chiaroscuro lighting.
* **Poster Fallback**: `https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=2560&q=95`
* **Duration**: 8–15 seconds (seamless loop).
* **Resolution**: 1080p (`1920x1080`) or 4K (`3840x2160`), 24/30 fps.

---

### Slide 2: Extreme Macro Mechanical Movement
* **Files**:
  * `assets/videos/hero-slide-2-macro-gears.mp4`
  * `assets/videos/hero-slide-2-macro-gears.webm`
* **Creative Direction**: Extreme macro mechanical watch movement, moving gears, balance wheel escapement, sweeping watch hands, and cinematic focus rack.
* **Poster Fallback**: `https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=2560&q=95`
* **Duration**: 8–15 seconds (seamless loop).
* **Resolution**: 1080p (`1920x1080`) or 4K (`3840x2160`), 24/30 fps.

---

### Slide 3: Multi-Watch Studio Campaign
* **Files**:
  * `assets/videos/hero-slide-3-collection-campaign.mp4`
  * `assets/videos/hero-slide-3-collection-campaign.webm`
* **Creative Direction**: Luxury multi-watch studio campaign with slow camera movement, obsidian/gold reflections, and premium directional lighting.
* **Poster Fallback**: `https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=2560&q=95`
* **Duration**: 8–15 seconds (seamless loop).
* **Resolution**: 1080p (`1920x1080`) or 4K (`3840x2160`), 24/30 fps.

---

## 2. Licensing & Asset Compliance Rules

* **Allowed**: Royalty-free licensed footage (e.g. Creative Commons Zero / CC-BY, licensed stock, or client-owned 3D CAD horology renders).
* **Prohibited**: Do NOT use copyrighted, trademarked, or official campaign footage from brands such as Patek Philippe, Audemars Piguet, Rolex, or Hublot without explicit authorization.
* **Audio Track**: Must be muted (`muted`, `playsinline`, `autoplay`) to ensure 100% compliance with modern browser autoplay policies (Safari, Chrome, Firefox, iOS, Android).

---

## 3. Player Architecture & Lifecycle
* **Active Slide**: Automatically starts video playback via `video.play()` upon slide entrance and adds `.is-playing` class.
* **Inactive Slide**: Instantly pauses video and rewinds to `0` to conserve GPU/CPU cycles and battery life.
* **Failure / Loading / Offline**: The fallback `<img class="hero-bg-photo">` remains layered beneath the video at all times with Ken Burns transforms and atmospheric light sweep.
