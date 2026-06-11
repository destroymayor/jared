import { integrationRoute, unsplashPhotos } from '@/domain';

export const dynamic = 'force-dynamic';

export const GET = integrationRoute(unsplashPhotos);
