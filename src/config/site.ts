export const siteConfig = {
  name: 'OanhRussian',
  description: 'Nền tảng học tiếng Nga hiện đại, lộ trình bài bản và hiệu quả.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://oanhrussian.vercel.app',
  ogImage: '/og.png',
  keywords: [
    'tiếng Nga',
    'học tiếng Nga',
    'Russian language',
    'ngữ pháp tiếng Nga',
    'từ vựng tiếng Nga',
    'OanhRussian',
  ],
  links: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
};

export type SiteConfig = typeof siteConfig;
