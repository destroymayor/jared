export type PhotoType = {
  id: string;
  blur_hash: string;
  color: string;
  urls: {
    raw: string;
    regular: string;
  };
  links: {
    html: string;
    download: string;
  };
};
