import { Suspense } from 'react';
import { UnsplashIcon } from '@/components/Icons';

import Statistics from './Statistics';
import Skeleton from './Skeleton';

const UnsplashStatistics = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <UnsplashIcon className="h-6 w-6" />
                <span>Unsplash Statistics</span>
            </h2>
            <p className="dark:text-zinc-400">{`My statistics in Unsplash.`}</p>

            <Suspense fallback={<Skeleton />}>
                <Statistics />
            </Suspense>
        </div>
    );
};

export default UnsplashStatistics;
