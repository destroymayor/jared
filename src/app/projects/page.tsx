import Image from 'next/image';
import Link from 'next/link';

import projects from '@/constants/projects';

import { FadeUpSection } from '@/components/Animate';
import { ArrowRight } from 'lucide-react';

export default function Page() {
    return (
        <ul className="flex flex-col gap-14 pt-8">
            {projects.map((project) => {
                const { built_with, title, description, image, links } = project;

                return (
                    <li key={title} className="flex flex-col gap-8">
                        <div className="flex gap-6">
                            <FadeUpSection className="min-h-[24px] min-w-[24px]">
                                {built_with}
                            </FadeUpSection>

                            <div className="flex flex-col gap-5">
                                <FadeUpSection>
                                    <h2 className="text-xl font-semibold">{title}</h2>
                                </FadeUpSection>

                                <FadeUpSection>
                                    <p className="max-w-[60ch] text-sm dark:text-zinc-400">
                                        {description}
                                    </p>
                                </FadeUpSection>

                                <FadeUpSection className="flex flex-col items-start gap-4 text-sm dark:text-zinc-400">
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
                                </FadeUpSection>
                            </div>
                        </div>

                        <FadeUpSection className="-m-4 grid place-items-center">
                            <Image
                                priority
                                className="rounded-md object-contain"
                                alt={title}
                                src={image}
                                width={714}
                                height={429}
                            />
                        </FadeUpSection>
                    </li>
                );
            })}
        </ul>
    );
}
