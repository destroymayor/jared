import {
  MailIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubOutlineIcon,
  TwitterIcon,
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

export const instagram = {
  link: 'https://www.instagram.com/jared.nov',
  title: '@jared.nov',
  label: 'Instagram',
  icon: <InstagramIcon />,
};

const data = [mail, github, linkedIn, twitter, instagram];

export default data;
