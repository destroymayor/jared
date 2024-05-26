import { getAllMDXFolder } from '@/helpers/mdx.helpers';

export default async function Page() {
    const posts = await getAllMDXFolder('content/posts');

    if (posts.length === 0) {
        return <div>{`I'm little lazy...`}</div>;
    }

    return <ul className="flex flex-col gap-10">{}</ul>;
}
