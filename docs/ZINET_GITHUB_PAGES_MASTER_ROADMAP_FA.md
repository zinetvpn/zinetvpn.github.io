# سند مادر پروژه GitHub Pages زی‌نت

نسخه: 1.1  
وضعیت: آماده شروع  
مالک پروژه: ZiNet  
هدف: ساخت یک مرکز آموزشی و فنی فارسی روی GitHub Pages برای دسترسی پایدار کاربران، جذب تراف ارگانیک، معرفی شفاف ZiNet و هدایت قابل‌اندازه‌گیری کاربران به کانال‌های رسمی.

---

## 1. نتیجه نهایی پروژه

یک سایت سریع، استاتیک، فارسی و موبایل‌محور روی آدرس پیش‌فرض GitHub Pages ساخته می‌شود. سایت باید به‌تنهایی برای کاربر مفید باشد و در کنار آموزش‌ها، ZiNet و مسیرهای رسمی آن را معرفی کند.

این پروژه فروشگاه یا کپی سایت اصلی نیست. قیمت‌گذاری، پرداخت و صدور سرویس داخل GitHub Pages انجام نمی‌شود. مسیر خرید یا تست، با CTA محدود و شفاف به ربات رسمی و در صورت نیاز سایت رسمی هدایت می‌شود.

### اهداف به‌ترتیب اولویت

1. ایجاد یک مسیر در دسترس برای کاربران ایران در صورت مسدودبودن دامنه اصلی.
2. جذب کاربر از جست‌وجوهای «خرید فیلترشکن» و موضوعات آموزشی نزدیک.
3. انتقال قابل‌اندازه‌گیری کاربران به ربات ZiNet.
4. تقویت اعتماد و حضور برند ZiNet در GitHub.
5. دریافت Mention و بک‌لینک طبیعی؛ نه تولید انبوه لینک مصنوعی.

### شاخص‌های موفقیت

- تعداد صفحات ایندکس‌شده
- Impression و Click در Google Search Console
- رتبه و CTR کوئری‌های هدف
- ورودی هر صفحه به ربات با Start Parameter اختصاصی
- شروع تست رایگان از ورودی GitHub
- خرید منتسب به GitHub و هر Landing Page
- نرخ خروج از صفحه و کلیک CTA
- تعداد بک‌لینک‌ها، Mentionها، Star و Fork واقعی

---

## 2. تصمیم‌های پایه

| موضوع         | تصمیم پایه                                          |
| ------------- | --------------------------------------------------- |
| نوع پروژه     | سایت آموزشی/فنی رسمی ZiNet روی GitHub Pages         |
| ساختار مالکیت | GitHub Organization رسمی با نام `zinetvpn`          |
| مخزن اصلی     | `zinetvpn.github.io`                                |
| آدرس انتشار   | `https://zinetvpn.github.io/`                       |
| مجری اصلی     | Codex در همین پروژه؛ Cursor فقط ابزار اختیاری کاربر |
| دامنه اختصاصی | در نسخه اول استفاده نمی‌شود                         |
| فریم‌ورک      | Astro با خروجی کاملاً Static                        |
| زبان کد       | TypeScript برای تنظیمات و اجزا                      |
| محتوای صفحات  | Markdown/MDX با Frontmatter استاندارد               |
| استایل        | CSS سبک؛ بدون وابستگی سنگین و بدون شلوغی بصری       |
| انتشار        | GitHub Actions و GitHub Pages                       |
| زبان          | فارسی، RTL و ساده برای کاربر کم‌دانش فنی            |
| تبدیل         | CTA محدود به ربات و سایت رسمی با Tracking مستقل     |
| فروش مستقیم   | ممنوع داخل GitHub Pages                             |
| محتوای تکراری | ممنوع؛ محتوا باید مستقل از سایت اصلی باشد           |

