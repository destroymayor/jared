import fetcher from '@/lib/fetcher';
import { useQuery } from '@/lib/react-query';
import { queryKeys } from '@/lib/react-query';
import type { ContributionsCollectionType } from '@/lib/github/types';

export function useContributions() {
    return useQuery({
        queryKey: queryKeys.github.contributions,
        queryFn: () =>
            fetcher<ContributionsCollectionType>(queryKeys.github.contributions[0]),
        refetchOnWindowFocus: false,
    });
}
