import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api/',
          '/private/',
          '/dashboard',
          '/*.pdf',
          '/*?*sort=',
          '/*?*filter=',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'AhrefsBot',
        crawlDelay: 10,
      },
      {
        userAgent: 'SemrushBot',
        crawlDelay: 10,
      },
    ],
    sitemap: 'https://vedicskill.com/sitemap.xml',
  };
}