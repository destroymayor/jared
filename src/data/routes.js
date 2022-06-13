import {
  HomeIcon,
  PieChartIcon,
  CodePenIcon,
  BookmarksIcon,
  ToolIcon,
  PackageIcon,
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

export const uses = {
  title: 'Uses',
  pathname: '/uses',
  icon: <ToolIcon />,
};

const data = [dashboard, projects, snippets, uses, bookmarks];

export default data;
