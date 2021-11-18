const GITHUB_USER_ENDPOINT = `https://api.github.com/users/destroymayor`;

export const getGithubUser = async () => {
  const response = await fetch(GITHUB_USER_ENDPOINT);
  const status = response.status;

  if (status > 400) {
    return { status, data: {} };
  }

  const data = await response.json();

  const avatarUrl = data.avatar_url;

  return { status, data: { avatarUrl } };
};
