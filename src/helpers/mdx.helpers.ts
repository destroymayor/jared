import fs from 'fs';
import matter from 'gray-matter';

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
           slug: subpath.replace(/(src\/app|\/page|.mdx)/g, ''),
       };
   });
};
