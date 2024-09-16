import { Suspense } from 'react';

import { Github } from 'lucide-react';
import Overview from './Overview';
import Calendar from './Calendar';

import { OverviewSkeleton, CalendarSkeleton } from './Skeleton';

const Contributions = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <Github size={24} />
                <span>Contributions</span>
            </h2>
            <p className="dark:text-zinc-400">{`My last year's contributions in Github.`}</p>
            <Suspense fallback={<OverviewSkeleton />}>
                <Overview />
            </Suspense>
            <Suspense fallback={<CalendarSkeleton />}>
                <Calendar />
            </Suspense>
        </div>
    );
};

export default Contributions;
