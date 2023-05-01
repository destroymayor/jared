'use client';

import { MDXRemote } from 'next-mdx-remote';

import Blockquote from '@/components/Blockquote';
import ContentHeading from '@/components/ContentHeading';
import CodeBlock from '@/components/CodeBlock';
import PostImage from '@/components/PostImage';

type ComponentsTypes = {
  [key: string]: any;
};

export const COMPONENTS: ComponentsTypes = {
  h2: ContentHeading,
  h3: ContentHeading,
  ul: (props: any) => <ul {...props} className="flex list-disc flex-col gap-3 pb-4 pl-7" />,
  li: (props: any) => <li {...props} className="px-2" />,
  a: (props: any) => <a {...props} className="text-sky-700 hover:underline dark:text-sky-500" />,
  ContentHeading,
  blockquote: Blockquote,
  PostImage,
  code: CodeBlock,
};

export default MDXRemote;
