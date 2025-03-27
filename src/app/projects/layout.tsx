import Hero from '@/components/Hero';

import ROUTES from '@/constants/routes';

const { PROJECTS } = ROUTES;
const { title, description } = PROJECTS;

export const metadata = {
    title,
    description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const { title, description } = metadata;

    return (
        <div className="py-28">
            <Hero title={title} description={description} />
            {children}
        </div>
    );
}
