# Subdomain Deployment Guide: The Keyword Blog

This document outlines the architecture, DNS configuration, and deployment steps for deploying **The Keyword** (Smart Computer's official blog) on subdomains:
- `https://blog.smartcomputer.shop`
- `https://blog.smartcomputer.com`

---

## 1. Architecture Overview

The blog is built following the design and layout of **blog.google** (*The Keyword*):
- **Universal Subdomain Detection:** Automatically detects if `window.location.hostname` starts with `blog.` and switches to the blog application.
- **Multi-Page Static Output:** Generates both `dist/index.html` (main store) and `dist/blog.html` + `dist/blog/index.html` (dedicated blog entry point).
- **Zero-Friction Fallback:** Accessible from the main website via the top navigation bar (`/blog.html` or `#the-keyword`), with deep linking (`#post=<slug>`).

---

## 2. DNS Configuration (Domain Registrar / Cloudflare)

To point your subdomains to your deployment, configure CNAME records in your DNS management portal (Namecheap, Cloudflare, GoDaddy, Google Domains, etc.):

### For `blog.smartcomputer.shop`:
| Type  | Name | Value / Target | TTL | Proxy Status |
|-------|------|----------------|-----|--------------|
| CNAME | `blog` | `smart-computer.wasmer.app` *(or your host target)* | Auto | Proxied (or DNS only) |

### For `blog.smartcomputer.com`:
| Type  | Name | Value / Target | TTL | Proxy Status |
|-------|------|----------------|-----|--------------|
| CNAME | `blog` | `smart-computer.wasmer.app` *(or your host target)* | Auto | Proxied (or DNS only) |

---

## 3. Host-Specific Subdomain Setup

### Option A: Wasmer Edge Deployment (Default)
In your Wasmer project settings or CLI:
```bash
# Attach the custom domain to your deployed Wasmer web service
wasmer domain attach blog.smartcomputer.shop --app smart-computer
wasmer domain attach blog.smartcomputer.com --app smart-computer
```
*Because `wasmer.toml` uses static fallback with dual client detection, both domains will instantly route into their respective views.*

### Option B: Cloudflare Pages / Workers
If using Cloudflare:
1. Add custom domains: `blog.smartcomputer.shop` and `blog.smartcomputer.com`.
2. Add a Transform Rule (Rewrite URL):
   - **If hostname matches** `blog.smartcomputer.shop` or `blog.smartcomputer.com` AND path is `/`
   - **Rewrite to:** `/blog/index.html` or `/blog.html`

### Option C: Nginx Reverse Proxy
```nginx
server {
    server_name blog.smartcomputer.shop blog.smartcomputer.com;
    root /var/www/smart-computer/dist;
    index blog.html blog/index.html;

    location / {
        try_files $uri $uri/ /blog.html =404;
    }
}
```

---

## 4. Local Testing & Verification

You can test the blog locally without modifying DNS:

1. **Start the local dev server:**
   ```bash
   npm run dev
   ```
2. **Access via browser:**
   - Standalone Blog HTML: `http://localhost:3000/blog.html`
   - Subdomain Simulation / Hash Route: `http://localhost:3000/#the-keyword`
   - Single Article Deep Link: `http://localhost:3000/blog.html#post=teletalk-job-application-mistakes-guide`

3. **Simulate `blog.smartcomputer.shop` via `/etc/hosts`:**
   Add this line to `/etc/hosts`:
   ```
   127.0.0.1 blog.smartcomputer.shop
   ```
   Then open `http://blog.smartcomputer.shop:3000/` in your browser. The app will immediately recognize the `blog.` prefix and load The Keyword!

---

## 5. Google Search Console & Analytics

- Both `https://blog.smartcomputer.shop/` and individual article URLs are indexed in `public/sitemap.xml`.
- Dual Google Tag Manager (`GTM-5Q9MZCC5`) and dataLayer event tracking are pre-configured:
  - `blog_page_view`: Fired on portal entry.
  - `blog_article_view`: Fired whenever a user opens an article.
