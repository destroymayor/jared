/* eslint-disable @next/next/no-img-element */
import {
  VSCodeIcon,
  ITermIcon,
  SpotifyIcon,
  FigIcon,
  GithubIcon,
  WakaTimeIcon,
} from '@/components/Icons';
import rectangle from '@/public/images/uses/rectangle.png';
import airBuddy from '@/public/images/uses/airbuddy.png';
import omniDiskSweeper from '@/public/images/uses/omnidisksweeper.png';

const data = {
  equipment: [
    {
      title: 'MacBook Pro',
      description: '13-inch, i5, 16GM RAM, 256GB SSD',
      tag: { type: 'success', label: 'Development' },
    },
    {
      title: 'Apple Magic Trackpad 2',
      description: 'Space grey',
      tag: { type: 'success', label: 'Development' },
    },
    {
      title: 'Ducky One 2',
      description: 'Keyboard - Black switch',
      tag: { type: 'success', label: 'Development' },
    },
    {
      title: 'Sony WH-1000XM4',
      description: 'Wireless noise canceling overhead headphones',
      tag: { type: 'success', label: 'Development' },
    },
    {
      title: 'iPhone 12 Pro',
      description: 'Mobile smartphone',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      title: 'Apple Watch 7',
      description: 'Smart watch',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      title: 'Apple AirPods Pro',
      description: 'True wireless noise-canceling earphones',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      title: 'FiiO K5 Pro',
      description: 'Desktop DAC and Amplifier',
      tag: { type: 'error', label: 'Gaming' },
    },
    {
      title: 'Beyerdynamic DT 990 Pro',
      description: 'Circumaural headphones with open-back design',
      tag: { type: 'error', label: 'Gaming' },
    },
    {
      title: 'Logitech G Pro',
      description: 'Wireless mouse',
      tag: { type: 'error', label: 'Gaming' },
    },
    {
      title: 'Helen 80',
      description: 'Keyboard - Gateron black switch',
      tag: { type: 'error', label: 'Gaming' },
    },
    {
      title: 'MSI GeForce RTX™ 3060',
      description: 'GPU',
      tag: { type: 'error', label: 'Gaming' },
    },
    {
      title: 'AMD Ryzen 7 3700x',
      description: 'CPU',
      tag: { type: 'error', label: 'Gaming' },
    },
    {
      title: 'NZXT H1 V1',
      description: 'Case',
      tag: { type: 'error', label: 'Gaming' },
    },
  ],
  applications: [
    {
      logo: <VSCodeIcon />,
      title: 'VSCode',
      description: 'My code editor of choice.',
      link: 'https://code.visualstudio.com',
      tag: { type: 'success', label: 'Open Source' },
    },
    {
      logo: <ITermIcon />,
      title: 'iTerm2',
      description: 'iTerm2 is a replacement for Terminal.',
      link: 'https://iterm2.com',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      logo: <FigIcon />,
      title: 'Fig',
      description: 'Fig Adds IDE-style autocomplete to your existing terminal.',
      link: 'https://fig.io',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      logo: <img src={rectangle.src} alt="rectangle logo" />,
      title: 'Rectangle',
      description: 'Move and resize windows in macOS using keyboard shortcuts or snap areas.',
      link: 'https://rectangleapp.com',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      logo: <img src={airBuddy.src} alt="airbuddy logo" />,
      title: 'AirBuddy',
      description: 'Take control of your wireless devices on macOS.',
      link: 'https://v2.airbuddy.app',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      logo: <img src={omniDiskSweeper.src} alt="omni disk sweeper logo" />,
      title: 'OmniDiskSweeper',
      description: 'Quickly find large, unwanted files and sweep them into the trash.',
      link: 'https://www.omnigroup.com/more',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      logo: <WakaTimeIcon />,
      title: 'WakaTime',
      description: 'Record coding stats in your editor',
      link: 'https://wakatime.com/',
      tag: { type: 'error', label: 'Website' },
    },
    {
      logo: <GithubIcon />,
      title: 'GitHub Mobile',
      description: 'Bring GitHub collaboration tools to your small screens with GitHub Mobile.',
      link: 'https://github.com/mobile',
      tag: { type: 'primary', label: 'Indie' },
    },
    {
      logo: <SpotifyIcon />,
      title: 'Spotify',
      description: 'Using it to listen to EDM music',
      link: 'https://www.spotify.com',
      tag: { type: 'primary', label: 'Indie' },
    },
  ],
};

export default data;
