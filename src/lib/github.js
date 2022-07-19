const user_id = 'destroymayor';
const read_user_token = process.env.GITHUB_READ_USER_TOKEN;

const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';
const GITHUB_USER_REPOS_ENDPOINT = 'https://api.github.com/users/destroymayor/repos?per_page=100';

const GITHUB_USER_QUERY = `query {
      user(login: "${user_id}") {
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

export const getGithubUserContribution = async () => {
  const response = await fetch(GITHUB_USER_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${read_user_token}`,
    },
    body: JSON.stringify({
      query: GITHUB_USER_QUERY,
    }),
  });
  const status = response.status;

  if (status > 400) {
    return { status, data: {} };
  }

  const responseJson = await response.json();

  return { status, data: responseJson.data.user };
};

export const getGithubUserStars = async () => {
  const response = await fetch(GITHUB_USER_REPOS_ENDPOINT);
  const status = response.status;

  if (status > 400) {
    return { status, data: {} };
  }

  const repositories = await response.json();

  const filterRepos = repositories.filter((repo) => !repo.fork);
  const stars = filterRepos.reduce(
    (accumulator, repository) => accumulator + repository['stargazers_count'],
    0
  );

  return { status, data: stars };
};
