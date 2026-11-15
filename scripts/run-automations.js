/**
 * scripts/run-automations.js
 * Unified Orchestration Runner for Smart Computer & Stationary:
 * 1. Syncs Pricing & Stock from Google Sheets (if configured)
 * 2. Generates public/sitemap.xml and pings Google & Bing search engines
 * 3. Prepares & posts social media updates for Facebook Page
 */

import { syncGoogleSheets } from './sync-google-sheets.js';
import { pingSearchEngines } from './generate-sitemap.js';
import { runFacebookBot } from './facebook-bot.js';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function runAllAutomations() {
  console.log('=====================================================');
  console.log('🚀 Running Smart Computer Daily Dynamic Automations');
  console.log(`⏰ Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} (Dhaka Time)`);
  console.log('=====================================================\n');

  // 1. Google Sheets Sync
  console.log('--- Step 1: Google Sheets Live Price & Stock Sync ---');
  await syncGoogleSheets();

  // 2. Sitemap Generation & Search Console Ping
  console.log('\n--- Step 2: Regenerating XML Sitemap & Pinging Search Crawlers ---');
  execSync('node scripts/generate-sitemap.js --ping', { stdio: 'inherit', cwd: projectRoot });

  // 3. Facebook Bot Post Staging
  console.log('\n--- Step 3: Facebook Social Bot Cross-Posting ---');
  await runFacebookBot();

  console.log('\n=====================================================');
  console.log('✅ All dynamic automations completed successfully!');
  console.log('=====================================================\n');
}

runAllAutomations().catch((err) => {
  console.error('[Automations Error]', err);
  process.exit(1);
});
