import querystring from 'querystring';

const client_id = process.env.WAKATIME_CLIEND_ID;
const client_secret = process.env.WAKATIME_CLIEND_SECRET;
const refresh_token = process.env.WAKATIME_CLIEND_REFRESH_TOKEN;

const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
const TOKEN_ENDPOINT = `https://wakatime.com/oauth/token`;

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      client_id,
      client_secret,
      refresh_token,
    }),
  });

  return response.json();
};

export const getReadStats = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`${STATS_ENDPOINT}/last_7_days`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
