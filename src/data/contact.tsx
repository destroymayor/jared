import { ReactNode } from 'react';

import {
  MailIcon,
  LinkedinIcon,
  GithubOutlineIcon,
  TwitterIcon,
  UnsplashIcon,
} from '@/components/Icons';

interface IContact {
  link: string;
  title: string;
  label: string;
  icon: ReactNode;
}

export const mail: IContact = {
  link: 'mailto:kuil5230@gmail.com',
  title: 'kuil5230@gmail.com',
  label: 'Gmail',
  icon: <MailIcon />,
};

export const github: IContact = {
  link: 'https://github.com/destroymayor',
  title: '/destroymayor',
  label: 'Github',
  icon: <GithubOutlineIcon />,
};

export const linkedIn: IContact = {
  link: 'https://www.linkedin.com/in/jared-chen/',
  title: '/in/jared-chen',
  label: 'Linkedin',
  icon: <LinkedinIcon />,
};

export const twitter: IContact = {
  link: 'https://twitter.com/destroymayor',
  title: '@destroymayor',
  label: 'Twitter',
  icon: <TwitterIcon />,
};

export const unsplash: IContact = {
  link: 'https://unsplash.com/@destroymayor',
  title: '@destroymayor',
  label: 'Unsplash',
  icon: <UnsplashIcon />,
};

const data: IContact[] = [mail, github, linkedIn, twitter, unsplash];

export default data;
