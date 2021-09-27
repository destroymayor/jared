import Links from '@/components/Home/Header/Links';

const Header = () => {
  return (
    <section className="flex flex-col py-3 text-gray-800 rounded-md dark:text-gray-100 dark:bg-opacity-0 gap-y-4">
      <h1 className="text-4xl">{`Hey, I'm Jared Chen 👋`}</h1>
      <h2 className="text-2xl">{`I'm a front-end developer.`}</h2>
      <Links />
    </section>
  );
};

export default Header;