اگر GitHub هنگام ایجاد حساب نشان داد نام `zinetvpn` آزاد نیست، جایگزین از پیش تعیین‌شده `zinetco` است. همه مسیرها از متغیر مرکزی خوانده می‌شوند تا تغییر نام نیازمند بازنویسی کد نباشد.

---

## 3. محدوده نسخه اول

### داخل محدوده

- طراحی و پیاده‌سازی سایت
- صفحه اصلی و صفحات راهنما
- صفحه هدف «راهنمای خرید فیلترشکن»
- معرفی رسمی و محدود ZiNet
- لینک ربات با Attribution مستقل برای هر صفحه
- Sitemap، Robots، Canonical، Open Graph و Structured Data
- اتصال آنالیتیکس و Search Console
- کنترل کیفیت محتوا، لینک‌ها، Build و نمایش موبایل
- مستندات توسعه و انتشار
- زیرساخت اضافه‌کردن صفحات بعدی بدون کدنویسی مجدد

### خارج از محدوده نسخه اول

- درگاه پرداخت، سبد خرید یا نمایش تعرفه کامل
- دریافت ایمیل، شماره موبایل یا اطلاعات پرداخت
- پنل کاربری و ورود کاربران
- انتشار کانفیگ یا Subscription خصوصی
- میزبانی فایل‌های اجرایی ناشناس یا نسخه‌های دستکاری‌شده برنامه‌ها
- ساخت چند حساب GitHub یا چند سایت مشابه برای اشغال نتایج
- کپی مقالات سایت اصلی ZiNet
- انتشار خودکار تعداد زیادی مقاله تولیدشده با AI

---

## 4. معماری اطلاعات و نقشه صفحات MVP

| اولویت | مسیر                | عنوان کاری                                        | Intent          | CTA اصلی              |
| ------ | ------------------- | ------------------------------------------------- | --------------- | --------------------- |
| P0     | `/`                 | مرکز آموزش و دسترسی رسمی ZiNet                    | برند/راهبری     | مشاهده راهنماها       |
| P0     | `/buy-vpn/`         | راهنمای خرید فیلترشکن؛ چه سرویسی مناسب شماست؟     | تجاری-اطلاعاتی  | دریافت تست از ربات    |
| P0     | `/downloads/`       | دانلود امن برنامه‌های اتصال برای دستگاه‌های مختلف | Task Completion | انتخاب دستگاه         |
| P0     | `/android/`         | راه‌اندازی VPN و V2Ray در اندروید                 | Task Completion | راهنمای اتصال/ربات    |
| P0     | `/iphone/`          | راه‌اندازی VPN و V2Ray در آیفون                   | Task Completion | راهنمای اتصال/ربات    |
| P0     | `/windows/`         | راه‌اندازی V2Ray و VPN در ویندوز                  | Task Completion | راهنمای اتصال/ربات    |
| P1     | `/v2ray/`           | V2Ray چیست و چگونه از آن استفاده کنیم؟            | اطلاعاتی        | انتخاب راهنمای دستگاه |
| P1     | `/troubleshooting/` | رفع مشکل وصل‌نشدن یا کندی اتصال                   | پشتیبانی        | انتخاب مشکل           |
| P1     | `/free-vs-paid/`    | سرویس رایگان یا پولی؛ تفاوت‌های واقعی             | مقایسه‌ای       | دریافت تست            |
| P1     | `/about/`           | درباره پروژه و مسئولیت محتوایی ZiNet              | اعتماد          | کانال‌های رسمی        |
| P1     | `/contact/`         | راه‌های ارتباط رسمی و گزارش مشکل                  | راهبری          | ربات/پشتیبانی         |

صفحات P1 بعد از تأیید کیفیت و ایندکس صفحات P0 منتشر می‌شوند. هر صفحه جدید باید Intent مستقل داشته باشد و قبل از تولید، بررسی Cannibalization شود.

---

## 5. ساختار مخزن

