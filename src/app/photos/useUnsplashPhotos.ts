import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';

import { UnsplashPhotoType } from '@/lib/unsplash';

const API_PATH = '/api/unsplash/photos';

export default function useUnsplashPhotos() {
    return useQuery({
        queryKey: [API_PATH],
        queryFn: () => fetcher<UnsplashPhotoType[]>(API_PATH),
        refetchOnWindowFocus: false,
    });
}
