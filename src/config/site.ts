export const siteConfig = {
  name: 'OanhRussian',
  description: 'Nền tảng học tiếng Nga hiện đại, trực quan và hiệu quả cho người Việt.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://oanhrussian.vercel.app',
  ogImage: '/images/og-default.jpg',
  links: {
    github: 'https://github.com/anhlioanh/Oanhrussian',
  },
};

export type SiteConfig = typeof siteConfig;
