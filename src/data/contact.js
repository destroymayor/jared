import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/Common/Icons';

export const mail = {
  link: 'mailto:kuil5230@gmail.com',
  title: 'kuil5230@gmail.com',
  label: 'Gmail',
  icon: <PaperAirplaneIcon className="h-6 w-6 translate-x-[3px] translate-y-[-2px] rotate-45" />,
};

export const github = {
  link: 'https://github.com/destroymayor',
  title: 'github.com/destroymayor',
  label: 'Github',
  icon: <GithubIcon className="h-6 w-6" />,
};

export const linkedIn = {
  link: 'https://www.linkedin.com/in/jared-chen/',
  title: 'linkedin.com/in/jared-chen',
  label: 'Linkedin',
  icon: <LinkedinIcon className="h-6 w-6" />,
};

export const twitter = {
  link: 'https://twitter.com/destroymayor',
  title: 'twitter.com/destroymayor',
  label: 'Twitter',
  icon: <TwitterIcon className="h-6 w-6" />,
};

const data = [mail, github, linkedIn, twitter];

export default data;
