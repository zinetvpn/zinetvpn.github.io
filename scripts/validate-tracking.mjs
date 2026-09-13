import fs from 'node:fs';
const expected = [
  'github_home',
  'github_buy_vpn',
  'github_downloads',
  'github_android',
  'github_iphone',
  'github_windows',
];
const corpus = [
  'src/pages/index.astro',
  ...fs.readdirSync('src/content/guides').map((f) => `src/content/guides/${f}`),
]
  .map((f) => fs.readFileSync(f, 'utf8'))
  .join('\n');
let bad = false;
for (const id of expected) {
  if (!corpus.includes(id)) {
    console.error(`missing tracking id ${id}`);
    bad = true;
  }
}
const links = fs.readFileSync('src/config/official-links.ts', 'utf8');
for (const token of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
  if (!links.includes(token)) {
    console.error(`missing ${token}`);
    bad = true;
  }
}
if (bad) process.exit(1);
console.log('tracking: CTA ids and UTM builder valid');