```text
zinetvpn.github.io/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── content-update.yml
│   │   └── broken-link.yml
│   ├── CODEOWNERS
│   └── pull_request_template.md
├── docs/
│   ├── MASTER_PLAN.md
│   ├── CONTENT_MAP.md
│   ├── CONTENT_RULES.md
│   ├── SEO_RULES.md
│   ├── DESIGN_SYSTEM.md
│   ├── TRACKING_PLAN.md
│   ├── QA_CHECKLIST.md
│   ├── ACCESS_AND_SECURITY.md
│   ├── EDITORIAL_CALENDAR.md
│   └── DECISIONS.md
├── public/
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── images/
│       ├── brand/
│       ├── guides/
│       └── og/
├── scripts/
│   ├── validate-content.mjs
│   ├── validate-links.mjs
│   └── validate-tracking.mjs
├── src/
│   ├── components/
│   │   ├── Breadcrumbs.astro
│   │   ├── CallToAction.astro
│   │   ├── DeviceSelector.astro
│   │   ├── FaqList.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── LastReviewed.astro
│   │   ├── OfficialLinks.astro
│   │   └── TableOfContents.astro
│   ├── config/
│   │   ├── analytics.ts
│   │   ├── official-links.ts
│   │   └── site.ts
│   ├── content/
│   │   └── guides/
│   │       ├── buy-vpn.mdx
│   │       ├── downloads.mdx
│   │       ├── android.mdx
│   │       ├── iphone.mdx
│   │       └── windows.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── GuideLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   └── [...slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── CONTENT_LICENSE.md
```

ممکن است هنگام پیاده‌سازی جزئیات فنی مسیرها تغییر کند، اما تفکیک محتوا، تنظیمات، اجزا، QA و مستندات باید حفظ شود.

---

## 6. استاندارد Frontmatter محتوا

هر راهنما باید حداقل داده‌های زیر را داشته باشد:

```yaml
title: 'راهنمای خرید فیلترشکن؛ چه سرویسی مناسب شماست؟'
description: 'توضیح کوتاه، طبیعی و مستقل برای نتیجه جست‌وجو.'
slug: 'buy-vpn'
intent: 'commercial-investigation'
primaryKeyword: 'خرید فیلترشکن'
secondaryKeywords: []
publishedAt: 'YYYY-MM-DD'
reviewedAt: 'YYYY-MM-DD'
reviewCycleDays: 90
author: 'ZiNet Editorial Team'
status: 'draft'
ctaId: 'github_buy_vpn'
canonicalMode: 'self'
noindex: false
sources: []
```

Build باید در صورت نبودن فیلدهای ضروری، تکراری‌بودن Slug، CTA نامعتبر یا تاریخ نامعتبر Fail شود.

---

## 7. قوانین محتوا

### لحن

- فارسی طبیعی، ساده، حرفه‌ای و قابل‌فهم برای کاربر عادی
- اصطلاح انگلیسی فقط وقتی معادل فارسی باعث ابهام شود
- توضیح اصطلاح فنی در اولین استفاده
- پاراگراف‌ها و پاسخ‌های FAQ کوتاه
- بدون ادعاهای مطلق و تبلیغاتی مانند «بهترین»، «صددرصد امن» یا «بدون قطعی» مگر با مدرک روشن
- بدون یادداشت داخلی نویسنده، Placeholder یا عبارت‌هایی مثل «مدرکی ارائه نشده است» در خروجی نهایی

### اصالت

- هیچ صفحه‌ای از `ipsabet.org` یا دامنه‌های قبلی/بعدی سایت اصلی کپی نمی‌شود.
- موضوع مشترک مجاز است، اما زاویه، ساختار، مثال، جدول و متن باید مستقل باشد.
- هر صفحه باید حتی بدون کلیک روی CTA مسئله اصلی کاربر را حل کند.
- اطلاعات مربوط به برنامه‌ها فقط از منبع رسمی همان برنامه یا مستندات معتبر گرفته می‌شود.
- ادعاهای ZiNet فقط از Product Facts تأییدشده استفاده می‌کنند.

