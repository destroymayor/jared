export interface contributionDaysProp {
  color: string | null;
  date: string;
  contributionCount: number;
}

export interface weeksProps {
  contributionDays: contributionDaysProp[];
  firstDay: string;
}

export interface monthsProps {
  firstDay: string;
  name: string;
  totalWeeks: number;
}
