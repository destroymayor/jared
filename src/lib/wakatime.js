import querystring from 'querystring';

const client_id = process.env.WAKATIME_CLIENT_ID;
const client_secret = process.env.WAKATIME_CLIENT_SECRET;
const refresh_token = process.env.WAKATIME_CLIENT_REFRESH_TOKEN;

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

  const request = await fetch(`${STATS_ENDPOINT}/last_7_days`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const status = request.status;

  if (status > 400) {
    return { status, data: [] };
  }

  const getData = await request?.json();

  const filterReadStatsData = getData?.data?.languages.filter(
    (item) => item.minutes > 0 || item.hours > 0
  );

  return {
    status,
    data: filterReadStatsData,
  };
};
