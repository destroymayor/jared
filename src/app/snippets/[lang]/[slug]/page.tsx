import { Metadata } from 'next';

import {
    getSnippetDetailViewModel,
    generateSnippetStaticParams,
} from './snippet-detail.view-model';
import { SnippetDetailViewController } from './snippet-detail.view-controller';

export async function generateStaticParams() {
    return generateSnippetStaticParams();
}

type Params = Promise<{
    lang: string;
    slug: string;
}>;

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { lang, slug } = await params;
    const { frontmatter } = await getSnippetDetailViewModel({ lang, slug });

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        alternates: {
            canonical: `/snippets/${lang}/${slug}`,
        },
    };
}

export default async function Page({ params }: { params: Params }) {
    const { lang, slug } = await params;
    const { content } = await getSnippetDetailViewModel({ lang, slug });

    return <SnippetDetailViewController content={content} />;
}
