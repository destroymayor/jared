import { defineEndpoint } from './core/define-endpoint';
import type { UnsplashPhotoType, UnsplashStatisticsType } from '@/lib/unsplash/types';

const UNSPLASH_USER_ENDPOINT = 'https://api.unsplash.com/users/destroymayor';

export const unsplashPhotos = defineEndpoint<UnsplashPhotoType[], UnsplashPhotoType[]>({
    request: ({ fetch, env }) => {
        const params = new URLSearchParams({
            client_id: env.UNSPLASH_ACCESS_KEY ?? '',
            order_by: 'views',
            per_page: '30',
        });

        return fetch(`${UNSPLASH_USER_ENDPOINT}/photos?${params}`);
    },
    transform: (photos) =>
        photos.map((item) => ({
            id: item.id,
            blur_hash: item.blur_hash,
            created_at: item.created_at,
            alt_description: item.alt_description,
            width: item.width,
            height: item.height,
            urls: {
                raw: item.urls.raw,
                regular: item.urls.regular,
            },
            links: {
                html: item.links.html,
                download: item.links.download,
            },
        })),
    fallback: [],
});

export const unsplashStatistics = defineEndpoint<
    UnsplashStatisticsType,
    UnsplashStatisticsType | null
>({
    request: ({ fetch, env }) =>
        fetch(
            `${UNSPLASH_USER_ENDPOINT}/statistics?client_id=${env.UNSPLASH_ACCESS_KEY}`
        ),
    transform: (statistics) => statistics,
    fallback: null,
});
