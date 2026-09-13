export const officialLinks = {
  website: 'https://ipsabet.org/',
  telegramBot: 'https://t.me/zinetrobot',
  landingPages: {
    home: '/',
    setup: '/setup/',
    android: '/android/',
    iphone: '/iphone/',
    windows: '/windows/',
  },
  clients: {
    android: 'https://github.com/2dust/v2rayNG/releases',
    windows: 'https://github.com/2dust/v2rayN/releases',
    iphoneStreisand: 'https://apps.apple.com/app/streisand/id6450534064',
  },
} as const;

export function botUrl(ctaId: string) {
  return `${officialLinks.telegramBot}?start=${encodeURIComponent(ctaId)}`;
}

export type OfficialLanding = keyof typeof officialLinks.landingPages;

export function websiteUrl(pageSlug: string, landing: OfficialLanding = 'home') {
  const url = new URL(officialLinks.landingPages[landing], officialLinks.website);
  url.searchParams.set('utm_source', 'github');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'github_pages');
  url.searchParams.set('utm_content', pageSlug || 'home');
  return url.toString();
}
