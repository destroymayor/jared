import {
  PieChartIcon,
  CodePenIcon,
  BookmarksIcon,
  Edit3Icon,
  ToolIcon,
  PackageIcon,
} from '@/components/Icons';

export const blog = {
  title: 'Blog',
  pathname: '/blog',
  icon: <Edit3Icon />,
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

export const uses = {
  title: 'Uses',
  pathname: '/uses',
  icon: <ToolIcon />,
};

const data = [dashboard, projects, snippets, blog, uses, bookmarks];

export default data;
