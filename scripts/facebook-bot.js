/**
 * scripts/facebook-bot.js
 * Generates branded Bangla/English social media posts from live circulars
 * and posts directly to Facebook Page via Graph API (or stages to file).
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function runFacebookBot() {
  const noticesPath = path.join(projectRoot, 'src', 'data', 'noticesData.js');
  const { noticesData } = await import(`file://${noticesPath}`);

  if (!noticesData || noticesData.length === 0) {
    console.log('[Facebook Bot] No notices found in noticesData.js');
    return;
  }

  // Pick top active / urgent notice
  const urgentNotice = noticesData.find((n) => n.status === 'Urgent') || noticesData[0];

  const postText = `📢 [নতুন সরকারি চাকরির সার্কুলার / ভর্তি বিজ্ঞপ্তি]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏛 প্রতিষ্ঠান: ${urgentNotice.organization}
💼 পদ/বিষয়: ${urgentNotice.title}
📊 পদ সংখ্যা: ${urgentNotice.posts || 'বিজ্ঞপ্তি অনুসারে'}
⏳ আবেদনের শেষ তারিখ: ${urgentNotice.deadline}
🌐 অফিশিয়াল পোর্টাল: ${urgentNotice.portal || 'N/A'}
💳 সরকারি ফি: ${urgentNotice.fee || 'অফিসিয়াল নির্ধারিত'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 স্মার্ট কম্পিউটারে যা যা সুবিধা পাবেন:
  ✅ ১০০% নির্ভুল ও প্রফেশনাল অনলাইন আবেদন
  ✅ সরকারি নিয়ম অনুযায়ী ছবি ও স্বাক্ষর নিখুঁত রিসাইজ
  ✅ টেলিটক পেমেন্ট ও এসএমএস কনফার্মেশন
  ✅ হাই-স্পিড লেজার কালার অ্যাডমিট ও আবেদনপত্র প্রিন্ট
  ✅ সম্পূর্ণ ফরম্যাটে সিভি (CV / Resume) প্রস্তুতকরণ

📍 সরাসরি দোকানে চলে আসুন:
স্মার্ট কম্পিউটার অ্যান্ড স্টেশনারি (Smart Computer and Stationary)
প্রোপাইটর: সাফায়েত হোসেন (Shafayat Hossain)
📞 ফোন: 01711-652361
💬 হোয়াটসঅ্যাপে সরাসরি যোগাযোগ: https://wa.me/8801711652361?text=${encodeURIComponent(`Hello Shafayat, I need assistance with ${urgentNotice.title}`)}
🌐 সকল চলমান সার্কুলার লাইভ দেখুন: https://www.smartcomputer.shop/#notices

#SmartComputer #JobCircularBD #BDGovtJob #AdmissionNotice #Chuadanga #OnlineApplication #Teletalk`;

  console.log('\n--- [PREVIEW OF GENERATED FACEBOOK POST] ---');
  console.log(postText);
  console.log('-------------------------------------------\n');

  // Save generated post for copy-pasting or review
  const outputTextPath = path.join(projectRoot, 'public', 'latest-fb-post.txt');
  const outputJsonPath = path.join(projectRoot, 'public', 'latest-fb-post.json');

  await fs.writeFile(outputTextPath, postText, 'utf-8');
  await fs.writeFile(
    outputJsonPath,
    JSON.stringify(
      {
        noticeId: urgentNotice.id,
        organization: urgentNotice.organization,
        title: urgentNotice.title,
        deadline: urgentNotice.deadline,
        generatedAt: new Date().toISOString(),
        message: postText,
      },
      null,
      2
    ),
    'utf-8'
  );
  console.log('[Facebook Bot] Saved generated post to public/latest-fb-post.txt and public/latest-fb-post.json');

  // Direct Graph API posting if credentials are provided
  const pageAccessToken = process.env.FB_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FB_PAGE_ID;

  if (pageAccessToken && pageId) {
    console.log('[Facebook Bot] Posting to Facebook Page Graph API...');
    try {
      const fbUrl = `https://graph.facebook.com/v19.0/${pageId}/feed`;
      const res = await fetch(fbUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: postText,
          access_token: pageAccessToken,
          link: `https://www.smartcomputer.shop/#notice-${urgentNotice.id}`,
        }),
      });

      const resData = await res.json();
      if (res.ok) {
        console.log('[Facebook Bot] Successfully posted to Facebook Page! Post ID:', resData.id);
      } else {
        console.error('[Facebook Bot] Graph API returned error:', resData);
      }
    } catch (err) {
      console.error('[Facebook Bot] Error posting to Facebook:', err.message);
    }
  } else {
    console.log('[Facebook Bot] (Info) FB_PAGE_ACCESS_TOKEN / FB_PAGE_ID not set. Post preview is ready in public/latest-fb-post.txt');
  }
}

// Execute when run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runFacebookBot().catch((err) => {
    console.error('[Facebook Bot] Error:', err);
    process.exit(1);
  });
}

export { runFacebookBot };
