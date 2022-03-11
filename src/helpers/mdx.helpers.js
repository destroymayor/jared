import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

// mdxFilePaths is the list of all mdx files inside the MDX_FILE_PATH directory
export const mdxFilePaths = (pathname) => {
  const filePath = path.join(process.cwd(), pathname);

  return (
    fs
      .readdirSync(filePath)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
};

export const getMdxFileList = (mdxPath) => {
  const data = mdxFilePaths(mdxPath).map((filePath) => {
    const source = fs.readFileSync(path.join(mdxPath, filePath));
    const { data } = matter(source);

    return data;
  });

  return data;
};

export const getMdxFile = async (mdxPath, slug) => {
  const mdxFolderPath = path.join(process.cwd(), mdxPath);
  const mdxFilePath = path.join(mdxFolderPath, `${slug}.mdx`);

  const source = fs.readFileSync(mdxFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return { mdxSource, data };
};
