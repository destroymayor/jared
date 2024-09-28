import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';

import { ContributionsCollectionType } from '@/lib/github';

const API_PATH = '/api/github/contribution';

const useContributions = () => {
    const query = useQuery({
        queryKey: [API_PATH],
        queryFn: async () => {
            const response = await fetcher<ContributionsCollectionType>(API_PATH);

            return response;
        },
        refetchOnWindowFocus: false,
    });

    return query;
};

export default useContributions;
