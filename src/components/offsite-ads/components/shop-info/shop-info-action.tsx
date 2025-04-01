import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const ShopInfoAction = ({
    children,
    className = '',
}: {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}) => {
    return (
        <button
            className={cn(
                'flex items-center justify-center rounded border border-[#10567B] bg-[#10567B] p-1 text-sm font-medium tracking-[0.07em] text-white transition-colors hover:bg-[#0D4562]',
                'w-[87px]',
                className
            )}
        >
            {children}
        </button>
    );
};

export default ShopInfoAction;