### تبدیل

- حداکثر یک CTA اصلی در نیمه بالایی و یک CTA پایانی.
- CTA نباید مانع مطالعه محتوا شود.
- Redirect خودکار، Pop-up مزاحم و لینک مخفی ممنوع است.
- قیمت و خرید مستقیم در GitHub Pages قرار نمی‌گیرد.
- ارتباط تجاری صفحه و مالکیت ZiNet شفاف ذکر می‌شود.

---

## 8. قوانین سئو

- هر صفحه فقط یک Intent و یک کلمه کلیدی اصلی دارد.
- قبل از تولید هر صفحه، SERP و Cannibalization با سایت اصلی بررسی می‌شود.
- Canonical صفحات مستقل روی خود صفحه است؛ اگر محتوایی عمداً بازنشر شود، Canonical به منبع اصلی و تصمیم آن در `DECISIONS.md` ثبت می‌شود.
- Title، H1 و Description اختصاصی و طبیعی هستند.
- فقط یک H1 و سلسله‌مراتب صحیح H2/H3 استفاده می‌شود.
- لینک داخلی بر اساس نیاز کاربر نوشته می‌شود، نه تکرار Anchor دقیق.
- Sitemap، Robots، Breadcrumb و Open Graph در Build تولید یا بررسی می‌شوند.
- Schema فقط مطابق محتوای قابل‌مشاهده صفحه است.
- FAQ Schema فقط در صورت نمایش همان پرسش و پاسخ در صفحه استفاده می‌شود.
- صفحات کم‌ارزش، فیلترها و خروجی‌های آزمایشی `noindex` خواهند بود.
- ساخت صفحات مشابه برای شهرها، دستگاه‌ها یا عبارت‌های هم‌معنی بدون Intent مستقل ممنوع است.
- انتشار انبوه، Keyword Stuffing، تبادل لینک مصنوعی و ساخت حساب‌های متعدد ممنوع است.

---

## 9. طراحی و تجربه کاربری

- موبایل در اولویت و عرض خواندن محتوا محدود باشد.
- رنگ اصلی برند `#155DFC` و پس‌زمینه غالب سفید.
- اجزای گرد، تمیز و شبیه SaaS؛ بدون شلوغی و جلوه‌های سنگین.
- فونت فارسی خوانا با Fallback مناسب و کمترین تأثیر روی سرعت.
- کنتراست، Focus State، Keyboard Navigation و Reduced Motion رعایت شود.
- تصاویر فقط وقتی استفاده شوند که فهم راهنما را بهتر کنند.
- تمام تصاویر آموزشی باید تاریخ/نسخه بررسی داشته باشند.
- CTA اصلی در موبایل واضح ولی غیرمزاحم باشد.
- هیچ عنصر حیاتی تنها با JavaScript قابل مشاهده نباشد.

### بودجه عملکرد

- JavaScript اولیه تا حد امکان کمتر از 80KB فشرده
- تصویر Hero ترجیحاً کمتر از 120KB
- نبود خطای Accessibility بحرانی
- هدف Lighthouse برای Performance، SEO و Accessibility حداقل 90
- جلوگیری از Layout Shift محسوس

---

## 10. Tracking و Attribution

### لینک‌های پایه

```text
ربات: https://t.me/zinetrobot?start={cta_id}
سایت: https://ipsabet.org/?utm_source=github&utm_medium=referral&utm_campaign=github_pages&utm_content={page_slug}
```

### رویدادهای پیشنهادی

- `page_view`
- `cta_bot_click`
- `cta_site_click`
- `download_source_click`
- `device_guide_select`
- `faq_open`

### الزام سمت ربات

ربات باید مقدار `start` را هنگام اولین ورود ذخیره کند و حداقل این فیلدها را نگه دارد:

- `first_touch_source = github`
- `first_touch_campaign`
- `first_touch_content`
- `last_touch_source`
- `last_touch_campaign`
- `last_touch_content`

