export type WeeksType = {
  contributionDays: {
    color: string;
    contributionCount: number;
    date: string;
    weekday: number;
  }[];
  firstDay: string;
};

export type MonthsProps = {
  firstDay: string;
  name: string;
  totalWeeks: number;
};

export type ContributionCalendarType = {
  colors: string[];
  totalContributions: number;
  months: MonthsProps[];
  weeks: WeeksType[];
};

export type ContributionsCollectionType = {
  contributionsCollection: {
    contributionCalendar: ContributionCalendarType;
  };
};
