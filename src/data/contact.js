import { MailIcon } from '@heroicons/react/solid';
import { GithubIcon, LinkedinIcon, TwitterIcon, WakaTimeIcon } from '@/components/Common/Icons';

export const mail = {
  link: 'mailto:kuil5230@gmail.com',
  title: 'kuil5230@gmail.com',
  label: 'Gmail',
  icon: <MailIcon className="h-6 w-6 " />,
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

export const wakaTime = {
  link: 'https://wakatime.com/@Jared',
  title: '@Jared',
  label: 'WakaTime',
  icon: <WakaTimeIcon className="h-6 w-6" />,
};

const data = [mail, github, twitter, linkedIn, wakaTime];

export default data;
