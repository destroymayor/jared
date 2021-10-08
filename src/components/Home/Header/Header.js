import Links from '@/components/Home/Header/Links';

import CircleSpring from '@/components/Common/CircleSpring';
import Wave from '@/components/Home/Common/Wave';

const Header = () => {
  return (
    <section className="relative flex flex-col text-gray-800 rounded-md gap-y-4 md:py-3 dark:text-gray-100 dark:bg-opacity-0">
      <CircleSpring
        className="absolute w-48 h-48 bg-blue-300 rounded-full dark:bg-blue-800"
        style={{
          zIndex: '-10',
          top: -80,
          left: -64,
        }}
      />

      <div className="flex items-center gap-x-2">
        <h1 className="text-2xl md:text-4xl">{`Hey, I'm Jared Chen`}</h1>
        <Wave />
      </div>

      <p className="text-lg md:text-xl">{`Front-end developer, mechanical keyboard enthusiast.`}</p>

      <Links />
    </section>
  );
};

export default Header;
