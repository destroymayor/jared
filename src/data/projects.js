import unsplashGallery from '@/public/images/projects/unsplash-gallery.webp';
import weatherApp from '@/public/images/projects/weather-app.webp';
import movieAppImage from '@/public/images/projects/movie-app.webp';
import memoryCardGameImage from '@/public/images/projects/memory-card-game.webp';
import imageConverterImage from '@/public/images/projects/image-converter.webp';
import spotifyCloneImage from '@/public/images/projects/spotify-clone.webp';

const data = [
  {
    image: unsplashGallery.src,
    title: 'Unsplash Gallery',
    description: 'A photos gallery app allows the user to search photos from Unsplash.com',
    tag: 'Next.js',
    release_year: 2022,
    links: {
      repo: 'https://github.com/destroymayor/unsplash-gallery',
      demo: 'https://unsplash-gallery-plum.vercel.app/',
    },
  },
  {
    image: weatherApp.src,
    title: 'Weather App',
    description: 'A weather app that shows the current weather in your search.',
    tag: 'Next.js',
    release_year: 2022,
    links: {
      repo: 'https://github.com/destroymayor/weather-app',
      demo: 'https://weather-app-gamma-five.vercel.app',
    },
  },
  {
    image: movieAppImage.src,
    title: 'Movie App',
    description:
      'A movie app allows the user to search movies they want to watch from The Movie DB API.',
    tag: 'Next.js',
    release_year: 2021,
    links: {
      repo: 'https://github.com/destroymayor/movie-app',
      demo: 'https://movie-app-roan-two.vercel.app',
    },
  },
  {
    image: memoryCardGameImage.src,
    title: 'Memory Card Game',
    description: 'Test your memory with this memory game.',
    tag: 'Next.js',
    release_year: 2021,
    links: {
      repo: 'https://github.com/destroymayor/memory-card-game',
      demo: 'https://memory-card-game-demo.vercel.app',
    },
  },
  {
    image: imageConverterImage.src,
    title: 'Image Converter',
    description: 'A simple image convert tool',
    tag: 'Next.js',
    release_year: 2021,
    links: {
      repo: 'https://github.com/destroymayor/image-converter',
      demo: 'https://simple-image-converter.vercel.app',
    },
  },
  {
    image: spotifyCloneImage.src,
    title: 'Spotify Clone',
    description: 'A clone project of the Spotify web player.',
    tag: 'Next.js',
    release_year: 2021,
    links: {
      repo: 'https://github.com/destroymayor/spotify-clone',
      demo: 'https://spotify-clone-demo.vercel.app',
    },
  },
];

export default data;
