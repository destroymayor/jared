import spotifyCloneImage from '@/public/images/projects/spotify-clone.webp'
import movieAppImage from '@/public/images/projects/movie-app.webp';
import imageConverterImage from '@/public/images/projects/image-converter.webp';
import fakeFacebookImage from '@/public/images/projects/fake-facebook.webp';

const data = [
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
    image: imageConverterImage.src,
    title: 'Image Converter',
    description: 'A simple image convert tool',
    links: {
      repo: 'https://github.com/destroymayor/image-converter',
      demo: 'https://simple-image-converter.vercel.app',
    },
  },
  {
    image: fakeFacebookImage.src,
    title: 'Fake Facebook',
    description: 'No description',
    links: {
      repo: 'https://github.com/destroymayor/fake-facebook',
      demo: 'https://fake-facebook-gamma.vercel.app',
    },
  },
];

export default data;
