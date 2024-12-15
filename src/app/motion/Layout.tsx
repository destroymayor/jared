'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

import Refresh from './Refresh';

const Description = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
};

const Content = ({
    children,
    className,
    withRefresh = true,
}: {
    children: React.ReactNode;
    className?: string;
    withRefresh?: boolean;
}) => {
    const [count, setCount] = useState(0);

    return (
        <div className="pt-8 flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <span className="text-xl">DEMO</span>
                {withRefresh && <Refresh onClick={() => setCount(count + 1)} />}
            </div>
            <div className={className} key={count}>
                {children}
            </div>
        </div>
    );
};

export default function Layout(props: {
    children: React.ReactNode;
}) {
    const { children } = props;

    return (
        <div className='p-4'>
            {children}
        </div>
    );
}

Layout.Description = Description;
Layout.Content = Content;
