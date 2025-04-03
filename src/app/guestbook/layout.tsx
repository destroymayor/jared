import Hero from '@/components/Hero';

import ROUTES from '@/constants/routes';

const { GUESTBOOK } = ROUTES;
const { title, description } = GUESTBOOK;

export const metadata = {
    title,
    description,
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
