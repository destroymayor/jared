import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';

import { ContributionsCollectionType } from '@/lib/github';

const API_PATH = '/api/github/contribution';

export default function useContributions() {
    return useQuery({
        queryKey: [API_PATH],
        queryFn: () => fetcher<ContributionsCollectionType>(API_PATH),
        refetchOnWindowFocus: false,
    });
}
