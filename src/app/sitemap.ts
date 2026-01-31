import { MetadataRoute } from 'next';

import { getMDXSourcePaths } from '@/domain';

const SITE_URL = 'https://jared-chen.me';

export default function sitemap(): MetadataRoute.Sitemap {
    const snippetPaths = getMDXSourcePaths('content/snippets');
    const snippetRoutes = snippetPaths.map((item: { folder: string; slug: string }) => ({
        url: `${SITE_URL}/snippets/${item.folder}/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/dashboard`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/photos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/snippets`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/guestbook`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/tweets`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ];

    return [...staticRoutes, ...snippetRoutes];
}
