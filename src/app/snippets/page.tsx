import { Suspense } from 'react';

import Hero from '@/components/Hero';
import Loading from './loading';

import ROUTES from '@/domain/constants/routes';

import { getSnippetsViewModel } from './snippets.view-model';
import { SnippetsViewController } from './snippets.view-controller';

const { SNIPPETS } = ROUTES;
const { title, description } = SNIPPETS;

export const metadata = {
    title,
    description,
};

export default async function Page() {
    const { title, description } = metadata;
    const { snippets } = await getSnippetsViewModel();

    return (
        <>
            <Hero title={title} description={description} />
            <Suspense fallback={<Loading />}>
                <SnippetsViewController snippets={snippets} />
            </Suspense>
        </>
    );
}
