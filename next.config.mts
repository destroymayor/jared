import type { NextConfig } from 'next'

import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';

/** @type {import('next').NextConfig} */
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
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
};

const withMDX = createMDX({
    options: {
        recmaPlugins: [remarkFrontmatter],
    },
});

export default withMDX(nextConfig);
