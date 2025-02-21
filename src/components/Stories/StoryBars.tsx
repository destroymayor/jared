import React from 'react';
import { cn } from '@/lib/utils';
import { useStories } from './Provider';

import STYLE from './StoryBars.module.css';

type StoryBarProps = {
    completed: boolean;
    active: boolean;
    duration: number;
};

const StoryBar = (props: StoryBarProps) => {
    const { active, duration, completed } = props;

    return (
        <div className="relative h-1 flex-1 overflow-hidden rounded-sm bg-zinc-300">
            <div
                className={cn('absolute inset-0 h-full origin-left bg-blue-300')}
                style={{
                    transform: completed ? 'translateX(0)' : 'translateX(-100%)',
                    transition: active ? `transform ${duration}ms linear` : '',
                    ...(active && {
                        animation: `${STYLE.progress} ${duration}ms linear forwards`,
                    }),
                }}
            />
        </div>
    );
};

const StoryBars = (props: { clickable?: boolean }) => {
    const { currentStory, duration, total } = useStories();

    return (
        <div className="flex items-center justify-between gap-2">
            {[...Array(total)].map((_, index) => (
                <StoryBar
                    key={index}
                    active={index === currentStory}
                    completed={index < currentStory}
                    duration={duration}
                />
            ))}
        </div>
    );
};

export default StoryBars;
