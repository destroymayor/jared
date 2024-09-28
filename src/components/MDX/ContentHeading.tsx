'use client';

import { cn } from '@/lib/utils';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';

export default function ContentHeading(props: {
    children?: React.ReactNode | string;
    className?: string;
}) {
    const { children, className } = props;
    const pathname = usePathname();

    const getHeadingId =
        typeof children === 'string'
            ? children?.toLowerCase().replace(new RegExp(' ', 'g'), '-')
            : '';

    return (
        <Link href={`${pathname}#${getHeadingId}`} scroll={false}>
            <h2
                aria-hidden
                id={getHeadingId}
                className={cn(
                    'group flex cursor-pointer items-center justify-start gap-x-2 px-2 py-3',
                    className
                )}
            >
                <span className="text-xl font-extrabold">{children}</span>

                <LinkIcon
                    size={16}
                    className="invisible text-zinc-600 transition duration-150 ease-in-out group-hover:visible dark:text-zinc-500"
                />
            </h2>
        </Link>
    );
}
