import { ReactNode } from 'react';

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

interface RoutesProps {
  title: string;
  pathname: string;
  icon: ReactNode;
}

export const home: RoutesProps = {
  title: 'Home',
  pathname: '/',
  icon: <HomeIcon />,
};

export const blog: RoutesProps = {
  title: 'Blog',
  pathname: '/blog',
  icon: <Edit3Icon />,
};

export const dashboard: RoutesProps = {
  title: 'Dashboard',
  pathname: '/dashboard',
  icon: <PieChartIcon />,
};

export const guestbook: RoutesProps = {
  title: 'Guestbook',
  pathname: '/guestbook',
  icon: <MessageSquareIcon />,
};

export const photos: RoutesProps = {
  title: 'Photos',
  pathname: '/photos',
  icon: <CameraIcon />,
};

export const projects: RoutesProps = {
  title: 'Projects',
  pathname: '/projects',
  icon: <PackageIcon />,
};

export const bookmarks: RoutesProps = {
  title: 'Bookmarks',
  pathname: '/bookmarks',
  icon: <BookmarksIcon />,
};

export const snippets: RoutesProps = {
  title: 'Snippets',
  pathname: '/snippets',
  icon: <CodePenIcon />,
};

export const uses: RoutesProps = {
  title: 'Uses',
  pathname: '/uses',
  icon: <CPUIcon />,
};

const data: RoutesProps[] = [
  dashboard,
  projects,
  photos,
  snippets,
  blog,
  guestbook,
  uses,
  bookmarks,
];

export default data;
