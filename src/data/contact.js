import { MailIcon } from '@heroicons/react/solid';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/Icons';

export const mail = {
  link: 'mailto:kuil5230@gmail.com',
  title: 'kuil5230@gmail.com',
  label: 'Gmail',
  icon: (
    <MailIcon className="h-7 w-7 text-[#d93025] transition duration-200 ease-in-out hover:text-opacity-70" />
  ),
};

export const github = {
  link: 'https://github.com/destroymayor',
  title: '/destroymayor',
  label: 'Github',
  icon: (
    <GithubIcon className="h-7 w-7 text-zinc-700 transition duration-200 ease-in-out hover:text-opacity-70 dark:text-[#f0f6fc]" />
  ),
};

export const linkedIn = {
  link: 'https://www.linkedin.com/in/jared-chen/',
  title: '/in/jared-chen',
  label: 'Linkedin',
  icon: (
    <LinkedinIcon className="h-7 w-7 text-[#0A66C2] transition duration-200 ease-in-out hover:text-opacity-70" />
  ),
};

export const twitter = {
  link: 'https://twitter.com/destroymayor',
  title: '@destroymayor',
  label: 'Twitter',
  icon: (
    <TwitterIcon className="h-7 w-7 text-[#1d9bf0] transition duration-200 ease-in-out hover:text-opacity-70" />
  ),
};

const data = [mail, github, linkedIn, twitter];

export default data;
