const client_id = process.env.WAKATIME_CLIENT_ID;
const client_secret = process.env.WAKATIME_CLIENT_SECRET;
const refresh_token = process.env.WAKATIME_CLIENT_REFRESH_TOKEN;

const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
const TOKEN_ENDPOINT = 'https://wakatime.com/oauth/token';

export const getAccessToken = async () => {
  const body: {
    grant_type: string;
    client_id?: string;
    client_secret?: string;
    refresh_token?: string;
  } = {
    grant_type: 'refresh_token',
    client_id,
    client_secret,
    refresh_token,
  };

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body),
  });

  return response.json();
};

export const getWakaTimeCurrentStats = async () => {
  const { access_token } = await getAccessToken();

  const request = await fetch(`${STATS_ENDPOINT}/last_7_days`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const status = request.status;

  if (status > 400) return { status, data: [] };

  const getData = await request?.json();

  const best_day = {
    date: getData?.data?.best_day?.date,
    text: getData?.data?.best_day?.text,
  };
  const human_readable_daily_average = getData?.data?.human_readable_daily_average;
  const human_readable_total = getData?.data?.human_readable_total;

  const languages = getData?.data?.languages?.slice(0, 4);
  const editors = getData?.data?.editors;

  return {
    status,
    data: {
      best_day,
      human_readable_daily_average,
      human_readable_total,
      languages,
      editors,
    },
  };
};
