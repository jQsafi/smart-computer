# Smart Computer and Stationary
> **Minimalist Single-Page React Application — Inspired by Alphabet ([abc.xyz](https://abc.xyz/))**  
> *Proprietor: Shafayat Hossain*  
> *Location: Beside School & College Canteen Gate*  
> *Contact / WhatsApp: 01711-652361*  
> **Live URL (Wasmer Edge):** [https://smart-computer.wasmer.app](https://smart-computer.wasmer.app)  
> **Live URL (GitHub Pages):** [https://jqsafi.github.io/smart-computer/](https://jqsafi.github.io/smart-computer/)  
> **Project Audit & Roadmap:** [PROJECT_AUDIT_REPORT.md](docs/PROJECT_AUDIT_REPORT.md)

A modern, responsive, and typography-first single-page application built with **React 18**, **Vite**, **Tailwind CSS**, and Google Fonts (`Plus Jakarta Sans`).

---

## 🏛️ Design Identity (Inspired by Alphabet `abc.xyz`)
- **Aesthetic:** Clean editorial structure, generous whitespace, confident typography, subtle borders, and zero clutter.
- **Brand Colors:**
  - Deep Navy Blue (`#0B192C`)
  - Dark Midnight Navy (`#060D17`)
  - Cobalt Royal Blue (`#1D4ED8`)
  - Sky Blue Accent (`#38B6FF`)
  - Crisp White Background (`#FFFFFF`) with slate borders
- **Logo & Imagery:**
  - Official SCS monogram and book emblem (`assets/logo.png`) — Transparent RGBA
  - Alphabet toy blocks spelling **"SMART COMPUTER"** (`assets/smart_blocks.png`) — Transparent RGBA with soft contact shadows.

---

## 📋 Fullscreen Hero Slider & React Components
1. **`Navbar`:** Fixed glassmorphic navigation with official logo, brand name, proprietor name, and instant WhatsApp order CTA.
2. **`HeroSlider` (5 Dynamic Slides):**
   - **Slide 01:** Monograph Editorial Cover ("SMART COMPUTER & STATIONARY" — Collector's Volume) adapted to the deep navy and cobalt/sky blue palette with architectural colonnade arches, titanium-sky chrome typography, and direct WhatsApp/Call links.
   - **Slide 02:** Alphabet-inspired wooden alphabet blocks (`assets/smart_blocks.png`) spelling **"SMART COMPUTER"** on transparent background in minimalist abc.xyz style.
   - **Slide 03:** **[01]** Online Citizen & Government Services.
   - **Slide 04:** **[02 & 03]** Digital Photo Studio & High-Speed Laser Print.
   - **Slide 05:** **[04 & 05]** Computer Training Academy & Tk 99 Student Value Corner.
   - Features: Touch swipe gestures, keyboard arrow navigation, 5.5s auto-rotation, and interactive dot indicators.
3. **`ExecutiveSummary`:** Minimalist statement, proprietor credentials (*Shafayat Hossain*), and direct contact strip.
4. **`NoticeBoard`:** Interactive live job notices and college admission deadlines board with direct application links.
5. **`ServicesIndex`:** Five core academic and citizen departments with filter pills and WhatsApp inquiry buttons.
6. **`FileUploadBox`:** Direct WhatsApp upload utility for students and teachers to print documents without waiting in line.
7. **`AboutContact`:** Complete identity, direct mobile/WhatsApp links, location beside school & college canteen gate, and operating hours.
8. **`Footer` & `FloatingActions`:** Minimalist credits and sticky floating Call/WhatsApp buttons.

---

## 🛠️ Development & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Runs at `http://localhost:3000` (or `http://192.168.0.3:3000` on your local network).

### 3. Production Build
```bash
npm run build
```
Generates an optimized production build in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚀 Deployment (GitHub Pages)
A GitHub Actions workflow is configured in `.github/workflows/deploy.yml`. Every push to the `main` branch automatically builds and deploys the React app to:
**[https://jqsafi.github.io/smart-computer/](https://jqsafi.github.io/smart-computer/)**
