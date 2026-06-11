export { defineEndpoint } from './core/define-endpoint';
export { integrationRoute } from './core/route';
export type { Endpoint, EndpointConfig, IntegrationDeps } from './core/types';

export { spotifyNowPlaying, spotifyTopTracks } from './spotify';
export { githubContribution } from './github';
export { unsplashPhotos, unsplashStatistics } from './unsplash';
