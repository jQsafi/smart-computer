# 🤖 Smart Computer & Stationary - Automation & Dynamic Content Guide

This document explains how the dynamic automations work and how shop staff can manage prices, circulars, and social posts without writing any code.

---

## 1. 📅 Daily BD Job & Admission Scraper + Sitemap Auto-Ping

### How It Works:
- **Scheduled Time:** Runs every morning at **8:00 AM (Asia/Dhaka time)** via the Antigravity Sidecar (`daily-circular-updater`).
- **What it executes:**
  1. Crawls trusted portals (`bpsc.gov.bd`, `alljobs.teletalk.com.bd`, `bdgovtjob.net`, public university admission sites).
  2. Removes expired notices and adds verified active circulars to `src/data/noticesData.js`.
  3. Regenerates `public/sitemap.xml` with fresh URLs and `<lastmod>` timestamps.
  4. Automatically runs `npm run build`, commits to GitHub, and deploys to Wasmer Edge (`smartcomputer.shop`).

### Manual Trigger:
```powershell
npm run sitemap
# or full pipeline:
npm run automate
```

---

## 2. 📊 Google Sheets Live Price & Stock Sync (Mobile Zero-Code Editing)

Shafayat or shop staff can update paper prices, cartridge costs, photo services, or stationery stock directly from their smartphone via Google Sheets!

### Setup Instructions (3 Minutes):
1. **Create a Google Spreadsheet:**
   - Name it: `Smart Computer Catalog`
   - Create two tabs:
     - Tab 1: **`Products`**
     - Tab 2: **`Services`**

2. **Column Structure for `Products`:**
   | id | title | category | tag | price | originalPrice | icon | desc |
   |:---|:---|:---|:---|:---|:---|:---|:---|
   | 1 | Multi-Function OTG Adapter | gadget | Tk 99 Special | 99 | 150 | fa-usb | Type-C compatible fast file transfer |
   | 2 | Sticky Notes Combo | stationery | Tk 99 Special | 99 | 140 | fa-highlighter | 3-color fluorescent highlighters |
   | 3 | Geometry Box Set | geometry | Student Essential | 99 | 130 | fa-compass-drafting | Precision compass, ruler & protractor |

3. **Column Structure for `Services`:**
   | id | code | title | description | category | items | whatsappMsg | badge |
   |:---|:---|:---|:---|:---|:---|:---|:---|
   | online-services | 01 | Online Citizen & Govt Services | Accurate online applications for BCS, Primary, NID | CITIZEN_SERVICES | BCS & Govt jobs; University admission; NID correction | Hello Shafayat! Online assistance | 100% Accurate Submission |
   | photo-lab | 02 | Digital Photo Studio | Instant 2-minute passport & stamp size photo prints | CREATIVE_STUDIO | Instant 2-min photos; Formal attire; ATS resume | Hello Shafayat! Photo inquiry | 2-Minute Delivery |

4. **Connect to Website:**
   - In Google Sheets, click **File > Share > Anyone with link can view**.
   - Copy the Spreadsheet ID from the URL:
     `https://docs.google.com/spreadsheets/d/`**`<SPREADSHEET_ID>`**`/edit`
   - Paste the ID into `config/automation.json`:
     ```json
     {
       "googleSheets": {
         "enabled": true,
         "spreadsheetId": "YOUR_SPREADSHEET_ID_HERE"
       }
     }
     ```
5. **Run the Sync:**
   ```powershell
   npm run sync:sheets
   ```

---

## 3. 📢 Facebook Page Bot (Social Media Cross-Posting)

Whenever a major job circular or admission announcement is detected, this automation generates a formatted Bangla/English promotional post for your Facebook Page.

### Features:
- Highlights organization name, vacancies, official portal, application deadline, and fees.
- Pre-fills WhatsApp link: `https://wa.me/8801711652361?text=...`
- Includes your shop address and link to `https://www.smartcomputer.shop/#notices`.
- Saves draft to `public/latest-fb-post.txt` for 1-click copy-pasting.

### Direct Auto-Posting (Optional):
Add your Facebook Page credentials to `.env` or system environment:
```env
FB_PAGE_ID=your_page_id
FB_PAGE_ACCESS_TOKEN=your_page_access_token
```
Then run:
```powershell
npm run post:fb
```

---

## 4. 🚀 Unified Execution Command

To run all automations, build the site, and verify everything:
```powershell
npm run automate
npm run build
```
