import { cn } from '@/lib/utils';

const ShopInfoImage = ({
    src,
    alt,
    className = '',
}: {
    src: string;
    alt: string;
    className?: string;
}) => (
    <div className={cn('relative aspect-square w-full h-full overflow-hidden', className)}>
        <img src={src} alt={alt} className="object-cover" />
    </div>
);

export default ShopInfoImage;
