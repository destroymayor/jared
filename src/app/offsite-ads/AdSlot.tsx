
import { cn } from '@/lib/utils';

type AdSlotProps = {
    className: string;
    height: number;
    width: number;
};

const AdSlot = (props: AdSlotProps) => {
    const { className, height, width } = props;

    return <div className={cn(className)} style={{ height, width }} />;
};

export default AdSlot;
