import fs from 'node:fs';
import path from 'node:path';
const roots = ['src', 'public'];
const files = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p) : files.push(p);
  }
};
roots.forEach(walk);
const known = new Set([
  '/',
  '/buy-vpn/',
  '/downloads/',
  '/android/',
  '/iphone/',
  '/windows/',
  '/404/',
]);
let bad = false;
for (const f of files.filter((f) => /\.(astro|mdx|html)$/.test(f))) {
  const s = fs.readFileSync(f, 'utf8');
  for (const m of s.matchAll(/(?:href=|href\s*=\s*)["'](\/[a-z0-9-]*\/)(?:#[^"']*)?["']/gi)) {
    if (!known.has(m[1])) {
      console.error(`${f}: unknown internal link ${m[1]}`);
      bad = true;
    }
  }
}
if (bad) process.exit(1);
console.log('links: internal route references valid');
