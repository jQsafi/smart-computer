# Smart Computer and Stationary
> **Minimalist Single-Page React Application — Inspired by Alphabet ([abc.xyz](https://abc.xyz/))**  
> *Proprietor: Shafayat Hossain (শাফায়েত হোসেন)*  
> *Location: স্কুল অ্যান্ড কলেজ ক্যান্টিন গেট সংলগ্ন*  
> *Contact / WhatsApp: 01711-652361*  
> **Live URL:** [https://jqsafi.github.io/smart-computer/](https://jqsafi.github.io/smart-computer/)

A modern, responsive, and typography-first single-page application built with **React 18**, **Vite**, **Tailwind CSS**, and Google Fonts (`Plus Jakarta Sans` & `Hind Siliguri`).

---

## 🏛️ Design Identity (Inspired by Alphabet `abc.xyz`)
- **Aesthetic:** Clean editorial structure, generous whitespace, confident typography, subtle borders, and zero clutter.
- **Brand Colors:**
  - Dark Forest Green (`#0A3622`)
  - Teal Green (`#138A72`)
  - Sky Blue Accent (`#38B6FF`)
  - Crisp White Background (`#FFFFFF`) with slate borders
- **Logo & Imagery:**
  - Official SCS monogram and book emblem (`assets/logo.png`) — Transparent RGBA
  - Alphabet toy blocks spelling **"SMART COMPUTER"** (`assets/smart_blocks.png`) — Transparent RGBA with soft contact shadows.

---

## 📋 Fullscreen Hero Slider & React Components
1. **`Navbar`:** Fixed glassmorphic navigation with official logo, brand name, proprietor name, and instant WhatsApp order CTA.
2. **`HeroSlider` (5 Dynamic Slides):**
   - **Slide 01:** Official Brand Emblem Showcase (`assets/logo.png`) with brand pillars (*Computers, Accessories, Stationary, School & Office Needs*), taglines, proprietor info, and instant WhatsApp/Call buttons.
   - **Slide 02:** Alphabet-inspired wooden alphabet blocks (`assets/smart_blocks.png`) spelling **"SMART COMPUTER"** on transparent background in minimalist abc.xyz style.
   - **Slide 03:** **[01]** অনলাইন ও নাগরিক সেবা (Online & Citizen Services).
   - **Slide 04:** **[02 & 03]** ডিজিটাল ফটো ল্যাব ও প্রিন্টিং (Digital Photo Lab & High-Speed Laser Print).
   - **Slide 05:** **[04 & 05]** কম্পিউটার ট্রেনিং একাডেমি ও ৯৯ টাকা কর্নার (Training Academy & Stationery).
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
