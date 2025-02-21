import { cn } from '@/lib/utils';

type StoryHeaderProps = {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    desc?: string;
    img?: string;
}

const StoryHeader = (props: StoryHeaderProps) => {
    const { children, className, title, desc, img } = props;

    return (
        <div
            className={cn(
                'relative flex h-[420px] w-full flex-col justify-end p-6',
                className
            )}
        >
            <img
                alt={title}
                src={img}
                className={cn('absolute inset-0 h-full w-full object-center')}
            />
            <div className="z-10">
                <div className="flex flex-col gap-2 pb-4">
                    <div className="text-2xl font-bold">{title}</div>
                    <div className="text-sm text-gray-500">{desc}</div>
                </div>

                {children}
            </div>
        </div>
    );
};

export default StoryHeader;
