import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const getAllMDXFolder = (directory: string) => {
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
};

export const getMDXSourcePaths = (directory: string) => {
  const getPaths = (folder: string): any => {
    return fs.readdirSync(folder).flatMap((slug: string) => {
      const subpath = `${folder}/${slug}`;

      if (fs.statSync(subpath).isDirectory()) {
        return getPaths(subpath);
      }

      return {
        folder: folder?.replace(directory + '/', ''),
        slug: slug.replace(/\.mdx?$/, ''),
      };
    });
  };

  return getPaths(directory);
};

export const getMDXSource = async (params: { dirPath: string; slug: string }) => {
  const { dirPath = '', slug = '' } = params;
  const mdxDirectoryPath = path.join(process.cwd(), dirPath);
  const mdxFilePath = path.join(mdxDirectoryPath, `${slug}.mdx`);

  const source = fs.readFileSync(mdxFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });

  return { mdxSource, data };
};
