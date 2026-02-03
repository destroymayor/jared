import { httpClient } from '@/lib/http-client';
import { useQuery } from '@/lib/react-query';
import { queryKeys } from '@/lib/react-query';
import type { ContributionsCollectionType } from '@/lib/github/types';

export function useContributions() {
    return useQuery({
        queryKey: queryKeys.github.contributions,
        queryFn: () =>
            httpClient<ContributionsCollectionType>(queryKeys.github.contributions[0]),
        refetchOnWindowFocus: false,
    });
}
