import { getMDXSourcePaths, getMDXSource } from '@/domain';

export async function getSnippetDetailViewModel(params: { lang: string; slug: string }) {
    const { content, data } = await getMDXSource({
        dirPath: `content/snippets/${params.lang}`,
        slug: params.slug,
    });

    return { content, frontmatter: data as { title: string; description: string } };
}

export async function generateSnippetStaticParams() {
    return getMDXSourcePaths('content/snippets');
}
