import Hero from '@/components/Hero';

export const metadata = {
    title: 'Dashboard',
    description:
        'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.',
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
