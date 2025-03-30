import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import projects from '@/constants/projects';

import BlurFade from '@/components/ui/blur-fade';
import { Badge } from '@/components/ui/badge';

import { ArrowRight } from 'lucide-react';

export default function Page() {
    return (
        <ul className="flex flex-col gap-8 pt-4">
            {projects.map((project, projectIndex) => {
                const { title, description, image, link, tags } = project;

                return (
                    <li key={title}>
                        <BlurFade
                            delay={0.25 + projectIndex * 0.05}
                            inView
                            className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2')}
                        >
                            <Image
                                priority
                                className="rounded-md object-contain"
                                alt={title}
                                src={image}
                                width={714}
                                height={429}
                            />
                            <div className={cn('pl-4 sm:pt-4 sm:pl-0')}>
                                <Link
                                    href={link.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn('flex flex-col gap-2', 'group')}
                                >
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-xl font-semibold">{title}</h2>
                                        <ArrowRight
                                            className={cn(
                                                'h-5 w-5',
                                                'text-zinc-500 dark:text-zinc-50',
                                                'duration-150 ease-out group-hover:translate-x-1 group-hover:text-zinc-50'
                                            )}
                                        />
                                    </div>
                                    <p className="max-w-[60ch] text-sm dark:text-zinc-400">
                                        {description}
                                    </p>
                                </Link>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {tags.map((tag) => (
                                        <Badge variant="secondary" key={tag}>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    </li>
                );
            })}
        </ul>
    );
}
