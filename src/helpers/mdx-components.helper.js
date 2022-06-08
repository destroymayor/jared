import Blockquote from '@/components/Blockquote';
import ContentHeading from '@/components/ContentHeading';
import CodeBlock from '@/components/CodeBlock';
import PostImage from '@/components/PostImage';

export const COMPONENTS = {
  h2: (props) => <h2 {...props} className="py-2 text-xl font-semibold sm:text-2xl" />,
  h3: (props) => <h3 {...props} className="py-2 text-xl font-semibold" />,
  ul: (props) => <ul {...props} className="flex list-disc flex-col gap-4 py-4 pl-4" />,
  QuoteHeading: (props) => <h2 {...props} className="mt-2 mb-10 text-xl" />,
  ContentHeading,
  blockquote: Blockquote,
  Blockquote,
  PostImage,
  code: CodeBlock,
};
