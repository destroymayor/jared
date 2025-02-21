import { cn } from '@/lib/utils';
import { useStories } from './Provider';

type StoryListProps = {
    children?: React.ReactNode;
    className?: string;
}

const StoryList = (props: StoryListProps) => {
    const { children, className } = props;

    return <div className={cn('flex gap-2', className)}>{children}</div>;
};

type StoryItemProps = StoryListProps & {
    index: number;
    img: string;
    label: string;
    onClick?: (index: number) => void;
};

export const StoryItem = (props: StoryItemProps) => {
    const { children, className, index, img, label, onClick } = props;
    const { setCurrentStory } = useStories();

    const handleClick = () => {
        setCurrentStory(index);
        onClick?.(index);
    }

    return (
        <div
            className={cn(
                'flex h-[120px] flex-1 cursor-pointer items-center justify-center',
                className
            )}
            onClick={handleClick}
        >
            <img
                alt={label}
                src={img}
                className={cn('h-full max-h-full w-full object-center')}
            />
            {children}
        </div>
    );
};

export default StoryList;
