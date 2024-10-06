import pokemon_explore from '@/public/images/projects/pokemon-explore.webp';
import unsplash_gallery from '@/public/images/projects/unsplash-gallery.webp';
import weather_app from '@/public/images/projects/weather-app.webp';
import movie_app from '@/public/images/projects/movie-app.webp';
import memory_card_game from '@/public/images/projects/memory-card-game.webp';
import image_converter from '@/public/images/projects/image-converter.webp';

const data = [
    {
        image: pokemon_explore.src,
        title: 'Pokemon explore',
        description: 'A Pokemon explore allows the user to search Pokemon from pokeapi.',
        tags: ['next.js', 'zustand', 'Tailwind CSS', 'framer-motion', 'swr', 'pokeapi'],
        release_year: 2022,
        link: {
            repo: 'https://github.com/destroymayor/pokemon-explore',
            demo: 'https://pokemon-explore.vercel.app/',
        },
    },
    {
        image: unsplash_gallery.src,
        title: 'Unsplash Gallery',
        description:
            'A photos gallery app allows the user to search photos from Unsplash.com',
        tags: ['next.js', 'Tailwind CSS', 'framer-motion', 'Unsplash API'],
        release_year: 2022,
        link: {
            repo: 'https://github.com/destroymayor/unsplash-gallery',
            demo: 'https://unsplash-gallery-plum.vercel.app/',
        },
    },
    {
        image: weather_app.src,
        title: 'Weather App',
        description: 'A weather app that shows the current weather in your search.',
        tags: ['next.js', 'Tailwind CSS', 'swr', 'OpenWeatherMap API'],
        release_year: 2022,
        link: {
            repo: 'https://github.com/destroymayor/weather-app',
            demo: 'https://weather-app-gamma-five.vercel.app',
        },
    },
    {
        image: movie_app.src,
        title: 'Movie App',
        description:
            'A movie app allows the user to search movies they want to watch from The Movie DB API.',
        tags: ['next.js', 'Recoil', 'swr', 'Tailwind CSS', 'The Movie DB API'],
        release_year: 2021,
        link: {
            repo: 'https://github.com/destroymayor/movie-app',
            demo: 'https://movie-app-roan-two.vercel.app',
        },
    },
    {
        image: memory_card_game.src,
        title: 'Memory Card Game',
        description: 'Test your memory with this memory game.',
        tags: ['next.js', 'Tailwind CSS'],
        release_year: 2021,
        link: {
            repo: 'https://github.com/destroymayor/memory-card-game',
            demo: 'https://memory-card-game-demo.vercel.app',
        },
    },
    {
        image: image_converter.src,
        title: 'Image Converter',
        description: 'A simple image convert tool',
        tags: ['next.js', 'Tailwind CSS'],
        release_year: 2021,
        link: {
            repo: 'https://github.com/destroymayor/image-converter',
            demo: 'https://simple-image-converter.vercel.app',
        },
    },
];

export default data;
