/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
       // Spotify Album Art
       {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      // unsplash
       {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};
