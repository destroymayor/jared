import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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
            },
            // picsum
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
};

export default nextConfig;
