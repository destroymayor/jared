import fetcher from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'

const API_PATH = '/api/snippets';

type SnippetType = {
  title: string
  description: string
  category: string
  date: string
  slug: string
}

const useSnippets = ({ enabled }: { enabled: boolean }) => {
  const query = useQuery({
    queryKey: [API_PATH],
    queryFn: async () => {
      const response = await fetcher<Array<SnippetType>>(API_PATH)

      return response
    },
    refetchOnWindowFocus: false,
    enabled,
  })

  return query
}

export default useSnippets
