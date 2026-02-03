'use client';

import Image from 'next/image';
import Link from 'next/link';

import PlayingBars from '@/components/NowPlaying/PlayingBars';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

import Skeleton from './Skeleton';

import { useNowPlaying } from '@/hooks/queries/use-spotify-queries';

export default function NowPlaying() {
    const { data, isLoading } = useNowPlaying();

    if (isLoading) {
        return <Skeleton />;
    }

    return (
        <Link href={data?.songUrl ?? '#'} target="_blank" rel="noopener noreferrer">
            <div
                className={cn('flex items-center gap-3', {
                    'h-[60px]': !data?.isPlaying,
                })}
            >
                {data?.albumImageUrl ? (
                    <Image
                        className="h-[60px] w-[60px] rounded-md"
                        alt={`${data?.album}`}
                        src={data?.albumImageUrl}
                        width={60}
                        height={60}
                    />
                ) : (
                    <Icons.spotify className="h-7 w-7 fill-black dark:fill-zinc-50" />
                )}

                <div className="flex flex-col items-start justify-center">
                    {data?.isPlaying && <PlayingBars />}
                    <p className="w-64 truncate text-sm sm:w-80">
                        {data?.title ?? 'Not Playing'}
                    </p>
                    <p className="w-64 truncate text-sm text-zinc-500 sm:w-80 dark:text-zinc-400">
                        {data?.artist ?? 'Spotify'}
                    </p>
                </div>
            </div>
        </Link>
    );
}
