import { Separator } from '@/components/ui/separator';

type HeroProps = {
    title: string;
    description: string;
};

export default function Hero(props: HeroProps) {
    const { title, description } = props;
    return (
        <div className="pt-2 md:pt-8">
            <h1 className="py-2 text-4xl font-extrabold">{title}</h1>
            <p className="max-w-[60ch] pt-2 dark:text-zinc-400">{description}</p>
            <Separator />
        </div>
    );
}
