export type TopTrackResponseType = {
  album: {
    name: string;
    images: Array<{
      width: number;
    }>
  }
  artists: Array<{
    name: string;
  }>;
  external_urls: {
    spotify: string;
  };
  name: string;
}

export type TrackType = {
  title: string;
  artist: string;
  songUrl: string;
  album: {
    name: string;
    image: {
      url: string;
    };
  };
};

export type NowPlayingType = {
  isPlaying: boolean;
  songUrl: string;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
};
