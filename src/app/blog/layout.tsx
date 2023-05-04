import Hero from '@/components/Hero';

export const metadata = {
  title: 'Blog',
  description: 'Write something here.',
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
