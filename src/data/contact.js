import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { GithubIcon, LinkedinIcon } from '@/components/Common/Icons';

const data = [
  {
    link: 'https://github.com/destroymayor',
    title: 'github.com/destroymayor',
    label: 'Github',
    icon: <GithubIcon className="h-6 w-6" />,
  },
  {
    link: 'https://www.linkedin.com/in/jared-chen/',
    title: 'linkedin.com/in/jared-chen',
    label: 'Linkedin',
    icon: <LinkedinIcon className="h-6 w-6" />,
  },
  {
    link: 'mailto:kuil5230@gmail.com',
    title: 'kuil5230@gmail.com',
    label: 'Gmail',
    icon: <PaperAirplaneIcon className="h-6 w-6 translate-x-[3px] translate-y-[-2px] rotate-45" />,
  },
];

export default data;
