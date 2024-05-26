import Hero from '@/components/Hero';

export const metadata = {
    title: 'Guestbook',
    description: 'Login your GitHub account to leave a message.',
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
