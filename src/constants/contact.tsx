import { MailIcon, GithubOutlineIcon, TwitterIcon } from '@/components/Icons';

const CONTACT = {
  MAIL: {
    link: 'mailto:kuil5230@gmail.com',
    title: 'kuil5230@gmail.com',
    label: 'Gmail',
    icon: <MailIcon />,
  },
  GITHUB: {
    link: 'https://github.com/destroymayor',
    title: '/destroymayor',
    label: 'Github',
    icon: <GithubOutlineIcon />,
  },
  TWITTER: {
    link: 'https://twitter.com/destroymayor',
    title: '@destroymayor',
    label: 'Twitter',
    icon: <TwitterIcon />,
  },
};

const data = Object.values(CONTACT);

export default data;
