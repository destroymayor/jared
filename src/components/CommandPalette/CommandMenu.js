import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import useKeyPress from '@/hooks/use-key-press.hook';
import Tabs from '@/components/Tabs';

export default function CommandMenu(props) {
  const { options, onSelect } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (option) => onSelect(option);

  const getFlatOptions = options.map((item) => item.children).flat(1);

  const getTitleHeight = options.filter((item) => item.children.length > 0).length * 32;
  const getMenuHeight = getFlatOptions.length * 40;
  const getMenuContainerHeight = getTitleHeight + getMenuHeight;

  useKeyPress('ArrowUp', () => {
    if (activeIndex > 0) setActiveIndex((prevState) => prevState - 1);
  });

  useKeyPress('ArrowDown', () => {
    if (getFlatOptions.length - 1 > activeIndex) setActiveIndex((prevState) => prevState + 1);
  });

  if (getFlatOptions.length === 0) {
    return <p className="p-4 text-sm text-zinc-500">No results found.</p>;
  }

  return (
    <div
      className="relative overflow-y-auto transition-[height] duration-100 will-change-[height] [transition-timing-function:ease]"
      style={{ height: getMenuContainerHeight < 340 ? getMenuContainerHeight : 340 }}
    >
      <Tabs direction="vertical">
        {options.map((option) => (
          <Fragment key={option.title}>
            {option.children.length > 0 && (
              <>
                <span className="relative ml-2 flex h-7 items-center text-xs text-zinc-400">
                  {option.title}
                </span>
                {option.children.map((child) => {
                  const isSelected =
                    activeIndex === getFlatOptions.findIndex((item) => item.title === child.title);
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

CommandMenu.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
};
