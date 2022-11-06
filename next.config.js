/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'wakatime.com',
      'images.unsplash.com', // unsplash
    ],
  },
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
};
