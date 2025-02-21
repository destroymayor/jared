import React, {useEffect}from 'react';
import { cn } from '@/lib/utils';

import Provider, { useStories } from './Provider';
import StoryHeader from './StoryHeader';
import StoryBars from './StoryBars';
import StoryList, { StoryItem } from './StoryList';
import Pagination from './Pagination';

type StoriesProps = {
    children: React.ReactNode;
    className?: string;
    autoPlay?: boolean;
    total: number;
    duration?: number;
    onChange: (index: number) => void;
}

const StoriesStoreProvider = (props: StoriesProps) => {
    const { total = 0, duration = 2000 } = props;

    return (
        <Provider initialState={{ total, duration }}>
            <Stories {...props} />
        </Provider>
    );
};

const Stories = (props: StoriesProps) => {
    const { children, className, onChange } = props;
    
    const { currentStory, total, duration, setCurrentStory } = useStories();

    const handleStoryChange = (newStory: number) => {
        // if (clickable) {
        setCurrentStory(newStory);
        onChange(newStory);
        // }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (total > 0) {
            timer = setTimeout(() => {
                const nextStory = currentStory >= total - 1 ? 0 : currentStory + 1;
                handleStoryChange(nextStory);
            }, duration);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [total, currentStory]);

    return (
        <div className={cn('flex w-[355px] flex-col gap-2', className)}>
            {children}
        </div>
    );
};

StoriesStoreProvider.Header = StoryHeader;
StoriesStoreProvider.Bars = StoryBars;
StoriesStoreProvider.List = StoryList;
StoriesStoreProvider.Item = StoryItem;
StoriesStoreProvider.Pagination = Pagination;

export default StoriesStoreProvider;
