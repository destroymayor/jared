'use client';

import { Sandpack, } from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';

export default function SandpackComponent(props: { files: {
  [key: string]: string 
} }) {
    const { files } = props;
    return (
        <Sandpack
            template="react"
            theme={atomDark}
            options={{
                externalResources: ['https://cdn.tailwindcss.com'],
                editorHeight: 400,
                showLineNumbers: true,
                showInlineErrors: true,
                wrapContent: true,
            }}
            customSetup={{
                dependencies: {
                    'framer-motion': 'latest',
                },
            }}
            files={files}
        />
    );
}
