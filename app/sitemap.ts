// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://primepath-next.vercel.app/';

  return [
    { url: `${baseUrl}/`, lastModified: '2025-10-23', changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: '2025-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/service`, lastModified: '2025-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: '2025-10-15', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: '2025-10-15', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/getstart`, lastModified: '2025-10-15', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/project`, lastModified: '2025-10-15', changeFrequency: 'monthly', priority: 0.8 },
  ];
}