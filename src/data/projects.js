import movieAppImage from '@/public/images/projects/movie-app.webp';
import memoryCardGameImage from '@/public/images/projects/memory-card-game.webp';
import imageConverterImage from '@/public/images/projects/image-converter.webp';
import spotifyCloneImage from '@/public/images/projects/spotify-clone.webp';
import fakeFacebookImage from '@/public/images/projects/fake-facebook.webp';

const data = [
  {
    image: movieAppImage.src,
    title: 'Movie App',
    description:
      'This is an application using Next.js as the framework and allows the user to search movies they want to watch from The Movie DB API.',
    links: {
      repo: 'https://github.com/destroymayor/movie-app',
      demo: 'https://movie-app-roan-two.vercel.app',
    },
  },
  {
    image: memoryCardGameImage.src,
    title: 'Memory Card Game',
    description: 'Test your memory with this memory game.',
    links: {
      repo: 'https://github.com/destroymayor/memory-card-game',
      demo: 'https://memory-card-game-demo.vercel.app',
    },
  },
  {
    image: imageConverterImage.src,
    title: 'Image Converter',
    description: 'A simple image convert tool',
    links: {
      repo: 'https://github.com/destroymayor/image-converter',
      demo: 'https://simple-image-converter.vercel.app',
    },
  },
  {
    image: spotifyCloneImage.src,
    title: 'Spotify Clone',
    description: 'A clone project of the Spotify web player.',
    links: {
      repo: 'https://github.com/destroymayor/spotify-clone',
      demo: 'https://spotify-clone-demo.vercel.app',
    },
  },
  {
    image: fakeFacebookImage.src,
    title: 'Facebook Clone',
    description: 'A clone project of the Facebook',
    links: {
      repo: 'https://github.com/destroymayor/facebook-clone',
      demo: 'https://facebook-clone-demo.vercel.app',
    },
  },
];

export default data;
