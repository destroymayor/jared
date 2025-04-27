import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

import { Separator } from '@/components/ui/separator';
import Hero from '@/components/Hero';
import Blockquote from './Blockquote';
import ContentHeading from './ContentHeading';
import CodeBlock from './CodeBlock';
import PostImage from './PostImage';
import UpdatedAt from './UpdatedAt';

export const COMPONENTS: MDXRemoteProps['components'] = {
    h1: ({ children }) => <h1 className="py-2 text-4xl font-extrabold">{children}</h1>,
    h2: ({ children }) => <ContentHeading className="text-2xl">{children}</ContentHeading>,
    h3: ({ children }) => <ContentHeading className="text-xl">{children}</ContentHeading>,
    p: (props) => <p {...props} className="pt-2 text-zinc-600 dark:text-zinc-400" />,
    ul: (props) => (
        <ul {...props} className="flex list-disc flex-col gap-3 pb-4 pl-4">
            {props.children}
        </ul>
    ),
    li: (props) => (
        <li {...props} className="px-2">
            {props.children}
        </li>
    ),
    a: (props) => (
        <a {...props} className="text-sky-700 hover:underline dark:text-sky-500">
            {props.children}
        </a>
    ),
    blockquote: (props) => <Blockquote {...props}>{props.children}</Blockquote>,
    code: (props) => <CodeBlock {...props}>{props.children}</CodeBlock>,
    Divider: () => <Separator />,
    ContentHeading,
    Hero,
    PostImage,
    UpdatedAt,
};

export const CustomMDXRemote = (props: MDXRemoteProps) => {
    return (
        <MDXRemote
            {...props}
            components={{ ...COMPONENTS, ...(props.components || {}) }}
        />
    );
};
