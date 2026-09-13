import fs from 'node:fs';
import path from 'node:path';
const dir = 'src/content/guides';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
const required = [
  'title',
  'description',
  'slug',
  'intent',
  'primaryKeyword',
  'publishedAt',
  'reviewedAt',
  'reviewCycleDays',
  'author',
  'status',
  'ctaId',
  'canonicalMode',
  'noindex',
  'sources',
];
const slugs = new Set();
let bad = false;
for (const file of files) {
  const text = fs.readFileSync(path.join(dir, file), 'utf8');
  const front = text.split('---')[1] || '';
  for (const key of required) {
    if (!new RegExp(`^${key}:`, 'm').test(front)) {
      console.error(`${file}: missing ${key}`);
      bad = true;
    }
  }
  const slug = front.match(/^slug:\s*["']?([^"'\r\n]+)/m)?.[1].trim();
  if (!slug || slugs.has(slug)) {
    console.error(`${file}: invalid or duplicate slug`);
    bad = true;
  } else slugs.add(slug);
  if (/TODO|PLACEHOLDER|lorem ipsum|citation needed/i.test(text)) {
    console.error(`${file}: contains internal placeholder`);
    bad = true;
  }
}
if (files.length < 5) {
  console.error('Expected five MVP guide files');
  bad = true;
}
if (bad) process.exit(1);
console.log(`content: ${files.length} guides valid`);
