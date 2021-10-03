import Links from '@/components/Home/Header/Links';

import CircleSpring from '@/components/Common/CircleSpring';
import Wave from '@/components/Common/Wave';

const Header = () => {
  return (
    <section className="relative flex flex-col py-3 text-gray-800 rounded-md dark:text-gray-100 dark:bg-opacity-0 gap-y-4">
      <CircleSpring
        className="absolute w-48 h-48 bg-blue-300 rounded-full dark:bg-blue-800"
        style={{
          zIndex: '-10',
          top: -80,
          left: -64,
        }}
      />

      <div className="flex items-center gap-x-2">
        <h1 className="text-4xl">{`Hey, I'm Jared Chen`}</h1>
        <Wave />
      </div>

      <h2 className="text-2xl">{`I'm a front-end developer.`}</h2>
      <Links />
    </section>
  );
};

export default Header;
