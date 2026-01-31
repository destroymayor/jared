'use client';

import Contributions from './Contributions';
import UnsplashStatistics from './UnsplashStatistics';
import TopTracks from './TopTracks';

import { bind } from '@/utils/bind';
import { useDashboardViewModel } from './dashboard.view-model';

type Props = ReturnType<typeof useDashboardViewModel>;

function DashboardViewController(_props: Props) {
    return (
        <div className="flex flex-col gap-y-10">
            <Contributions />

            <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
                <UnsplashStatistics />
            </div>

            <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
                <TopTracks />
            </div>
        </div>
    );
}

export const DashboardBound = bind(DashboardViewController, useDashboardViewModel);
