import { integrationRoute, spotifyTopTracks } from '@/domain';

export const dynamic = 'force-dynamic';

export const GET = integrationRoute(spotifyTopTracks);
