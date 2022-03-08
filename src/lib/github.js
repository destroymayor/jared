const user_id = 'destroymayor';
const read_user_token = process.env.GITHUB_READ_USER_TOKEN;

const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY = `query {
      user(login: "${user_id}") {
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
                weekday
              }
              firstDay
            }
          }
        }
      }
}`;

export const getGithubUser = async () => {
  const response = await fetch(GITHUB_USER_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `bearer ${read_user_token}` },
    body: JSON.stringify({ query: GITHUB_USER_QUERY }),
  });
  const status = response.status;

  if (status > 400) {
    return { status, data: {} };
  }

  const responseJson = await response.json();

  return { status, data: responseJson.data.user };
};
