import {
  MailIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
} from '@/components/FeatherIcons';

export const mail = {
  link: 'mailto:kuil5230@gmail.com',
  title: 'kuil5230@gmail.com',
  label: 'Gmail',
  icon: <MailIcon className="h-6 w-6" />,
};

export const github = {
  link: 'https://github.com/destroymayor',
  title: '/destroymayor',
  label: 'Github',
  icon: <GithubIcon className="h-6 w-6" />,
};

export const linkedIn = {
  link: 'https://www.linkedin.com/in/jared-chen/',
  title: '/in/jared-chen',
  label: 'Linkedin',
  icon: <LinkedinIcon className="h-6 w-6" />,
};

export const twitter = {
  link: 'https://twitter.com/destroymayor',
  title: '@destroymayor',
  label: 'Twitter',
  icon: <TwitterIcon className="h-6 w-6" />,
};

export const instagram = {
  link: 'https://www.instagram.com/jared.nov',
  title: '@jared.nov',
  label: 'Instagram',
  icon: <InstagramIcon className="h-6 w-6" />,
};

const data = [mail, github, linkedIn, twitter, instagram];

export default data;
