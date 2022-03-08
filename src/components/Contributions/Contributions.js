import { useState } from 'react';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import clsx from 'clsx';

export default function Contributions() {
  const { data } = useSWR('/api/github', fetcher);

  const [selectContribution, setSelectContribution] = useState({ count: null, date: null });

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar;
  const weeks = contributionCalendar?.weeks;
  const contributionColors = ['#216e39', '#30a14e', '#40c463', '#9be9a8'];

  return (
    <section className="flex flex-col gap-y-2">
      <h3 className="text-2xl">Github Contributions</h3>
      <p>{contributionCalendar.totalContributions} contributions in the last year</p>

      <div className="flex">
        <ul className="flex justify-end gap-[3px] overflow-hidden">
          {weeks.map((item) => (
            <li key={item.firstDay}>
              {item.contributionDays.map((contribution) => (
                <span
                  key={contribution.date}
                  className="my-[2px] block h-[10px] w-[10px] rounded-sm bg-gray-300 dark:bg-zinc-800"
                  style={{
                    backgroundColor: contribution.contributionCount > 0 && contribution.color,
                  }}
                  onMouseEnter={() =>
                    setSelectContribution({
                      count: contribution.contributionCount,
                      date: contribution.date,
                    })
                  }
                  onMouseLeave={() => setSelectContribution({ count: null, date: null })}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span>Less</span>
          <ul className="flex gap-1">
            <li className="h-[10px] w-[10px] rounded-sm bg-gray-300 dark:bg-zinc-800" />
            {contributionColors.map((item) => (
              <span
                key={item}
                className="block h-[10px] w-[10px] rounded-sm"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution.date ? 'opacity-100' : 'opacity-0'}`,
            'rounded-md bg-zinc-700 px-2 text-sm'
          )}
        >
          {selectContribution.count} contributions on {selectContribution.date}
        </div>
      </div>
    </section>
  );
}
