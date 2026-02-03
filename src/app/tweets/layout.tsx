import Hero from '@/components/Hero';

import ROUTES from '@/domain/constants/routes';

const { TWEETS } = ROUTES;
const { title, description } = TWEETS;

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
