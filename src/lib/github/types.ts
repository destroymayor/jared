export type WeeksType = {
  contributionDays: Array<{
    color: string;
    contributionCount: number;
    date: string;
    weekday: number;
  }>;
  firstDay: string;
};

export type MonthsType = {
  firstDay: string;
  name: string;
  totalWeeks: number;
};

export type ContributionCalendarType = {
  colors: Array<string>;
  totalContributions: number;
  months: Array<MonthsType>;
  weeks: Array<WeeksType>;
};

export type ContributionsCollectionType = {
  contributionsCollection: {
    contributionCalendar: ContributionCalendarType;
  };
};
