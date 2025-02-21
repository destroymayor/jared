import { cn } from '@/lib/utils';
import { useStories } from './Provider';

type PaginationProps = {
    onChange: (index: number) => void;
};

const Pagination = (props: PaginationProps) => {
    const { onChange } = props;
    const { currentStory, total, setCurrentStory } = useStories();

    const handleClick = (index: number) => {
        setCurrentStory(index);
        onChange(index);
    };

    return (
        <div className="inline-flex items-center justify-center gap-2 rounded-full p-2">
            {[...Array(total)].map((_, index) => (
                <div
                    key={index}
                    className={cn(
                        'inline-block h-2 w-2 cursor-pointer rounded-full border-none bg-zinc-500 p-0 transition-[background-color] duration-[300ms] ease-in-out',
                        {
                            'bg-zinc-100': currentStory === index,
                        }
                    )}
                    onClick={() => handleClick(index)}
                ></div>
            ))}
        </div>
    );
};

export default Pagination;
