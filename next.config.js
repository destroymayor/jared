/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  experimental: {
    reactCompiler: true,
  },
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
}
