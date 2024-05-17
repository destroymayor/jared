import {
  CameraIcon,
  CodePenIcon,
  Edit3Icon,
  HomeIcon,
  MessageSquareIcon,
  PackageIcon,
  PieChartIcon,
} from '@/components/Icons';

const ROUTES = {
  HOME: {
    title: 'Home',
    pathname: '/',
    icon: <HomeIcon />,
  },
  BLOG: {
    title: 'Blog',
    pathname: '/blog',
    icon: <Edit3Icon />,
  },
  DASHBOARD: {
    title: 'Dashboard',
    pathname: '/dashboard',
    icon: <PieChartIcon />,
  },
  GUESTBOOK: {
    title: 'Guestbook',
    pathname: '/guestbook',
    icon: <MessageSquareIcon />,
  },
  PHOTOS: {
    title: 'Photos',
    pathname: '/photos',
    icon: <CameraIcon />,
  },
  PROJECTS: {
    title: 'Projects',
    pathname: '/projects',
    icon: <PackageIcon />,
  },
  SNIPPETS: {
    title: 'Snippets',
    pathname: '/snippets',
    icon: <CodePenIcon />,
  },
};

export default ROUTES;
