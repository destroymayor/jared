import Hero from '@/components/Hero';

export const metadata = {
    title: 'Tweets',
    description: 'My favorite tweets.',
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
