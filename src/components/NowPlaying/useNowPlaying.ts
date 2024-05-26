import fetcher from '@/lib/fetcher'
import { useSuspenseQuery } from '@tanstack/react-query'
import { NowPlayingType } from '@/lib/spotify'

const API_PATH = 'http://localhost:3000/api/spotify/now-playing';

const useNowPlaying = () => {
  const query = useSuspenseQuery({
      queryKey: [API_PATH],
      queryFn: async () => {
          const response = await fetcher<NowPlayingType>(API_PATH);

          return response;
      },
      refetchOnWindowFocus: false,
  });

  return query
}

export default useNowPlaying
