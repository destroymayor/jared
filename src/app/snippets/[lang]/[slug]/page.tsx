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

export default async function Page({ params }: { params: Params }) {
    const { lang, slug } = await params;
    const { content } = await getSnippetDetailViewModel({ lang, slug });

    return <SnippetDetailViewController content={content} />;
}
