import pinkoi from '@/public/images/work/pinkoi.webp';
import tagtoo from '@/public/images/work/tagtoo.webp';
import wit from '@/public/images/work/wit.webp';

import Link from 'next/link';

import { ArrowDownToLine, BriefcaseBusiness } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const experiences = [
    {
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage src={wit.src} alt="WIT" />
                <AvatarFallback>W</AvatarFallback>
            </Avatar>
        ),
        company: 'Wit Software',
        position: 'Senior Frontend Engineer',
        duration: 'May 2025 - Present',
    },
    {
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage src={pinkoi.src} alt="Pinkoi" />
                <AvatarFallback>P</AvatarFallback>
            </Avatar>
        ),
        company: 'Pinkoi',
        position: 'Frontend Engineer',
        duration: 'Aug 2022 - May 2025',
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
        duration: 'Sep 2019 - Aug 2022',
    },
];

export default function Work() {
    return (
        <div className="flex flex-col gap-6 rounded-2xl border border-zinc-200 p-4 sm:p-6 dark:border-zinc-700">
            <h2 className="flex items-center gap-2">
                <BriefcaseBusiness
                    width={20}
                    height={20}
                    className="text-zinc-900 dark:text-zinc-400"
                />
                <span>Work</span>
            </h2>
            <ol className="flex flex-col gap-4">
                {experiences.map((work) => (
                    <li key={work.company} className="flex items-center gap-4">
                        <div className="rounded-full border border-zinc-200 p-2 dark:border-zinc-700 dark:bg-zinc-900">
                            {work.logo}
                        </div>
                        <div className="flex-1">
                            <h3>{work.company}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
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

            <Button variant="outline" className="w-full cursor-pointer" asChild>
                <Link
                    href="https://drive.google.com/file/d/1Mo8GLUr9Doz836eKDv2Eaut56G5NYzAU/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Download CV</span>
                    <ArrowDownToLine className="h-4 w-4" />
                </Link>
            </Button>
        </div>
    );
}
