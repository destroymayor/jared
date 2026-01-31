import { getMDXSourcePaths, getMDXSource } from '@/domain';

export async function getSnippetDetailViewModel(params: { lang: string; slug: string }) {
    const { content } = await getMDXSource({
        dirPath: `content/snippets/${params.lang}`,
        slug: params.slug,
    });

    return { content };
}

export async function generateSnippetStaticParams() {
    return getMDXSourcePaths('content/snippets');
}
