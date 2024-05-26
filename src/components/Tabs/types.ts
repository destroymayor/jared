import React, { MouseEvent } from 'react';

export type TabsType = {
    direction?: 'horizontal' | 'vertical';
    shouldResetHighlight?: boolean;
    className?: string;
    children: React.ReactNode;
};

export type TabType = {
    id?: string;
    name?: string;
    selected?: number;
    index?: number;
    onClick?: () => void;
    onMouseEnter?: (event: MouseEvent) => void;
    children: React.ReactNode;
};
