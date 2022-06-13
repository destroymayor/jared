import Blockquote from '@/components/Blockquote';
import ContentHeading from '@/components/ContentHeading';
import CodeBlock from '@/components/CodeBlock';
import PostImage from '@/components/PostImage';

export const COMPONENTS = {
  h2: ContentHeading,
  h3: ContentHeading,
  ul: (props) => <ul {...props} className="flex list-disc flex-col gap-4 py-4 pl-7" />,
  li: (props) => <li {...props} className="px-2" />,
  QuoteHeading: (props) => <h2 {...props} className="mt-2 mb-10 text-xl" />,
  ContentHeading,
  blockquote: Blockquote,
  Blockquote,
  PostImage,
  code: CodeBlock,
};
