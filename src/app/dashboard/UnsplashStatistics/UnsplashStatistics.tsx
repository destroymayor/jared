
import { Icons } from '@/components/icons';

import Statistics from './Statistics';

const UnsplashStatistics = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <Icons.unsplash className="h-6 w-6 fill-black dark:fill-zinc-50" />
                <span>Unsplash Statistics</span>
            </h2>
            <p className="dark:text-zinc-400">{`My statistics in Unsplash.`}</p>

            <Statistics />
        </div>
    );
};

export default UnsplashStatistics;
