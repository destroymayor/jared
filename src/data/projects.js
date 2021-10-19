import movieAppImage from '@/public/images/projects/movie-app.webp';
import convertImageToWebpImage from '@/public/images/projects/convert-image-to-webp.webp';
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
    image: convertImageToWebpImage.src,
    title: 'Convert Image to webp tool',
    description: 'A Simple .webp Convert tool',
    links: {
      repo: 'https://github.com/destroymayor/image-converter',
      demo: 'https://simple-image-converter.vercel.app/',
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
