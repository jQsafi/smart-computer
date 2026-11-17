import fs from 'fs';
import path from 'path';

const distBlogHtml = path.resolve('dist/blog.html');
const distBlogDir = path.resolve('dist/blog');
const distBlogIndex = path.join(distBlogDir, 'index.html');

if (fs.existsSync(distBlogHtml)) {
  fs.mkdirSync(distBlogDir, { recursive: true });
  fs.copyFileSync(distBlogHtml, distBlogIndex);
  console.log('✅ Generated dist/blog/index.html for clean URL subdomain routing.');
}
