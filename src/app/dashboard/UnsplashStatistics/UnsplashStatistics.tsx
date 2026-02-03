'use client';

import Link from 'next/link';
import { Eye, ArrowDownToLine } from 'lucide-react';
import { Icons } from '@/components/icons';
import { useUnsplashStatistics } from '@/hooks/queries/use-unsplash-queries';
import BarChart from './BarChart';
import LineChart from './LineChart';

const UnsplashStatistics = () => {
    const { data, isLoading } = useUnsplashStatistics();

    const views = data?.views?.historical?.values;
    const total = data?.views?.total || 0;
    const increaseLastMonth = data?.views?.historical?.change || 0;
    const increaseLastMonthPercentage = (increaseLastMonth / total) * 100;

    const downloads = data?.downloads?.historical?.values;
    const totalDownloads = data?.downloads?.total || 0;
    const increaseLastMonthDownloads = data?.downloads?.historical?.change || 0;
    const increaseLastMonthDownloadsPercentage =
        (increaseLastMonthDownloads / totalDownloads) * 100;

    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="flex items-center gap-2 text-2xl">
                <Icons.unsplash className="h-6 w-6 fill-black dark:fill-zinc-50" />
                <span>Unsplash Statistics</span>
            </h2>
            <p className="dark:text-zinc-400">
                My statistics in{' '}
                <Link
                    href="https://unsplash.com/@destroymayor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                >
                    Unsplash
                </Link>
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <BarChart
                    loading={isLoading}
                    title="Total views"
                    icon={<Eye className="h-4 w-4" />}
                    data={views}
                    total={total}
                    change={increaseLastMonthPercentage}
                />
                <LineChart
                    loading={isLoading}
                    title="Total downloads"
                    icon={<ArrowDownToLine className="h-4 w-4" />}
                    data={downloads}
                    total={totalDownloads}
                    change={increaseLastMonthDownloadsPercentage}
                />
            </div>
        </div>
    );
};

export default UnsplashStatistics;