هیچ Token، Secret، Subscription URL یا شناسه حساس در مخزن عمومی ذخیره نمی‌شود.

---

## 11. نقش‌ها و ساب‌ایجنت‌ها

ساب‌ایجنت‌ها فقط برای کارهای مستقل و محدود استفاده می‌شوند. تصمیم نهایی، ادغام و تأیید انتشار با ایجنت اصلی است. حداکثر ترکیب هم‌زمان پیشنهادی: ایجنت اصلی + 6 ساب‌ایجنت.

| نقش                        | مسئولیت                                          | خروجی                       | اجازه انتشار مستقیم     |
| -------------------------- | ------------------------------------------------ | --------------------------- | ----------------------- |
| Lead / Main Agent          | معماری، تقسیم کار، کنترل Scope، ادغام و QA نهایی | نسخه قابل تأیید             | خیر، مگر با دستور کاربر |
| SERP Researcher            | بررسی نتایج، Intent، رقبا و منابع رسمی           | Research Note و Keyword Map | خیر                     |
| Content Strategist         | Brief، معماری داخلی و Cannibalization            | Content Brief               | خیر                     |
| Writer                     | نوشتن Draft طبق Brief و Product Facts            | MDX Draft                   | خیر                     |
| Editor & Fact Checker      | ساده‌سازی، حذف ادعای بی‌مدرک و کنترل منابع       | Edited Draft و QA Report    | خیر                     |
| Frontend Engineer          | اجزا، Layout، Build، Responsive و Accessibility  | Code و Test Results         | خیر                     |
| Technical SEO & Release QA | Metadata، Schema، Sitemap، لینک‌ها و Lighthouse  | Release Checklist           | خیر                     |

### قواعد کار ساب‌ایجنت‌ها

- هر مأموریت باید ورودی، خروجی، محدوده و Definition of Done روشن داشته باشد.
- یک فایل هم‌زمان توسط دو ایجنت ویرایش نمی‌شود.
- Researcher و Reviewer می‌توانند موازی کار کنند؛ Writer پس از Brief شروع می‌کند.
- ساب‌ایجنت اجازه تغییر Product Facts یا تصمیم تجاری را ندارد.
- هیچ ساب‌ایجنتی Secret، تنظیمات تولید یا دسترسی انتشار دریافت نمی‌کند مگر ضرورت مشخص.
- خروجی ساب‌ایجنت بدون بازبینی ایجنت اصلی وارد نسخه Release نمی‌شود.

---

## 12. Skillهای موردنیاز

### Skillهای موجود که در طول پروژه استفاده می‌شوند

| Skill            | کاربرد                                                            |
| ---------------- | ----------------------------------------------------------------- |
| Personal Context | حفظ تصمیم‌ها و محدودیت‌های قبلی ZiNet در ادامه پروژه              |
| Library          | نگهداری پایدار سندها، Briefها و Deliverableهای پروژه              |
| Image Generation | ساخت OG Image، تصاویر آموزشی یا Illustration در صورت نیاز         |
| GitHub Connector | ساخت/ویرایش Repository، Branch، Pull Request و بررسی وضعیت انتشار |
| Browser Control  | فقط برای تنظیمات تعاملی‌ای که API یا Connector پوشش نمی‌دهد       |

### Skill اختصاصی پیشنهادی

پس از تثبیت نسخه اول قوانین، یک Skill اختصاصی با نام پیشنهادی زیر ساخته می‌شود:

```text
zinet-github-pages
```

ساختار پیشنهادی Skill:

```text
zinet-github-pages/
├── SKILL.md
├── references/
│   ├── product-facts.md
│   ├── content-rules.md
│   ├── seo-rules.md
│   ├── design-system.md
│   ├── tracking.md
│   └── qa-checklist.md
├── templates/
│   ├── content-brief.md
│   ├── guide.mdx
│   └── release-report.md
└── scripts/
    ├── validate-content.mjs
    └── validate-links.mjs
```

