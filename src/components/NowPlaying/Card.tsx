import { Icons } from '@/components/icons';
import { ShineBorder } from '@/components/magicui/shine-border';
import useNowPlaying from '@/components/NowPlaying/useNowPlaying';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import PlayingBars from '@/components/NowPlaying/PlayingBars';

export default function NowPlayingCard() {
    const { data } = useNowPlaying();
    const isPlaying = data?.is_playing;
     const theme = useTheme();

    console.log(data);

    const artists = data?.item?.artists;

    return (
        <div className="flex flex-col rounded-2xl border border-zinc-200 p-4 sm:p-6 dark:border-zinc-700">
            <h2 className="flex items-center gap-2">
                <Icons.spotify className="h-[20px] w-[20px]" />
                <span>{isPlaying ? 'Playing' : 'Not Playing'}</span>
            </h2>
            <div className="flex w-full items-center justify-center py-10">
                <Link
                    href={data?.item?.album.external_urls.spotify || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-md"
                >
                    <ShineBorder
                        shineColor={theme.theme === 'dark' ? 'white' : 'black'}
                    />
                    <Image
                        className="h-[192px] w-[192px] rounded-md"
                        alt={`${data?.item?.album.name}`}
                        src={data?.item?.album.images[0].url || ''}
                        width={192}
                        height={192}
                        unoptimized
                    />
                </Link>
            </div>
            <div className="flex gap-2">
                <div className="flex w-4/5 flex-col">
                    <Link
                        href={data?.item?.external_urls.spotify || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate font-bold hover:underline"
                    >
                        {data?.item?.name}
                    </Link>
                    <ul className="flex flex-wrap items-center text-sm text-zinc-500">
                        {artists?.map((artist, artistIndex) => (
                            <li key={artist.id}>
                                <Link
                                    href={artist.external_urls.spotify}
                                    className="hover:underline"
                                >
                                    {artist.name}
                                </Link>
                                {artistIndex < artists.length - 1 && (
                                    <span className="mr-2">,</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-1/5 flex-1 items-center justify-center">
                    <PlayingBars />
                </div>
            </div>
        </div>
    );
}
