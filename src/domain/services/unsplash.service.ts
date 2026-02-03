import {
    fetchUnsplashPhotos,
    fetchUnsplashStatistics,
} from '@/domain/repositories/unsplash.repository';

export async function getUnsplashPhotos() {
    return fetchUnsplashPhotos();
}

export async function getUnsplashStatistics() {
    return fetchUnsplashStatistics();
}
