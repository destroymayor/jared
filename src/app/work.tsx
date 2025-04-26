import pinkoi from '@/public/images/work/pinkoi.webp';
import tagtoo from '@/public/images/work/tagtoo.webp';

import { BriefcaseBusiness} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const workHistory = [
    {
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage src={pinkoi.src} alt="Pinkoi" />
                <AvatarFallback>P</AvatarFallback>
            </Avatar>
        ),
        company: 'Pinkoi',
        position: 'Frontend Engineer',
        duration: '08/2022 - Present',
    },
    {
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage src={tagtoo.src} alt="Tagtoo" />
                <AvatarFallback>T</AvatarFallback>
            </Avatar>
        ),
        company: 'Tagtoo',
        position: 'Frontend Engineer',
        duration: '09/2019 - 08/2022',
    },
];

const Work = () => {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-4 sm:p-6 dark:border-zinc-700">
            <h2 className="flex items-center gap-2">
                <BriefcaseBusiness
                    width={20}
                    height={20}
                    className="text-zinc-900 dark:text-zinc-400"
                />
                <span>Work</span>
            </h2>
            <ol className="flex flex-col gap-4">
                {workHistory.map((work) => (
                    <li key={work.company} className="flex items-center gap-4">
                        <div className="rounded-full border border-zinc-200 p-2 dark:border-zinc-700 dark:bg-zinc-900">
                            {work.logo}
                        </div>
                        <div className="flex-1">
                            <h3>{work.company}</h3>
                            <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row">
                                <p className="text-sm text-zinc-500 dark:text-zinc-300">
                                    {work.position}
                                </p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {work.duration}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Work;
