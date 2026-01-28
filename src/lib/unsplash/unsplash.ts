import { UnsplashPhotoType, UnsplashStatisticsType } from './types';
const unsplash_access_key = process.env.UNSPLASH_ACCESS_KEY;

const UNSPLASH_ENDPOINT = 'https://api.unsplash.com/users/destroymayor';

export async function getUnsplashPhotos() {
    const params = new URLSearchParams({
        client_id: unsplash_access_key ?? '',
        order_by: 'views',
        per_page: '30',
    });

    const request = await fetch(`${UNSPLASH_ENDPOINT}/photos?${params}`);
    const status = request.status;

    if (status === 204 || status > 400) {
        return { status, data: undefined };
    }

    const data = await request.json();

    const photos = data?.map((item: UnsplashPhotoType) => ({
        id: item.id,
        blur_hash: item.blur_hash,
        created_at: item.created_at,
        alt_description: item.alt_description,
        urls: {
            raw: item.urls.raw,
            regular: item.urls.regular,
        },
        links: {
            html: item.links.html,
            download: item.links.download,
        },
    }));

    return { status, data: photos };
}

export async function getUnsplashStatistics() {
    const request = await fetch(
        `${UNSPLASH_ENDPOINT}/statistics?client_id=${unsplash_access_key}`
    );
    const status = request.status;

    if (status === 204 || status > 400) {
        return { status, data: undefined };
    }

    const data: UnsplashStatisticsType = await request.json();

    return { status, data };
}
