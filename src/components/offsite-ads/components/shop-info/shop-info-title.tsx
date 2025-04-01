import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const ShopInfoTitle = ({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                'line-clamp-1 truncate text-sm leading-[1.4em] inline-block font-medium text-[#39393E]',
                className
            )}
        >
            {children}
        </p>
    );
};

export default ShopInfoTitle;
