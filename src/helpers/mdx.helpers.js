import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const mdxFilePaths = (pathname) => {
  const filePath = path.join(process.cwd(), pathname);

  return fs.readdirSync(filePath).filter((path) => /\.mdx?$/.test(path));
};

export const getALLMdxFile = (mdxPath) => {
  const data = mdxFilePaths(mdxPath).map((filePath) => {
    const slug = filePath.replace(/\.mdx?$/, '');
    const source = fs.readFileSync(path.join(mdxPath, filePath));
    const { data } = matter(source);

    return {
      ...data,
      slug,
    };
  });

  return data;
};

export const getMdxFile = async ({ dirPath = '', slug = '' }) => {
  const mdxFolderPath = path.join(process.cwd(), `src/data${dirPath}`);
  const mdxFilePath = path.join(mdxFolderPath, `${slug}.mdx`);

  const source = fs.readFileSync(mdxFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return { mdxSource, data };
};
