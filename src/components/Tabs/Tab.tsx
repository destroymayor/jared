'use client';

import React, { useEffect, useContext, useRef, ReactNode, MouseEvent } from 'react';

import { TabsContext } from './Tabs';

interface ITab {
  id?: string;
  name?: string;
  selected?: number;
  index?: number;
  onClick?: () => void;
  onMouseEnter?: (event: MouseEvent) => void;
  children: ReactNode;
}

export default function Tab(props: ITab) {
  const { name, selected = 0, index, children, onClick, onMouseEnter } = props;

  const { repositionHighlight } = useContext(TabsContext);
  const tabRef = useRef<DOMRect | any>(null);

  const handleClick = () => {
    onClick?.();
  };

  const handleMouseEnter = (event: MouseEvent) => {
    const node = event.target as HTMLElement;
    repositionHighlight(node.getBoundingClientRect(), name);
    onMouseEnter?.(event);
  };

  useEffect(() => {
    const tabNode = tabRef.current;
    if (selected === index && tabNode) {
      repositionHighlight(tabNode.getBoundingClientRect(), name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, index, name]);

  return (
    <li
      {...props}
      ref={tabRef}
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}
