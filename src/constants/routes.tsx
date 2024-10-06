import { House, Camera, ChartNoAxesCombined, Package, MessageSquare, CodeIcon } from 'lucide-react';

const ROUTES = {
    HOME: {
        title: 'Home',
        description: null,
        pathname: '/',
        icon: <House size={20} />,
    },
    DASHBOARD: {
        title: 'Dashboard',
        description:
            'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.',
        pathname: '/dashboard',
        icon: <ChartNoAxesCombined size={20} />,
    },
    GUESTBOOK: {
        title: 'Guestbook',
        description: 'Login your GitHub account to leave a message.',
        pathname: '/guestbook',
        icon: <MessageSquare size={20} />,
    },
    PHOTOS: {
        title: 'Photos',
        description: 'A collection of photos I have taken.',
        pathname: '/photos',
        icon: <Camera size={20} />,
    },
    PROJECTS: {
        title: 'Projects',
        description: 'Internet thingies built with React, Next.js and TypeScript.',
        pathname: '/projects',
        icon: <Package size={20} />,
    },
    SNIPPETS: {
        title: 'Snippets',
        description: 'Collection of useful code snippets.',
        pathname: '/snippets',
        icon: <CodeIcon size={20} />,
    },
    TWEETS: {
        title: 'Tweets',
        description: 'My favorite tweets.',
        pathname: '/tweets',
        icon: <MessageSquare size={20} />,
    },
};

export default ROUTES;
