import { VSCodeIcon, ITermIcon, SpotifyIcon, FigIcon, GithubIcon } from '@/components/Common/Icons';
import rectangle from '@/public/images/tools/rectangle.png';

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
      type: 'info',
      label: 'INDIE',
    },
  },
  {
    logo: <FigIcon />,
    title: 'Fig',
    description: 'Fig Adds IDE-style autocomplete to your existing terminal.',
    link: 'https://fig.io',
    tag: {
      type: 'info',
      label: 'INDIE',
    },
  },
  {
    // eslint-disable-next-line @next/next/no-img-element
    logo: <img src={rectangle.src} alt="rectangle logo" />,
    title: 'Rectangle',
    description: 'Move and resize windows in macOS using keyboard shortcuts or snap areas.',
    link: 'https://rectangleapp.com',
    tag: {
      type: 'info',
      label: 'INDIE',
    },
  },
  {
    logo: <GithubIcon />,
    title: 'GitHub Mobile',
    description: 'Bring GitHub collaboration tools to your small screens with GitHub Mobile.',
    link: 'https://github.com/mobile',
  },
  {
    logo: <SpotifyIcon />,
    title: 'Spotify',
    description: 'Using it to listen to EDM music',
    link: 'https://www.spotify.com',
  },
];

export default data;
