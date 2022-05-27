import {
  HomeIcon,
  PieChartIcon,
  CodePenIcon,
  Edit3Icon,
  BookmarksIcon,
  ToolIcon,
  PackageIcon,
  PenToolIcon,
} from '@/components/FeatherIcons';

export const home = {
  title: 'Home',
  pathname: '/',
  icon: <HomeIcon />,
};

export const dashboard = {
  title: 'Dashboard',
  pathname: '/dashboard',
  icon: <PieChartIcon />,
};

export const projects = {
  title: 'Projects',
  pathname: '/projects',
  icon: <PackageIcon />,
};

export const bookmarks = {
  title: 'Bookmarks',
  pathname: '/bookmarks',
  icon: <BookmarksIcon />,
};

export const snippets = {
  title: 'Snippets',
  pathname: '/snippets',
  icon: <CodePenIcon />,
};

export const blog = {
  title: 'Blog',
  pathname: '/blog',
  icon: <Edit3Icon />,
};

export const tools = {
  title: 'Tools',
  pathname: '/tools',
  icon: <ToolIcon />,
};

export const quotes = {
  title: 'Quotes',
  pathname: '/quotes',
  icon: <PenToolIcon />,
};

const data = [dashboard, projects, bookmarks, snippets, blog, tools, quotes];

export default data;
