import fs from 'fs';

// mdxFilePaths is the list of all mdx files inside the MDX_FILE_PATH directory
export const mdxFilePaths = (pathname) =>
  fs
    .readdirSync(pathname)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
