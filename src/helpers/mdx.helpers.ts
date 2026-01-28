import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllMDXFolder(directory: string) {
    return fs.readdirSync(directory).flatMap((item: string): any => {
        const subpath = `${directory}/${item}`;

        if (fs.statSync(subpath).isDirectory()) {
            return getAllMDXFolder(subpath);
        }

        const source = fs.readFileSync(subpath);
        const { data } = matter(source);

        return {
            ...data,
            slug: subpath.replace(/(content|.mdx)/g, ''),
        };
    });
}

export function getMDXSourcePaths(directory: string) {
    function getPaths(folder: string): any {
        return fs.readdirSync(folder).flatMap((slug: string) => {
            const subpath = `${folder}/${slug}`;

            if (fs.statSync(subpath).isDirectory()) {
                return getPaths(subpath);
            }

            return {
                folder: folder.replace(directory + '/', ''),
                slug: slug.replace(/\.mdx?$/, ''),
            };
        });
    }

    return getPaths(directory);
}

export async function getMDXSource(params: { dirPath: string; slug: string }) {
    const { dirPath = '', slug = '' } = params;
    const mdxDirectoryPath = path.join(process.cwd(), dirPath);
    const mdxFilePath = path.join(mdxDirectoryPath, `${slug}.mdx`);

    const source = fs.readFileSync(mdxFilePath);
    const { content, data } = matter(source);

    return { content, data };
}
