import { HomeBound } from './home.view-controller';

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jared Chen',
    url: 'https://jared-chen.me',
    jobTitle: 'Front-End Developer',
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    sameAs: ['https://github.com/destroymayor'],
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HomeBound />
        </>
    );
}
