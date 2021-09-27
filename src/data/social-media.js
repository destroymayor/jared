import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { GithubIcon, InstagramIcon, LinkedInIcon } from '@/components/Common/Icons';

const data = [
  {
    link: 'mailto:kuil5230@gmail.com',
    label: 'Send email',
    icon: <PaperAirplaneIcon className="w-6 h-6 rotate-45" />,
  },
  {
    link: 'https://github.com/destroymayor',
    label: 'Github',
    icon: <GithubIcon className="w-6 h-6" />,
  },
  {
    link: 'https://www.instagram.com/jared.nov',
    label: 'Instagram',
    icon: <InstagramIcon className="w-7 h-7" />,
  },
  {
    link: 'https://www.linkedin.com/in/jared-chen',
    label: 'LinkedIn',
    icon: <LinkedInIcon className="w-6 h-6" />,
  },
];

export default data;
