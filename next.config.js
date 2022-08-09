/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'avatars.githubusercontent.com',
      'wakatime.com',
    ],
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    images: {
      allowFutureImage: true,
    },
  },
};
