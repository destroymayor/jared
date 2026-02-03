import { useContributions } from '@/hooks/queries/use-github-queries';
import { useTopTracks } from '@/hooks/queries/use-spotify-queries';
import { useUnsplashStatistics } from '@/hooks/queries/use-unsplash-queries';

export function useDashboardViewModel() {
    const contributions = useContributions();
    const topTracks = useTopTracks();
    const unsplashStats = useUnsplashStatistics();

    return { contributions, topTracks, unsplashStats };
}
