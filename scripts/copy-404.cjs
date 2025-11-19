fs = require('fs');

const src = 'dist/index.html';
const dest = 'dist/404.html';

try {
  fs.copyFileSync(src, dest);
  console.log('Created dist/404.html for SPA routing');
} catch (err) {
  console.error('Failed to create 404.html:', err);
  process.exit(1);
}
