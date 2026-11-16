/**
 * scripts/push-with-automation.js
 * One-command automated push and deploy pipeline:
 * 1. Runs full dynamic automations (Google Sheets sync, sitemap, crawler ping, social post)
 * 2. Increments patch version in wasmer.toml
 * 3. Builds fresh production bundle (npm run build)
 * 4. Commits changes to Git and pushes to GitHub (main)
 * 5. Deploys fresh package to Wasmer Edge CDN
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function run(cmd, desc) {
  console.log(`\n▶ [${desc}] Running: ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit', cwd: projectRoot });
    return true;
  } catch (err) {
    console.error(`❌ [${desc}] Failed:`, err.message);
    throw err;
  }
}

async function bumpWasmerVersion() {
  const wasmerTomlPath = path.join(projectRoot, 'wasmer.toml');
  const content = await fs.readFile(wasmerTomlPath, 'utf-8');
  const match = content.match(/version\s*=\s*"(\d+)\.(\d+)\.(\d+)"/);

  if (match) {
    const major = match[1];
    const minor = match[2];
    const patch = parseInt(match[3], 10) + 1;
    const newVersion = `${major}.${minor}.${patch}`;
    const updated = content.replace(/version\s*=\s*"[^"]+"/, `version = "${newVersion}"`);
    await fs.writeFile(wasmerTomlPath, updated, 'utf-8');
    console.log(`\n📦 Bumped wasmer.toml version: ${match[1]}.${match[2]}.${match[3]} ➔ ${newVersion}`);
    return newVersion;
  }
  return null;
}

async function main() {
  const startTime = Date.now();
  const dhakaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

  console.log('================================================================');
  console.log('🚀 AUTOMATED PUSH & DEPLOYMENT PIPELINE');
  console.log(`⏰ Time: ${dhakaTime} (Asia/Dhaka)`);
  console.log('================================================================');

  // Step 1: Run dynamic automations
  run('npm run automate', 'Step 1: Dynamic Automations');

  // Step 2: Bump version for Wasmer Edge package
  const newVersion = await bumpWasmerVersion();

  // Step 3: Production Build
  run('npm run build', 'Step 2: Production Build');

  // Step 4: Git Status & Commit
  console.log('\n▶ [Step 3: Git Commit & Push]');
  run('git add -A', 'Git Stage All');

  let statusOutput = '';
  try {
    statusOutput = execSync('git status --porcelain', { cwd: projectRoot, encoding: 'utf-8' });
  } catch (e) {
    statusOutput = '';
  }

  const commitMsg = process.argv.slice(2).join(' ') || `auto: dynamic sync, sitemap & edge release v${newVersion || 'latest'} [${dhakaTime}]`;

  if (statusOutput.trim().length > 0) {
    run(`git commit -m "${commitMsg}"`, 'Git Commit');
  } else {
    console.log('ℹ Working tree clean, no new changes to commit.');
  }

  run('git push origin main', 'Git Push to GitHub');

  // Step 5: Wasmer Edge Deploy (if Wasmer CLI is installed)
  console.log('\n▶ [Step 4: Wasmer Edge Deployment]');
  try {
    const isWin = process.platform === 'win32';
    const wasmerBinWin = path.join(os.homedir(), '.wasmer', 'bin', 'wasmer.exe');
    let hasWasmer = false;
    let deployCmd = 'wasmer deploy --publish-package --non-interactive';

    if (isWin) {
      try {
        await fs.access(wasmerBinWin);
        deployCmd = `powershell -Command "& \\"${wasmerBinWin}\\" deploy --publish-package --non-interactive"`;
        hasWasmer = true;
      } catch {
        deployCmd = 'powershell -Command "wasmer deploy --publish-package --non-interactive"';
        hasWasmer = true;
      }
    } else {
      try {
        execSync('command -v wasmer', { stdio: 'ignore' });
        hasWasmer = true;
      } catch {
        hasWasmer = false;
      }
    }

    if (hasWasmer) {
      run(deployCmd, 'Wasmer Edge Deploy');
    } else {
      console.log('ℹ Wasmer CLI not found on this device; deployment is handled automatically by GitHub Actions.');
    }
  } catch (err) {
    console.warn('⚠️ Wasmer Edge deploy step skipped:', err.message);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log('\n================================================================');
  console.log(`✅ AUTOMATED PUSH & DEPLOY COMPLETE in ${elapsed}s!`);
  console.log('🌐 Live Custom Domain:  https://www.smartcomputer.shop');
  console.log('🌐 Live Edge App:       https://smart-computer.wasmer.app');
  console.log('🐙 GitHub Repository:   https://github.com/jQsafi/smart-computer');
  console.log('================================================================\n');
}

main().catch((err) => {
  console.error('\n💥 Pipeline stopped with error:', err.message);
  process.exit(1);
});
