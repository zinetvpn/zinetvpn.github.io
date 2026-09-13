import fs from 'node:fs';
const site = fs.readFileSync('src/config/site.ts', 'utf8');
const robots = fs.readFileSync('public/robots.txt', 'utf8');
if (!site.includes('https://zinetvpn.github.io') || !robots.includes('sitemap-index.xml'))
  process.exit(1);
console.log('build config: site URL and robots valid');
