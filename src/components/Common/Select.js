import { useState, useRef } from 'react';

import useOnClickOutside from '@/hooks/utils/use-on-click-outside';

import { ChevronUpIcon, ChevronDownIcon, XIcon } from '@heroicons/react/solid';

const Select = (props) => {
  const ref = useRef();
  const { className, options = [], value, renderItem, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  const handleSelect = (option, index) => {
    onChange(option, index);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        className={`group flex items-center justify-between rounded-md bg-gray-200 px-3 py-2 focus:outline-none dark:bg-gray-600 ${className}`}
        onClick={handleToggle}
      >
        <span className="truncate pr-2">{value}</span>
        <span className="text-gray-600 dark:text-gray-300">
          {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
        </span>
      </button>

      <ul
        className={`${
          isOpen ? 'visible' : 'invisible'
        } absolute z-10 mt-1 max-h-56 w-9/12 overflow-auto rounded-md bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-600`}
      >
        {options.map((option, index) => (
          <li
            className="relative mx-2 my-1 flex cursor-pointer flex-wrap items-center rounded-md py-2 pl-3 font-normal hover:bg-gray-300 dark:hover:bg-gray-500"
            key={`${index.toString()}`}
            onClick={() => handleSelect(option, index)}
          >
            {renderItem({ option })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
