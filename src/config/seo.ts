import { siteConfig } from './site';

export const seoConfig = {
  titleDefault: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
};
