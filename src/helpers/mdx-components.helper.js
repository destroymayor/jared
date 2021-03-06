import Blockquote from '@/components/Blockquote';
import ContentHeading from '@/components/ContentHeading';
import CodeBlock from '@/components/CodeBlock';
import PostImage from '@/components/PostImage';

export const COMPONENTS = {
  h2: ContentHeading,
  h3: ContentHeading,
  ul: (props) => <ul {...props} className="flex list-disc flex-col gap-3 pb-4 pl-7" />,
  li: (props) => <li {...props} className="px-2" />,
  a: (props) => <a {...props} className="text-sky-700 hover:underline dark:text-sky-500" />,
  ContentHeading,
  blockquote: Blockquote,
  Blockquote,
  PostImage,
  code: CodeBlock,
};
