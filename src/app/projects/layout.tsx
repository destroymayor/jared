import Hero from '@/components/Hero';

export const metadata = {
    title: 'Projects',
    description: 'Internet thingies built with React, Next.js and TypeScript.',
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
