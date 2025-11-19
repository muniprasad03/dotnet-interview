// scripts/copy-404.cjs
const fs = require('fs');
const path = require('path');

const src = path.join('dist', 'index.html');
const dest = path.join('dist', '404.html');

try {
 if (!fs.existsSync(src)) throw new Error('Run "npm run build" first.');
  fs.copyFileSync(src, dest);
  console.log('✅ Created dist/404.html for SPA routing');
} catch (err) {
  console.error('❌ Failed to create 404.html:', err.message);
  process.exit(1);
}
