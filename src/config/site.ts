import { env } from './env';

export const siteConfig = {
  name: 'OanhRussian',
  description: 'Nền tảng học tiếng Nga hiện đại, trực quan và hiệu quả cho người Việt.',
  url: env.SITE_URL,
  ogImage: '/images/og-default.jpg',
  links: {
    github: 'https://github.com/anhlioanh/Oanhrussian',
  },
};

export type SiteConfig = typeof siteConfig;