Skill اختصاصی قبل از تثبیت قوانین ساخته نمی‌شود تا تصمیم‌های موقت به قواعد دائمی تبدیل نشوند.

---

## 13. دسترسی‌های موردنیاز

### مرحله برنامه‌ریزی و تولید محلی

- اطلاعات قطعی محصول و مزایای قابل‌ادعا
- آدرس نهایی سایت، ربات و پشتیبانی
- لوگو و دارایی‌های برند
- دسترسی به صفحات فعلی ZiNet برای بررسی Cannibalization

### مرحله ایجاد Repository و انتشار

- نصب و اتصال GitHub Connector برای Codex، یا ایجاد مخزن خالی توسط کاربر و ارائه دسترسی Git
- مجوز Read/Write فقط برای مخزن پروژه
- مجوز ایجاد Branch، Commit و Pull Request
- امکان تنظیم GitHub Pages و GitHub Actions

### مرحله اندازه‌گیری

- Measurement ID مناسب برای آنالیتیکس
- دسترسی یا همکاری کاربر برای ثبت Property در Search Console
- امکان افزودن Verification File یا Meta Tag
- امکان اعمال تغییر کوچک در ربات برای ذخیره Start Parameter

### اصل حداقل دسترسی

- دسترسی Admin کل Organization فقط اگر تنظیم اولیه Pages بدون آن ممکن نباشد.
- Tokenها هرگز در گفتگو، Commit، Issue یا فایل عمومی قرار نمی‌گیرند.
- Secretهای ضروری فقط در GitHub Actions Secrets ذخیره می‌شوند.
- انتشار Production یک مرحله جدا و قابل تأیید دارد.

---

## 14. جریان استاندارد تولید هر صفحه

```text
Keyword/Intent
→ SERP Research
→ Cannibalization Check
→ Content Brief
→ Draft
→ Fact Check & Simplification
→ MDX Integration
→ SEO/Schema QA
→ Visual/Responsive QA
→ User Approval
→ Merge & Deploy
→ Indexing & Measurement
```

### Definition of Done هر صفحه

- Intent صفحه در یک جمله مشخص است.
- هیچ تضاد جدی با صفحات اصلی ZiNet ندارد.
- متن مستقل، طبیعی و بدون یادداشت داخلی است.
- تمام ادعاهای مهم بررسی شده‌اند.
- CTA و Tracking اختصاصی کار می‌کنند.
- Title، Description، Canonical، OG و Schema معتبرند.
- لینک داخلی و خارجی شکسته وجود ندارد.
- صفحه روی موبایل، دسکتاپ و بدون JavaScript قابل استفاده است.
- Build و Validationها Pass شده‌اند.
- تاریخ بازبینی بعدی مشخص است.

---

## 15. Roadmap اجرایی

### فاز 0 — تثبیت تصمیم‌ها و دسترسی‌ها

خروجی‌ها:

- تأیید نام Organization و Repository
- تکمیل `PRODUCT_FACTS.md`
- تکمیل `OFFICIAL_LINKS.md`
- تعیین Measurement ID و ساختار Attribution ربات
- تصمیم درباره عمومی یا خصوصی‌بودن مخزن در زمان توسعه

شرط عبور: اطلاعات رسمی و مسیرهای تبدیل بدون ابهام باشند.

### فاز 1 — تحقیق و معماری محتوا

خروجی‌ها:

- SERP Research برای کلمه اصلی و کوئری‌های نزدیک
- Keyword/Intent Map
- Cannibalization Map نسبت به دامنه فعلی `ipsabet.org`
- معماری اطلاعات و Internal Linking Map
- Brief صفحات P0

شرط عبور: برای هر صفحه Intent مستقل و هدف تبدیل مشخص باشد.

### فاز 2 — طراحی سیستم و اسکلت فنی

خروجی‌ها:

