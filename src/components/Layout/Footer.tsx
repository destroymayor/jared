import Link from 'next/link';

import { cn } from '@/lib/utils';
import contactData from '@/constants/contact';
import { Separator } from '@/components/ui/separator';
import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
    return (
        <footer className={cn('w-full max-w-[60rem]', 'mx-auto py-10 px-4 sm:px-12')}>
            <Separator />

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <NowPlaying />

                <div className="flex flex-col gap-2">
                    <ul className="flex items-center sm:justify-end gap-4">
                        {contactData.map((contact) => (
                            <li key={contact.title}>
                                <Link
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {contact.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="https://github.com/destroymayor"
                        className={cn(
                            'flex items-center gap-2 text-sm',
                            'transition duration-300 ease-in-out',
                            'dark:text-zinc-400 dark:hover:text-zinc-100'
                        )}
                    >
                        <span>
                            Jared Chen
                            <span className="text-zinc-400 dark:text-zinc-500">,</span>
                        </span>
                        <span className="text-xl">©</span>
                        <span>{new Date().getFullYear()}</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
