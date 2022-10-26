/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'avatars.githubusercontent.com',
      'wakatime.com',
      'images.unsplash.com', // unsplash
    ],
  },
};
