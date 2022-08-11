import { ReactNode } from 'react';

import {
  BookmarksIcon,
  CodePenIcon,
  CPUIcon,
  Edit3Icon,
  HomeIcon,
  MessageSquareIcon,
  PackageIcon,
  PieChartIcon,
} from '@/components/Icons';

interface IRoutes {
  title: string;
  pathname: string;
  icon: ReactNode;
}

export const home: IRoutes = {
  title: 'Home',
  pathname: '/',
  icon: <HomeIcon />,
};

export const blog: IRoutes = {
  title: 'Blog',
  pathname: '/blog',
  icon: <Edit3Icon />,
};

export const dashboard: IRoutes = {
  title: 'Dashboard',
  pathname: '/dashboard',
  icon: <PieChartIcon />,
};

export const guestbook: IRoutes = {
  title: 'Guestbook',
  pathname: '/guestbook',
  icon: <MessageSquareIcon />,
};

export const projects: IRoutes = {
  title: 'Projects',
  pathname: '/projects',
  icon: <PackageIcon />,
};

export const bookmarks: IRoutes = {
  title: 'Bookmarks',
  pathname: '/bookmarks',
  icon: <BookmarksIcon />,
};

export const snippets: IRoutes = {
  title: 'Snippets',
  pathname: '/snippets',
  icon: <CodePenIcon />,
};

export const uses: IRoutes = {
  title: 'Uses',
  pathname: '/uses',
  icon: <CPUIcon />,
};

const data: IRoutes[] = [dashboard, projects, snippets, blog, guestbook, uses, bookmarks];

export default data;
