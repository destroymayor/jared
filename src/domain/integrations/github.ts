import { defineEndpoint } from './core/define-endpoint';
import type { ContributionsCollectionType } from '@/lib/github/types';

const GITHUB_USER_ID = 'destroymayor';
const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

const CONTRIBUTION_QUERY = `query {
      user(login: "${GITHUB_USER_ID}") {
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            months {
              firstDay
              name
              totalWeeks
            }
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
              firstDay
            }
          }
        }
      }
}`;

type RawContributionResponse = {
    data?: { user: ContributionsCollectionType | null };
};

export const githubContribution = defineEndpoint<
    RawContributionResponse,
    ContributionsCollectionType | null
>({
    request: ({ fetch, env }) =>
        fetch(GITHUB_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: { Authorization: `bearer ${env.GITHUB_READ_USER_TOKEN}` },
            body: JSON.stringify({ query: CONTRIBUTION_QUERY }),
        }),
    transform: (raw) => raw.data?.user ?? null,
    fallback: null,
});
