import { Fragment } from 'react';

import useKeyPress from '@/hooks/use-key-press.hook';
import Spinner from '@/components/Spinner';
import Tabs from '@/components/Tabs';

import { OptionChildrenProps } from './types';
import { useCommandPalette } from './context';

const LIST_SELECTOR: string = `command-palette-item-select`;

export default function Menu() {
  const { isLoading, filterOptions, selectedIndex, setSelectedIndex } = useCommandPalette();

  const getFlatOptions = filterOptions.map((item) => item.children).flat(1);

  useKeyPress('ArrowUp', () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prevState: number) => {
        handleCommandItemScrollIntoView(prevState - 1);

        return prevState - 1;
      });
    }
  });

  useKeyPress('ArrowDown', () => {
    if (getFlatOptions.length - 1 > selectedIndex) {
      setSelectedIndex((prevState: number) => {
        handleCommandItemScrollIntoView(prevState + 1);

        return prevState + 1;
      });
    }
  });

  useKeyPress('Enter', () => {
    getFlatOptions.find((item, index) => selectedIndex === index)?.click();
  });

  const handleCommandItemScrollIntoView = (index: number) => {
    const getCommandPaletteItemElement = document.getElementById(`${LIST_SELECTOR}-${index}`);

    return getCommandPaletteItemElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  const handleTabSelect = (option: OptionChildrenProps) => option.click();

  const handleMouseEnter = (e: { target: HTMLElement }) => {
    setSelectedIndex(
      getFlatOptions.findIndex((item: { title: string }) => item.title === e.target.innerText)
    );
  };

  const getCommandItemHeight =
    filterOptions?.filter((item) => item.children.length > 0).length * 36;
  const getMenuHeight = getFlatOptions.length * 40;
  const getMenuContainerHeight = getCommandItemHeight + getMenuHeight;

  if (isLoading) {
    return (
      <p className="p-4 text-sm text-zinc-500">
        <Spinner className="h-6 w-6" />
      </p>
    );
  }

  if (getFlatOptions.length === 0) {
    return <p className="p-4 text-sm text-zinc-500">No results found.</p>;
  }

  return (
    <div
      className="relative my-1 overflow-y-auto transition-[height] duration-100 will-change-[height] [transition-timing-function:ease]"
      style={{ height: getMenuContainerHeight < 340 ? getMenuContainerHeight : 340 }}
    >
      <Tabs direction="vertical">
        {filterOptions.map((option) => (
          <Fragment key={option.title}>
            {option.children.length > 0 && option.title && (
              <span className="relative ml-2 flex h-7 items-center text-xs text-zinc-400">
                {option.title}
              </span>
            )}

            {option.children.map((child) => {
              const getChildIndex = getFlatOptions.findIndex((item) => item.title === child.title);
              return (
                <Tabs.Tab
                  id={`${LIST_SELECTOR}-${getChildIndex}`}
                  key={child.title}
                  name={child.title}
                  selected={selectedIndex}
                  index={getChildIndex}
                  onClick={() => handleTabSelect(child)}
                  onMouseEnter={handleMouseEnter}
                >
                  <div className="flex items-center gap-3 p-3 text-zinc-600 transition-colors duration-200 ease-in-out hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white">
                    <span className="h-5 w-5">{child.icon}</span>
                    <span>{child.title}</span>
                  </div>
                </Tabs.Tab>
              );
            })}
          </Fragment>
        ))}
      </Tabs>
    </div>
  );
}