- ایجاد پروژه Astro
- Design Tokens و اجزای پایه
- Layout و Content Collection
- CI، Preview و Deploy Workflow
- Validatorهای اولیه
- صفحه نمونه با محتوای آزمایشی `noindex`

شرط عبور: Build موفق، Responsive و Lighthouse پایه قابل قبول باشد.

### فاز 3 — تولید محتوای MVP

ترتیب انتشار:

1. صفحه اصلی
2. راهنمای خرید فیلترشکن
3. دانلود برنامه‌ها
4. اندروید
5. آیفون
6. ویندوز

شرط عبور هر صفحه: Definition of Done کامل و تأیید محتوایی انجام شده باشد.

### فاز 4 — Tracking و اتصال ربات

خروجی‌ها:

- Start Parameter مستقل برای هر صفحه
- رویدادهای آنالیتیکس
- ذخیره First Touch و Last Touch در ربات
- تست مسیر GitHub → Bot → Trial/Purchase
- گزارش تست Attribution

شرط عبور: یک ورود آزمایشی تا انتهای Funnel قابل ردیابی باشد.

### فاز 5 — QA نهایی و انتشار

خروجی‌ها:

- تست Build، لینک، Metadata و Schema
- تست موبایل و مرورگرهای اصلی
- بررسی امنیت مخزن و نبود Secret
- ثبت Search Console و ارسال Sitemap
- Release Report نسخه 1.0

شرط عبور: تمام خطاهای بحرانی رفع و انتشار توسط کاربر تأیید شود.

### فاز 6 — توسعه اعتبار و محتوا

خروجی‌ها:

- صفحات P1 بر اساس داده واقعی GSC
- ابزار مفید متن‌باز مانند Connection Checker در صورت تأیید Scope
- تصاویر آموزشی اختصاصی
- لینک‌سازی طبیعی از منابع و پروفایل‌های مرتبط
- برنامه بازبینی 30/60/90 روزه

قاعده: انتشار بر اساس داده و نیاز کاربر، نه تعداد صفحه.

### فاز 7 — بهینه‌سازی مستمر

- بررسی هفتگی Indexing، Error و Ranking
- بررسی ماهانه CTR و Conversion صفحات
- بازبینی فصلی آموزش‌ها و لینک دانلود برنامه‌ها
- حذف یا ادغام صفحات ضعیف و هم‌پوشان
- ثبت تمام تصمیم‌ها در `DECISIONS.md`

---

## 16. Git Workflow

### Branchها

```text
main                 # نسخه منتشرشده
develop              # ادغام قبل از انتشار، در صورت نیاز
feat/{short-name}    # قابلیت جدید
content/{slug}       # صفحه یا اصلاح محتوایی
fix/{short-name}     # رفع خطا
```

برای پروژه کوچک می‌توان `develop` را حذف کرد و تمام تغییرات را از Branch مستقل مستقیماً به `main` با Pull Request برد.

### قواعد Commit

```text
feat: add device selector
content: add buy vpn guide
fix: correct canonical URL
seo: add breadcrumb schema
docs: update tracking plan
```

### قواعد Merge

- Build و Validatorها باید Pass شوند.
- تغییر محتوایی باید Brief یا Issue مرتبط داشته باشد.
- تغییر در Tracking باید با یک Test Case همراه باشد.
- تغییر در Product Facts باید در `DECISIONS.md` ثبت شود.
- Force Push روی `main` ممنوع است.

---

## 17. کنترل کیفیت و امنیت

### چک‌های خودکار

- Build موفق
- Type Check
- Frontmatter Validation
- Internal/External Link Check
- CTA Parameter Validation
- نبود Secret شناخته‌شده
- نبود فایل حجیم غیرضروری
- Lighthouse CI یا تست دوره‌ای معادل

### چک‌های انسانی

- صحت مراحل آموزش روی دستگاه یا منبع رسمی
- خوانایی فارسی و حذف اصطلاحات غیرضروری
- تطابق Screenshot با نسخه فعلی برنامه
- صحت ادعاهای ZiNet
- نبود تداخل Intent با سایت اصلی
- شفاف‌بودن مالکیت و ماهیت تجاری لینک‌ها

