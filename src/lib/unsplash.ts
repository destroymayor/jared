const unsplash_access_key = process.env.UNSPLASH_ACCESS_KEY;

const UNSPLASH_ENDPOINT = 'https://api.unsplash.com/users/destroymayor';

interface UnsplashPhotoUrlsProps {
  raw: string;
  regular: string;
}

interface UnsplashPhotoProps {
  id: string;
  blur_hash: string;
  urls: UnsplashPhotoUrlsProps[];
  links: {
    html: string;
    download: string;
  };
}

export const getUnsplashPhotos = async () => {
  const params = new URLSearchParams();
  params.set('client_id', unsplash_access_key ?? '');
  params.set('order_by', 'popular');
  params.set('per_page', '30');

  const request = await fetch(`${UNSPLASH_ENDPOINT}/photos?${params}`, {
    method: 'GET',
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, data: undefined };
  }

  const data = await request.json();

  const photos = data?.map((item: UnsplashPhotoProps) => ({
    id: item.id,
    blur_hash: item.blur_hash,
    urls: item.urls,
    links: item.links,
  }));

  return { status, data: photos };
};

interface UnsplashStatisticsProps {
  downloads: {
    total: number;
    historical: {
      change: number;
    };
  };
  views: {
    total: number;
    historical: {
      change: number;
    };
  };
}

export const getUnsplashStatistics = async () => {
  const request = await fetch(`${UNSPLASH_ENDPOINT}/statistics?client_id=${unsplash_access_key}`, {
    method: 'GET',
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, data: undefined };
  }

  const data: UnsplashStatisticsProps = await request.json();

  return { status, data };
};
