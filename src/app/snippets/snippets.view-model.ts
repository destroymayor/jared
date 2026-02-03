import { getAllMDXFolder } from '@/domain';

export async function getSnippetsViewModel() {
    const snippets = await getAllMDXFolder('content/snippets');
    return { snippets };
}
