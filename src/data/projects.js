import unsplashGallery from '@/public/images/projects/unsplash-gallery.webp';
import weatherApp from '@/public/images/projects/weather-app.webp';
import movieAppImage from '@/public/images/projects/movie-app.webp';
import memoryCardGameImage from '@/public/images/projects/memory-card-game.webp';
import imageConverterImage from '@/public/images/projects/image-converter.webp';

const data = [
  {
    image: unsplashGallery.src,
    title: 'Unsplash Gallery',
    description: 'A photos gallery app allows the user to search photos from Unsplash.com',
    tags: ['Next.js', 'Tailwind CSS', 'Unsplash API'],
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
    tags: ['Next.js', 'Tailwind CSS', 'OpenWeatherMap API'],
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
    tags: ['Next.js', 'Tailwind CSS', 'The Movie DB API'],
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
    tags: ['Next.js', 'Tailwind CSS'],
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
    tags: ['Next.js', 'Tailwind CSS'],
    release_year: 2021,
    links: {
      repo: 'https://github.com/destroymayor/image-converter',
      demo: 'https://simple-image-converter.vercel.app',
    },
  },
];

export default data;
