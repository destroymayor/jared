export const queryKeys = {
    spotify: {
        nowPlaying: ['/api/spotify/now-playing'] as const,
        topTracks: ['/api/spotify/top-tracks'] as const,
    },
    github: {
        contributions: ['/api/github/contribution'] as const,
    },
    unsplash: {
        photos: ['/api/unsplash/photos'] as const,
        statistics: ['/api/unsplash/statistics'] as const,
    },
} as const;
