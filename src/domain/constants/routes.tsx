import {
    House,
    Camera,
    ChartNoAxesCombined,
    Package,
    MessageSquare,
    CodeIcon,
    FileUser,
} from 'lucide-react';

const ROUTES = {
    HOME: {
        title: 'Home',
        description: null,
        pathname: '/',
        icon: <House className="h-full w-full text-zinc-600 dark:text-zinc-300" />,
    },
    DASHBOARD: {
        title: 'Dashboard',
        description:
            'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.',
        pathname: '/dashboard',
        icon: (
            <ChartNoAxesCombined className="h-full w-full text-zinc-600 dark:text-zinc-300" />
        ),
    },
    CV: {
        title: 'CV',
        description: 'My CV.',
        pathname: '/cv',
        icon: <FileUser className="h-full w-full text-zinc-600 dark:text-zinc-300" />,
    },
    PROJECTS: {
        title: 'Projects',
        description: 'Internet thingies built with React, Next.js and TypeScript.',
        pathname: '/projects',
        icon: <Package className="h-full w-full text-zinc-600 dark:text-zinc-300" />,
    },
    PHOTOS: {
        title: 'Photos',
        description: 'A collection of photos I have taken.',
        pathname: '/photos',
        icon: <Camera className="h-full w-full text-zinc-600 dark:text-zinc-300" />,
    },
    SNIPPETS: {
        title: 'Snippets',
        description: 'Collection of useful code snippets.',
        pathname: '/snippets',
        icon: <CodeIcon className="h-full w-full text-zinc-600 dark:text-zinc-300" />,
    },
    GUESTBOOK: {
        title: 'Guestbook',
        description: 'Login your GitHub account to leave a message.',
        pathname: '/guestbook',
        icon: (
            <MessageSquare className="h-full w-full text-zinc-600 dark:text-zinc-300" />
        ),
    },
    TWEETS: {
        title: 'Tweets',
        description: 'My favorite tweets.',
        pathname: '/tweets',
        icon: (
            <MessageSquare className="h-full w-full text-zinc-600 dark:text-zinc-300" />
        ),
    },
};

export default ROUTES;
