'use client';

import AnimateCounter from '@/components/AnimateCounter';

import useUnsplashStatistics from './useUnsplashStatistics';

const Statistics = () => {
    const { data } = useUnsplashStatistics();

    const statistics = [
        { title: 'Total views', value: data?.views?.total },
        {
            title: 'Total views for the past 30 days',
            value: data?.views?.historical?.change,
        },
        { title: 'Total downloads', value: data?.downloads?.total },
        {
            title: 'Total downloads for the past 30 days',
            value: data?.downloads?.historical?.change,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-2 py-2 sm:grid-cols-2">
            {statistics.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-col rounded-xl bg-zinc-100 px-4 py-2 shadow-md dark:bg-zinc-900"
                >
                    <div className="text-sm dark:text-zinc-400">{item.title}</div>
                    <AnimateCounter className="text-2xl font-bold" total={item.value} />
                </div>
            ))}
        </div>
    );
};

export default Statistics;
