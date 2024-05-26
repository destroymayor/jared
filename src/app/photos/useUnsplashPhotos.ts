import fetcher from '@/lib/fetcher';
import { useSuspenseQuery } from '@tanstack/react-query';

import { UnsplashPhotoType } from '@/lib/unsplash';

const API_PATH = '/api/unsplash/photos';

const useUnsplashPhotos = () => {
    const query = useSuspenseQuery({
        queryKey: [API_PATH],
        queryFn: async () => {
            const response = await fetcher<Array<UnsplashPhotoType>>(API_PATH);

            return response;
        },
        refetchOnWindowFocus: false,
    });

    return query;
};

export default useUnsplashPhotos;
