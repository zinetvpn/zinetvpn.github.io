# مرکز آموزش زی‌نت

سایت استاتیک فارسی و راست‌به‌چپ زی‌نت برای GitHub Pages. این پروژه فروشگاه نیست و فایل اجرایی میزبانی نمی‌کند.

## توسعه محلی

نیازمند Node.js 22 یا جدیدتر است.

```bash
npm ci
npm run dev
npm run build
```

تمام لینک‌های رسمی در `src/config/official-links.ts` و نشانی انتشار در `src/config/site.ts` نگهداری می‌شوند. برای فعال‌کردن Google Analytics، مقدار `measurementId` را در `src/config/analytics.ts` قرار دهید.

## انتشار

مخزن باید با نام `zinetvpn.github.io` ساخته شود و GitHub Pages روی منبع **GitHub Actions** قرار گیرد. Workflow انتشار پس از Push به `main` اجرا می‌شود. انتشار Production نیازمند تأیید مالک پروژه است.
