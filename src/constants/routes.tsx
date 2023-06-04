import {
  BookmarksIcon,
  CameraIcon,
  CodePenIcon,
  CPUIcon,
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
  BOOKMARKS: {
    title: 'Bookmarks',
    pathname: '/bookmarks',
    icon: <BookmarksIcon />,
  },
  SNIPPETS: {
    title: 'Snippets',
    pathname: '/snippets',
    icon: <CodePenIcon />,
  },
  USES: {
    title: 'Uses',
    pathname: '/uses',
    icon: <CPUIcon />,
  },
};

export default ROUTES;
