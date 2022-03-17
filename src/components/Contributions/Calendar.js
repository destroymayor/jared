import { useState } from 'react';

import clsx from 'clsx';

export default function Calendar(props) {
  const { data } = props;

  const [selectContribution, setSelectContribution] = useState({ count: null, date: null });

  const weeks = data?.weeks ?? [];
  const months = data?.months ?? [];
  const contributionColors = data?.colors ?? [];

  return (
    <>
      <div className="flex animate-fade-up flex-col">
        <ul className="flex justify-end gap-[3px] overflow-hidden md:justify-start">
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(
                `${month.totalWeeks < 2 ? 'hidden' : ''}`,
                'text-xs dark:text-zinc-400'
              )}
              style={{ minWidth: 12.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <ul className="flex animate-fade-up justify-end gap-[3px] overflow-hidden">
          {weeks.map((week) => (
            <li key={week.firstDay}>
              {week.contributionDays.map((contribution) => (
                <span
                  key={contribution.date}
                  className="my-[2px] block h-[10px] w-[10px] rounded-sm bg-zinc-300 dark:bg-zinc-800"
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

      <div className="flex animate-fade-up flex-wrap items-center justify-between gap-2">
        <div
          className={clsx(
            `${selectContribution.date ? 'opacity-100' : 'opacity-0'}`,
            'rounded bg-gray-200 px-2 text-sm dark:bg-zinc-700'
          )}
        >
          {selectContribution.count} contributions on {selectContribution.date}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-zinc-400">Less</span>
          <ul className="flex gap-1">
            <li className="h-[10px] w-[10px] rounded-sm bg-zinc-300 dark:bg-zinc-800" />
            {contributionColors.map((item) => (
              <li
                key={item}
                className="h-[10px] w-[10px] rounded-sm"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>
      </div>
    </>
  );
}
