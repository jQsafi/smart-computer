# Google Analytics 4 (GA4) Integration Guide

This project includes a **Google Analytics 4 (GA4)** tracking setup optimized for the **Smart Computer and Stationary** single-page application.

---

## 🚀 Quick Setup: Connecting Your Google Analytics

### Step 1: Obtain your GA4 Measurement ID
1. Log in to [Google Analytics](https://analytics.google.com/).
2. Navigate to **Admin** (gear icon at bottom left).
3. Under **Data collection and modification**, click **Data Streams**.
4. Select or create your **Web Stream** (e.g., `https://www.smartcomputer.shop` or `https://smart-computer.wasmer.app`).
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`).

### Step 2: Add to `.env`
In the project root directory, edit `.env` (already pre-configured with your ID):
```env
VITE_GA_MEASUREMENT_ID=G-CJ1RPJGERL
```

Active Measurement ID: **`G-CJ1RPJGERL`**

### Step 3: Test and Build
Run the local dev server:
```bash
npm run dev
```
Or build for production:
```bash
npm run build
```
When a valid ID is detected, Google Analytics (`gtag.js`) automatically initializes and begins tracking visits and events.

---

## 📊 Tracked Business Events

The integration tracks key commercial actions:

| Event Name | Trigger Location | Purpose |
| :--- | :--- | :--- |
| `page_view` | Initial load & navigation | Measures visitor traffic and popular pages |
| `contact_phone_call` | Floating Call button, Navbar, Footer, Colophon | Tracks customer calls directly to proprietor Shafayat Hossain (`01711-652361`) |
| `contact_whatsapp` | Floating WhatsApp, Navbar, Product booking, Services desk | Tracks direct WhatsApp inquiries |
| `document_dispatch_click` | Rapid Document Dispatch desk (`FileUploadBox`) | Measures customers queuing printing / photo jobs via WhatsApp |
| `print_calculator_action` | Print Calculator (`PrintCalculator`) | Records cost estimations and dispatched print orders |
| `course_enrollment` | Computer Training Academy modal (`CourseEnrollModal`) | Measures student course workstation reservations |
| `notice_click` | Official Gazette / Circulars (`NoticeBoard`) | Tracks clicks on government job circulars & university admissions |

---

## 🔍 Realtime Verification
1. Open [Google Analytics Realtime Report](https://analytics.google.com/).
2. Visit your live or local website.
3. Click any WhatsApp or Call button.
4. You will see the event appear live in the **Event count by Event name** card!
