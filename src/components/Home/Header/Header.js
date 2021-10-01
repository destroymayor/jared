import Links from '@/components/Home/Header/Links';

import { useSpring, animated } from 'react-spring';

const Header = () => {
  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: { duration: 800 },
  });

  return (
    <section className="relative flex flex-col py-3 text-gray-800 rounded-md dark:text-gray-100 dark:bg-opacity-0 gap-y-4">
      <animated.div
        className="absolute w-48 h-48 bg-blue-300 rounded-full dark:bg-blue-800 -left-16"
        style={{
          zIndex: '-10',
          top: -80,
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [0, 0.9, 0.9, 1, 1, 1, 1, 1],
          }),
        }}
      />

      <h1 className="text-4xl">{`Hey, I'm Jared Chen 👋`}</h1>
      <h2 className="text-2xl">{`I'm a front-end developer.`}</h2>
      <Links />
    </section>
  );
};

export default Header;
