import { integrationRoute, spotifyNowPlaying } from '@/domain';

export const dynamic = 'force-dynamic';

export const GET = integrationRoute(spotifyNowPlaying);
