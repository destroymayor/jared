import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const getAllMdxFolder = (directory) => {
  return fs.readdirSync(directory).flatMap((item) => {
    const subpath = `${directory}/${item}`;

    if (fs.statSync(subpath).isDirectory()) {
      return getAllMdxFolder(subpath);
    }

    const source = fs.readFileSync(subpath);
    const { data } = matter(source);

    return {
      ...data,
      slug: subpath.replace(/(content|.mdx)/g, ''),
    };
  });
};

export const getMdxFilePaths = (directory) => {
  const getPaths = (folder) => {
    return fs.readdirSync(folder).flatMap((slug) => {
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

export const getMdxFile = async ({ dirPath = '', slug = '' }) => {
  const mdxDirectoryPath = path.join(process.cwd(), dirPath);
  const mdxFilePath = path.join(mdxDirectoryPath, `${slug}.mdx`);

  const source = fs.readFileSync(mdxFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });

  return { mdxSource, data };
};
