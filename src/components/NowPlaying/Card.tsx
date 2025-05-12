'use client';
import { Icons } from '@/components/icons';
import { ShineBorder } from '@/components/magicui/shine-border';
import useNowPlaying from '@/components/NowPlaying/useNowPlaying';

import BlurredImage from '@/components/blurred-image';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

import PlayingBars from '@/components/NowPlaying/PlayingBars';
import { formatDuration } from './utils';
export default function NowPlayingCard() {
    const { data, isLoading } = useNowPlaying({
        enabled: false,
        queryKey: ['now-playing'],
    });
    const isPlaying = data?.is_playing;

    if (isLoading) {
        return (
            <div className="flex flex-col rounded-2xl border border-zinc-200 p-4 sm:p-6 dark:border-zinc-700">
                <Skeleton className="h-[24px] w-full rounded-md" />
                <div className="py-10 flex justify-center">
                    <Skeleton className="h-[192px] w-[192px] rounded-md" />
                </div>
                <div className='flex flex-col gap-1'>
                    <Skeleton className="h-[20px] w-full rounded-md" />
                    <Skeleton className="h-[20px] w-full rounded-md" />
                </div>
            </div>
        );
    }

    const item = data?.item;
    const name = item?.name;
    const artists = item?.artists ?? [];
    const spotifyUrl = item?.external_urls?.spotify ?? '#';
    const albumName = item?.album?.name ?? '';
    const albumImage = item?.album?.images?.[0];

    const durationMs = item?.duration_ms ?? 0;
    const songDuration = formatDuration(durationMs);

    return (
        <div className="flex flex-col rounded-2xl border border-zinc-200 p-4 sm:p-6 dark:border-zinc-700">
            <h2 className="flex items-center gap-2">
                <Icons.spotify className="h-[20px] w-[20px]" />
                {name ? (
                    <span>
                        {isPlaying ? <span>Playing</span> : <span>Last Played</span>}
                    </span>
                ) : (
                    <span>Not Playing</span>
                )}
            </h2>
            <div className="flex w-full items-center justify-center py-6">
                <Link
                    href={spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-[192px] w-[192px] overflow-hidden rounded-lg p-1"
                >
                    <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
                    {albumImage && (
                        <BlurredImage
                            className="rounded-md"
                            alt={albumName}
                            src={albumImage?.url}
                            width={192}
                            height={192}
                            unoptimized
                        />
                    )}
                </Link>
            </div>
            <div className="flex gap-2">
                <div className="flex w-4/5 flex-col">
                    <Link
                        href={spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate font-bold hover:underline"
                    >
                        {name}
                    </Link>
                    <ul className="flex flex-wrap items-center text-sm text-zinc-400">
                        {artists.map((artist, artistIndex) => (
                            <li key={artist.id}>
                                <Link href={spotifyUrl} className="hover:underline">
                                    {artist.name}
                                </Link>
                                {artistIndex < artists.length - 1 && (
                                    <span className="mr-2">,</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                {isPlaying && (
                    <div className="flex w-1/5 flex-1 flex-col items-center justify-center">
                        <PlayingBars />
                        <span className="text-xs text-zinc-300">{songDuration}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
