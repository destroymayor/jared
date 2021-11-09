import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { GithubIcon } from '@/components/Common/Icons';

const data = [
  {
    link: 'mailto:kuil5230@gmail.com',
    title: 'kuil5230@gmail.com',
    label: 'Send email',
    icon: <PaperAirplaneIcon className="w-6 h-6 rotate-45 translate-x-[3px] translate-y-[-2px]" />,
  },
  {
    link: 'https://github.com/destroymayor',
    title: 'github.com/destroymayor',
    label: 'Github',
    icon: <GithubIcon className="w-6 h-6" />,
  },
];

export default data;
