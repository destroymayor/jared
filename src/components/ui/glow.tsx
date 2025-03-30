import React from 'react';
import { cn } from '@/lib/utils';

const Glow = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'animate-appear-zoom absolute -top-[128px] z-10 w-full [animation-delay:1s]',
            className
        )}
        {...props}
    >
        <div
            className={cn(
                'absolute left-1/2 h-[256px] w-[60%] scale-[2.5] rounded-[50%] sm:h-[512px]',
                'bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)]',
                '-translate-x-1/2 -translate-y-1/3',
            )}
        />
        <div
            className={cn(
                'absolute left-1/2 h-[128px] w-[40%] scale-[2] rounded-[50%] sm:h-[256px]',
                'bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)]',
                '-translate-x-1/2 -translate-y-1/3'
            )}
        />
    </div>
);

export default Glow;
