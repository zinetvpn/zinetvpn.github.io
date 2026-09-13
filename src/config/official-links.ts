export const officialLinks = {
  website: 'https://ipsabet.org/',
  telegramBot: 'https://t.me/zinetrobot',
  clients: {
    android: 'https://github.com/2dust/v2rayNG/releases',
    windows: 'https://github.com/2dust/v2rayN/releases',
    iphoneStreisand: 'https://apps.apple.com/app/streisand/id6450534064',
  },
} as const;

export function botUrl(ctaId: string) {
  return `${officialLinks.telegramBot}?start=${encodeURIComponent(ctaId)}`;
}

export function websiteUrl(pageSlug: string) {
  const url = new URL(officialLinks.website);
  url.searchParams.set('utm_source', 'github');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'github_pages');
  url.searchParams.set('utm_content', pageSlug || 'home');
  return url.toString();
}
