import { MailIcon, GithubOutlineIcon, TwitterIcon } from '@/components/Icons';

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

export const twitter = {
  link: 'https://twitter.com/destroymayor',
  title: '@destroymayor',
  label: 'Twitter',
  icon: <TwitterIcon />,
};

const data = [mail, github, twitter];

export default data;
