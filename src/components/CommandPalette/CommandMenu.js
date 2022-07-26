import { Fragment } from 'react';

import { useCommandPalette } from './CommandPaletteProvider';

import useKeyPress from '@/hooks/use-key-press.hook';
import Tabs from '@/components/Tabs';

export default function CommandMenu() {
  const { filterOptions, selected, setIsOpen, setSelected, setSearchTerm } = useCommandPalette();
  const getFlatOptions = filterOptions.map((item) => item.children).flat(1);

  useKeyPress('ArrowUp', () => {
    if (selected > 0) setSelected((prevState) => prevState - 1);
  });

  useKeyPress('ArrowDown', () => {
    if (getFlatOptions.length - 1 > selected) setSelected((prevState) => prevState + 1);
  });

  useKeyPress('Enter', () => {
    getFlatOptions.find((item, index) => selected === index)?.click();
    setIsOpen(false);
    setSearchTerm('');
    setSelected(0);
  });

  const handleSelect = (option) => {
    option.click();
    setSearchTerm('');
    setIsOpen(false);
  };

  const getTitleHeight = filterOptions.filter((item) => item.children.length > 0).length * 32;
  const getMenuHeight = getFlatOptions.length * 40;
  const getMenuContainerHeight = getTitleHeight + getMenuHeight;

  if (getFlatOptions.length === 0) {
    return <p className="p-4 text-sm text-zinc-500">No results found.</p>;
  }

  return (
    <div
      className="relative overflow-y-auto transition-[height] duration-100 will-change-[height] [transition-timing-function:ease]"
      style={{ height: getMenuContainerHeight < 340 ? getMenuContainerHeight : 340 }}
    >
      <Tabs direction="vertical">
        {filterOptions.map((option) => (
          <Fragment key={option.title}>
            {option.children.length > 0 && (
              <>
                <span className="relative ml-2 flex h-7 items-center text-xs text-zinc-400">
                  {option.title}
                </span>
                {option.children.map((child) => {
                  const isSelected =
                    selected === getFlatOptions.findIndex((item) => item.title === child.title);
                  const getChildIndex = getFlatOptions.findIndex(
                    (item) => item.title === child.title
                  );

                  return (
                    <Tabs.Tab
                      key={child.title}
                      name={child.title}
                      icon={child.icon}
                      selected={isSelected}
                      index={getChildIndex}
                      onClick={() => handleSelect(child)}
                    >
                      {child.title}
                    </Tabs.Tab>
                  );
                })}
              </>
            )}
          </Fragment>
        ))}
      </Tabs>
    </div>
  );
}
