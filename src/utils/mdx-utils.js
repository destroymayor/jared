import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// mdxFilePaths is the list of all mdx files inside the MDX_FILE_PATH directory
export const mdxFilePaths = (pathname) =>
  fs
    .readdirSync(pathname)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

export const getMdxFileList = (mdxPath) => {
  const MDX_FILE_PATH = path.join(process.cwd(), mdxPath);
  const data = mdxFilePaths(MDX_FILE_PATH).map((filePath) => {
    const source = fs.readFileSync(path.join(MDX_FILE_PATH, filePath));
    const { data } = matter(source);

    return data;
  });

  return data;
};
