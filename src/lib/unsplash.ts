const unsplash_access_key = process.env.UNSPLASH_ACCESS_KEY;

const UNSPLASH_ENDPOINT = 'https://api.unsplash.com/users/destroymayor';

interface IUrls {
  raw: string;
  regular: string;
}

interface IPhoto {
  id: string;
  urls: IUrls[];
  links: {
    html: string;
    download: string;
  };
}

export const getUnsplashPhotos = async () => {
  const request = await fetch(`${UNSPLASH_ENDPOINT}/photos?client_id=${unsplash_access_key}`, {
    method: 'GET',
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, data: undefined };
  }

  const data = await request.json();

  const photos = data?.map((item: IPhoto) => ({ id: item.id, urls: item.urls, links: item.links }));

  return { status, data: photos };
};

export const getUnsplashStatistics = async () => {
  const request = await fetch(`${UNSPLASH_ENDPOINT}/statistics?client_id=${unsplash_access_key}`, {
    method: 'GET',
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, data: undefined };
  }

  return { status, data: await request.json() };
};