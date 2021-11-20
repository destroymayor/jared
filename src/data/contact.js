import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { GithubIcon, LinkedinIcon } from '@/components/Common/Icons';

const data = [
  {
    link: 'https://github.com/destroymayor',
    title: 'github.com/destroymayor',
    label: 'Github',
    icon: <GithubIcon className="w-6 h-6" />,
  },
  {
    link: 'https://www.linkedin.com/in/jared-chen/',
    title: 'linkedin.com/in/jared-chen',
    label: 'Linkedin',
    icon: <LinkedinIcon className="w-6 h-6" />,
  },
  {
    link: 'mailto:kuil5230@gmail.com',
    title: 'kuil5230@gmail.com',
    label: 'Send email',
    icon: <PaperAirplaneIcon className="w-6 h-6 rotate-45 translate-x-[3px] translate-y-[-2px]" />,
  },
];

export default data;
