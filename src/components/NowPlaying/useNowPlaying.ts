import fetcher from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import { NowPlayingType } from '@/lib/spotify'

const API_PATH = '/api/spotify/now-playing'

const useNowPlaying = () => {
  const query = useQuery({
    queryKey: [API_PATH],
    queryFn: async () => {
      const response = await fetcher<NowPlayingType>(API_PATH)

      return response
    },
    refetchOnWindowFocus: false,
  })

  return query
}

export default useNowPlaying
