// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://primepath-next.vercel.app/';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/home', '/about', '/service', '/blog', '/contact', '/getstart', '/project'],
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}