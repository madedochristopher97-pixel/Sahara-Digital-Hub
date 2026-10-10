import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';

const BASE_URL = 'https://www.saharadigitalhub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: Array<{ path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/branding', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/software', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/careers', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const staticEntries = pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const workEntries = caseStudies.map((study) => ({
    url: `${BASE_URL}/work/${study.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...workEntries];
}
