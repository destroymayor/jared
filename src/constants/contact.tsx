import {
  MailIcon,
  LinkedinIcon,
  GithubOutlineIcon,
  TwitterIcon,
  UnsplashIcon,
} from '@/components/Icons';

export const mail = {
  link: 'mailto:kuil5230@gmail.com',
  title: 'kuil5230@gmail.com',
  label: 'Gmail',
  icon: <MailIcon />,
};

export const github = {
  link: 'https://github.com/destroymayor',
  title: '/destroymayor',
  label: 'Github',
  icon: <GithubOutlineIcon />,
};

export const linkedIn = {
  link: 'https://www.linkedin.com/in/jared-chen/',
  title: '/in/jared-chen',
  label: 'Linkedin',
  icon: <LinkedinIcon />,
};

export const twitter = {
  link: 'https://twitter.com/destroymayor',
  title: '@destroymayor',
  label: 'Twitter',
  icon: <TwitterIcon />,
};

export const unsplash = {
  link: 'https://unsplash.com/@destroymayor',
  title: '@destroymayor',
  label: 'Unsplash',
  icon: <UnsplashIcon />,
};

const data = [mail, github, linkedIn, twitter, unsplash];

export default data;
