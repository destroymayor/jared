import { Icons } from '@/components/icons';

import Tracks from './Tracks';

export default function TopTracks() {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <Icons.spotify className="h-6 w-6 fill-black dark:fill-zinc-50" />
                <span>Top Tracks</span>
            </h2>
            <p className="pb-2 dark:text-zinc-400">{`Here's my top tracks on Spotify updated daily.`}</p>

            <Tracks />
        </div>
    );
}
