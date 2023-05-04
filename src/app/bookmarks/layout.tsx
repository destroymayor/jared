import Hero from '@/components/Hero';

export const metadata = {
  title: 'Bookmarks',
  description: 'Collection of useful tools website.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const { title, description } = metadata;

  return (
    <>
      <Hero title={title} description={description} />
      {children}
    </>
  );
}
