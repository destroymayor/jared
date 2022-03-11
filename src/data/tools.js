import { VSCodeIcon, ITermIcon, SpotifyIcon, FigIcon } from '@/components/Common/Icons';
import rectangle from '@/public/images/tools/rectangle.png';

const data = [
  {
    logo: <VSCodeIcon />,
    title: 'VSCode',
    description: 'Code editor',
    link: 'https://code.visualstudio.com',
  },
  {
    logo: <ITermIcon />,
    title: 'iTerm2',
    description: 'iTerm2 is a replacement for Terminal.',
    link: 'https://iterm2.com',
  },
  {
    logo: <SpotifyIcon />,
    title: 'Spotify',
    description: 'Using it to listen to EDM music',
    link: 'https://www.spotify.com',
  },
  {
    logo: <FigIcon />,
    title: 'Fig',
    description: 'Fig Adds IDE-style autocomplete to your existing terminal.',
    link: 'https://fig.io',
  },
  {
    // eslint-disable-next-line @next/next/no-img-element
    logo: <img src={rectangle.src} alt="rectangle logo" />,
    title: 'Rectangle',
    description: 'Move and resize windows in macOS using keyboard shortcuts or snap areas.',
    link: 'https://rectangleapp.com',
  },
];

export default data;
