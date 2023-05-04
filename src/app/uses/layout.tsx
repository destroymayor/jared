import Hero from '@/components/Hero';

export const metadata = {
  title: 'My Gear',
  description: 'A list of tech equipment I currently use.',
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
