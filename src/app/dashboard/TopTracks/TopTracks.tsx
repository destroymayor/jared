import { SpotifySolidIcon } from '@/components/Icons';

import Tracks from './Tracks';

const TopTracks = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <SpotifySolidIcon className="h-6 w-6" />
                <span>Top Tracks</span>
            </h2>
            <p className="pb-2 dark:text-zinc-400">{`Here's my top tracks on Spotify updated daily.`}</p>

            <Tracks />
        </div>
    );
};

export default TopTracks;
