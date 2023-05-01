'use client';

import { Fragment, Suspense } from 'react';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import AnimateCounter from '@/components/AnimateCounter';
import { UnsplashIcon } from '@/components/Icons';

import Skeleton from './Skeleton';
import { UnsplashStatisticsType } from './types';

export default function UnsplashStatistics() {
  const { data } = useSWR<UnsplashStatisticsType>('/api/unsplash/statistics', fetcher, {
    revalidateOnFocus: false,
    suspense: true,
    fallbackData: {
      downloads: {
        total: 0,
        historical: {
          change: 0,
        },
      },
      views: {
        total: 0,
        historical: {
          change: 0,
        },
      },
    },
  });

  const statistics = [
    { title: 'Total views', value: data?.views?.total },
    { title: 'Total views for the past 30 days', value: data?.views?.historical?.change },
    { title: 'Total downloads', value: data?.downloads?.total },
    { title: 'Total downloads for the past 30 days', value: data?.downloads?.historical?.change },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <UnsplashIcon className="h-6 w-6" />
        <span>Unsplash Statistics</span>
      </h2>
      <p className="dark:text-zinc-400">{`My statistics in Unsplash.`}</p>

      <Suspense fallback={<Skeleton />}>
        <div className="grid grid-cols-1 gap-2 py-2 sm:grid-cols-2">
          {statistics.map((item) => (
            <Fragment key={item.title}>
              <div className="flex flex-col rounded-xl bg-zinc-100 px-4 py-2 shadow-md dark:bg-zinc-900">
                <div className="text-sm dark:text-zinc-400">{item.title}</div>
                <AnimateCounter className="text-2xl font-bold" total={item.value} />
              </div>
            </Fragment>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
