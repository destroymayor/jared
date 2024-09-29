import Image from 'next/image';
import Link from 'next/link';

import projects from '@/constants/projects';

import BlurFade from '@/components/ui/blur-fade';
import { ArrowRight } from 'lucide-react';

export default function Page() {
    return (
        <ul className="flex flex-col gap-14 pt-8">
            {projects.map((project, projectIndex) => {
                const { built_with, title, description, image, links } = project;

                return (
                    <li key={title} className="flex flex-col gap-8">
                        <div className="flex gap-6">
                            <BlurFade
                                delay={0.25 + projectIndex * 0.05}
                                inView
                                className="min-h-[24px] min-w-[24px]"
                            >
                                {built_with}
                            </BlurFade>

                            <div className="flex flex-col gap-5">
                                <BlurFade delay={0.25 + projectIndex * 0.05} inView>
                                    <h2 className="text-xl font-semibold">{title}</h2>
                                </BlurFade>

                                <BlurFade delay={0.25 + projectIndex * 0.05} inView>
                                    <p className="max-w-[60ch] text-sm dark:text-zinc-400">
                                        {description}
                                    </p>
                                </BlurFade>

                                <BlurFade
                                    delay={0.25 + projectIndex * 0.05}
                                    inView
                                    className="flex flex-col items-start gap-4 text-sm dark:text-zinc-400"
                                >
                                    <Link
                                        href={links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-md font-bold transition duration-300 ease-in-out hover:translate-x-2"
                                    >
                                        <ArrowRight size={20} />
                                        <span>{title} Website</span>
                                    </Link>

                                    <Link
                                        href={links.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-md font-bold transition duration-300 ease-in-out hover:translate-x-2"
                                    >
                                        <ArrowRight size={20} />
                                        <span>{title} Repo</span>
                                    </Link>
                                </BlurFade>
                            </div>
                        </div>

                        <BlurFade
                            delay={0.25 + projectIndex * 0.05}
                            inView
                            className="-m-4 grid place-items-center"
                        >
                            <Image
                                priority
                                className="rounded-md object-contain"
                                alt={title}
                                src={image}
                                width={714}
                                height={429}
                            />
                        </BlurFade>
                    </li>
                );
            })}
        </ul>
    );
}
