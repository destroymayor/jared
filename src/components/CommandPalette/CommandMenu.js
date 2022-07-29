import { Fragment } from 'react';

import { useCommandPalette } from './CommandPaletteProvider';

import useKeyPress from '@/hooks/use-key-press.hook';
import Tabs from '@/components/Tabs';

export default function CommandMenu() {
  const { filterOptions, selectedIndex, setSelectedIndex } = useCommandPalette();

  const getFlatOptions = filterOptions.map((item) => item.children).flat(1);

  useKeyPress('ArrowUp', () => {
    if (selectedIndex > 0) setSelectedIndex((prevState) => prevState - 1);
  });

  useKeyPress('ArrowDown', () => {
    if (getFlatOptions.length - 1 > selectedIndex) setSelectedIndex((prevState) => prevState + 1);
  });

  useKeyPress('Enter', () => {
    getFlatOptions.find((item, index) => selectedIndex === index).click();
  });

  const handleTabSelect = (option) => option.click();

  const handleMouseEnter = (e) => {
    setSelectedIndex(getFlatOptions.findIndex((item) => item.title === e.target.innerText));
  };

  const getTitleHeight = filterOptions?.filter((item) => item?.children?.length > 0)?.length * 36;
  const getMenuHeight = getFlatOptions?.length * 40;
  const getMenuContainerHeight = getTitleHeight + getMenuHeight;

  if (getFlatOptions.length === 0) {
    return <p className="p-4 text-sm text-zinc-500">No results found.</p>;
  }

  return (
    <div
      className="relative overflow-y-auto py-1 transition-[height] duration-100 will-change-[height] [transition-timing-function:ease]"
      style={{ height: getMenuContainerHeight < 340 ? getMenuContainerHeight : 340 }}
    >
      <Tabs direction="vertical">
        {filterOptions.map((option) => (
          <Fragment key={option.title}>
            {option?.children?.length > 0 && option?.title && (
              <span className="relative ml-2 flex h-7 items-center text-xs text-zinc-400">
                {option.title}
              </span>
            )}

            {option?.children?.map((child) => (
              <Tabs.Tab
                key={child.title}
                name={child.title}
                selected={selectedIndex}
                index={getFlatOptions.findIndex((item) => item.title === child.title)}
                onClick={() => handleTabSelect(child)}
                onMouseEnter={handleMouseEnter}
              >
                <div className="flex items-center gap-3 p-2 text-zinc-600 transition-colors duration-200 ease-in-out hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white">
                  <span className="min-h-[20px] min-w-[20px]">{child.icon}</span>
                  <span>{child.title}</span>
                </div>
              </Tabs.Tab>
            ))}
          </Fragment>
        ))}
      </Tabs>
    </div>
  );
}
