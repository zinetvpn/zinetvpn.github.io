# برنامه Tracking

ربات: `https://t.me/zinetrobot?start={cta_id}`. سایت: UTMهای `github / referral / github_pages / {page_slug}`. Analytics پیش‌فرض خاموش است و با `measurementId` در `src/config/analytics.ts` فعال می‌شود.

## قرارداد پیشنهادی ربات

در `/start github_<content>`، ورودی را با Allowlist پارامترها اعتبارسنجی کنید. در اولین لمس `first_touch_source=github`، `first_touch_campaign=github_pages` و `first_touch_content=<content>` را فقط اگر خالی‌اند ذخیره کنید. در هر ورود، فیلدهای متناظر `last_touch_*` را به‌روزرسانی کنید. Timestamp و شناسه داخلی کاربر کافی است؛ Token یا لینک اشتراک در Analytics ذخیره نشود.

رویدادهای سایت: `page_view` خودکار و `cta_bot_click`، `cta_site_click`، `download_source_click`، `device_guide_select`، `faq_open` در صورت فعال‌بودن Analytics.

## لینک‌سازی خارجی به سایت اصلی

- خانه و صفحه خرید به صفحه اصلی `ipsabet.org/` با انکرتکست طبیعی «خرید فیلترشکن» لینک می‌دهند.
- راهنماهای دستگاه به لندینگ هم‌نام `/android/`، `/iphone/` و `/windows/` لینک می‌دهند.
- صفحه دانلود به هاب `/setup/` لینک می‌دهد.
- هر لینک فقط یک‌بار در بخش مرتبط آمده و UTM اختصاصی صفحه دارد؛ تکرار انکرتکست، لینک مخفی و Sitewide exact-match انجام نمی‌شود.
