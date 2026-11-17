/**
 * scripts/generate-sitemap.js
 * Generates public/sitemap.xml dynamically from current site data
 * and pings Google & Bing search engines.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BASE_URL = 'https://www.smartcomputer.shop';

async function generateSitemap() {
  console.log('[Sitemap] Loading notice & page data...');

  const noticesPath = path.join(projectRoot, 'src', 'data', 'noticesData.js');
  const noticesFile = await fs.readFile(noticesPath, 'utf-8');

  // Dynamically import notices and blog data
  const { noticesData } = await import(`file://${noticesPath}`);
  const blogPath = path.join(projectRoot, 'src', 'data', 'blogData.js');
  let blogPosts = [];
  try {
    const blogModule = await import(`file://${blogPath}`);
    blogPosts = blogModule.BLOG_POSTS || [];
  } catch (err) {
    console.warn('[Sitemap] Could not load blog posts:', err.message);
  }

  const today = new Date().toISOString().split('T')[0];

  const coreUrls = [
    { loc: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' },
    { loc: `${BASE_URL}/blog.html`, changefreq: 'daily', priority: '0.95' },
    { loc: `https://blog.smartcomputer.shop/`, changefreq: 'daily', priority: '0.95' },
    { loc: `${BASE_URL}/#notices`, changefreq: 'daily', priority: '0.95' },
    { loc: `${BASE_URL}/#services`, changefreq: 'weekly', priority: '0.90' },
    { loc: `${BASE_URL}/#print-calculator`, changefreq: 'weekly', priority: '0.85' },
    { loc: `${BASE_URL}/#stationery-catalog`, changefreq: 'weekly', priority: '0.85' },
    { loc: `${BASE_URL}/#faq`, changefreq: 'monthly', priority: '0.70' },
    { loc: `${BASE_URL}/#about`, changefreq: 'monthly', priority: '0.70' },
  ];

  // Blog articles for deep indexing
  const blogUrls = (blogPosts || []).flatMap((post) => [
    {
      loc: `https://blog.smartcomputer.shop/#post=${post.slug}`,
      changefreq: 'weekly',
      priority: '0.85',
      lastmod: today,
    },
    {
      loc: `${BASE_URL}/blog.html#post=${post.slug}`,
      changefreq: 'weekly',
      priority: '0.80',
      lastmod: today,
    }
  ]);

  // Specific notice anchors for deep indexing
  const noticeUrls = (noticesData || []).map((notice) => ({
    loc: `${BASE_URL}/#notice-${notice.id}`,
    changefreq: 'daily',
    priority: '0.80',
    lastmod: today,
  }));

  const allUrls = [...coreUrls, ...blogUrls, ...noticeUrls];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod || today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicSitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
  await fs.writeFile(publicSitemapPath, xmlContent.trim(), 'utf-8');
  console.log(`[Sitemap] Successfully wrote ${allUrls.length} URLs to public/sitemap.xml`);

  // Auto-ping Google and Bing if requested
  const shouldPing = process.argv.includes('--ping') || process.env.AUTO_PING === 'true';
  if (shouldPing) {
    await pingSearchEngines();
  }
}

export async function pingSearchEngines() {
  const sitemapUrl = encodeURIComponent(`${BASE_URL}/sitemap.xml`);
  const engines = [
    { name: 'Google', url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
    { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` },
  ];

  console.log('[Search Engine Ping] Pinging search crawlers with updated sitemap...');

  for (const engine of engines) {
    try {
      const response = await fetch(engine.url, { method: 'GET', headers: { 'User-Agent': 'SmartComputer-Bot/1.0' } });
      console.log(`[Search Engine Ping] ${engine.name}: Status ${response.status}`);
    } catch (err) {
      console.warn(`[Search Engine Ping] ${engine.name} ping note:`, err.message);
    }
  }
}

// Execute when run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap().catch((err) => {
    console.error('[Sitemap] Error:', err);
    process.exit(1);
  });
}
