'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import ShopInfoImage from './shop-image';
import ShopInfoTitle from './shop-info-title';
import ShopInfoAction from './shop-info-action';
import Rating from '../rating';

const ShopInfo = ({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) => {
    return <div className={cn('flex items-center gap-2 overflow-hidden', className)}>{children}</div>;
};

ShopInfo.Image = ShopInfoImage;
ShopInfo.Title = ShopInfoTitle;
ShopInfo.Rating = Rating;
ShopInfo.Action = ShopInfoAction;

export default ShopInfo;