### موارد ممنوع امنیتی

- Bot Token، Webhook Secret و API Key در مخزن
- اطلاعات مشتری و Subscription URL
- کلید خصوصی، فایل `.env` و خروجی Debug
- فایل نصب دستکاری‌شده یا Mirror بدون کنترل منشأ
- اجرای کد دریافتی از کاربر بدون Sanitization

---

## 18. مسئولیت کاربر و ایجنت اصلی

### کاربر

- تأیید Product Facts، ادعاها و مسیرهای رسمی
- فراهم‌کردن یا تأیید دسترسی GitHub
- تأیید نهایی صفحات تجاری-اطلاعاتی
- انجام تأییدهایی که نیازمند حساب شخصی یا احراز هویت هستند

### ایجنت اصلی

- تحقیق، برنامه‌ریزی و پیشنهاد معماری
- نوشتن محتوا و تمام کدهای پروژه
- ایجاد فایل‌ها، تست و اصلاح
- مدیریت ساب‌ایجنت‌ها و بازبینی خروجی آن‌ها
- ارائه Preview و گزارش QA
- متوقف‌کردن انتشار در صورت ابهام امنیتی، حقوقی یا محتوایی

اصل کار: کاربر نباید برای پیش‌برد پروژه مجبور به نوشتن کد شود؛ تنها تصمیم‌های تجاری، اطلاعات قطعی و تأییدهای دسترسی از او گرفته می‌شود.

---

## 19. نقاط تأیید کاربر

فقط در نقاط زیر تأیید صریح گرفته می‌شود:

1. نام Organization/Repository و لینک‌های رسمی
2. Product Facts و ادعاهای قابل انتشار
3. Design Direction پس از مشاهده Preview اولیه
4. متن صفحه «راهنمای خرید فیلترشکن»
5. فعال‌کردن Tracking و اتصال سمت ربات
6. انتشار نسخه 1.0 روی GitHub Pages

اصلاحات فنی کوچک، تست‌ها و بهبودهای واضح داخل Scope بدون توقف غیرضروری انجام می‌شوند.

---

## 20. اولین Sprint پیشنهادی

### Sprint 1 — Foundation

1. دریافت نام/لینک‌های رسمی و Product Facts.
2. ساخت Keyword Map و Cannibalization Map.
3. نوشتن Brief صفحه اصلی و `/buy-vpn/`.
4. ایجاد مخزن و اسکلت Astro.
5. ساخت Design System و صفحه Preview.
6. تکمیل محتوای صفحه اصلی و راهنمای خرید.
7. اجرای QA و تحویل Preview برای تأیید.

### ورودی‌های لازم برای شروع Sprint 1

- ایجاد GitHub Organization با نام `zinetvpn`؛ جایگزین فقط در صورت اشغال‌بودن: `zinetco`
- سایت رسمی فعلی: `https://ipsabet.org/`؛ قابل تغییر از تنظیمات مرکزی
- ربات رسمی: `https://t.me/zinetrobot`
- لوگوی اصلی و نسخه مناسب پس‌زمینه روشن
- فهرست مزایا و وعده‌هایی که اجازه انتشار عمومی دارند
- روش اجرا: Codex مجری اصلی؛ GitHub Connector روش ترجیحی انتشار

پس از دریافت این ورودی‌ها، کار با تحقیق SERP و ساخت هم‌زمان اسکلت فنی آغاز می‌شود.

---

## 21. اصل نهایی پروژه

این سایت باید یک دارایی مفید و مستقل برای کاربران باشد. رتبه، بک‌لینک و فروش نتیجه کیفیت و دسترسی‌پذیری آن هستند؛ نه نتیجه تولید انبوه صفحات یا سوءاستفاده از اعتبار دامنه GitHub.
