/* eslint-disable @next/next/no-img-element */
import {
  VSCodeIcon,
  ITermIcon,
  SpotifyIcon,
  FigIcon,
  GithubIcon,
  WakaTimeIcon,
} from '@/components/Common/Icons';
import rectangle from '@/public/images/tools/rectangle.png';
import airBuddy from '@/public/images/tools/airbuddy.png';
import omniDiskSweeper from '@/public/images/tools/omnidisksweeper.png';

const data = [
  {
    logo: <VSCodeIcon />,
    title: 'VSCode',
    description: 'My code editor of choice.',
    link: 'https://code.visualstudio.com',
    tag: {
      type: 'success',
      label: 'OPEN SOURCE',
    },
  },
  {
    logo: <ITermIcon />,
    title: 'iTerm2',
    description: 'iTerm2 is a replacement for Terminal.',
    link: 'https://iterm2.com',
    tag: {
      type: 'primary',
      label: 'INDIE',
    },
  },
  {
    logo: <FigIcon />,
    title: 'Fig',
    description: 'Fig Adds IDE-style autocomplete to your existing terminal.',
    link: 'https://fig.io',
    tag: {
      type: 'primary',
      label: 'INDIE',
    },
  },
  {
    logo: <img src={rectangle.src} alt="rectangle logo" />,
    title: 'Rectangle',
    description: 'Move and resize windows in macOS using keyboard shortcuts or snap areas.',
    link: 'https://rectangleapp.com',
    tag: {
      type: 'primary',
      label: 'INDIE',
    },
  },
  {
    logo: <img src={airBuddy.src} alt="airbuddy logo" />,
    title: 'AirBuddy',
    description: 'Take control of your wireless devices on macOS.',
    link: 'https://v2.airbuddy.app',
    tag: {
      type: 'primary',
      label: 'INDIE',
    },
  },
  {
    logo: <img src={omniDiskSweeper.src} alt="omni disk sweeper logo" />,
    title: 'OmniDiskSweeper',
    description: 'Quickly find large, unwanted files and sweep them into the trash.',
    link: 'https://www.omnigroup.com/more',
    tag: {
      type: 'primary',
      label: 'INDIE',
    },
  },
  {
    logo: <WakaTimeIcon />,
    title: 'WakaTime',
    description: 'Record coding stats in your editor',
    link: 'https://wakatime.com/',
    tag: {
      type: 'error',
      label: 'WEBSITE',
    },
  },
  {
    logo: <GithubIcon />,
    title: 'GitHub Mobile',
    description: 'Bring GitHub collaboration tools to your small screens with GitHub Mobile.',
    link: 'https://github.com/mobile',
    tag: {
      type: 'primary',
      label: 'INDIE',
    },
  },
  {
    logo: <SpotifyIcon />,
    title: 'Spotify',
    description: 'Using it to listen to EDM music',
    link: 'https://www.spotify.com',
    tag: {
      type: 'primary',
      label: 'INDIE',
    },
  },
];

export default data;
