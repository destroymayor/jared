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
        className={`flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-600 rounded-md focus:outline-none group ${className}`}
        onClick={handleToggle}
      >
        <span className="pr-2 truncate">{value}</span>
        <span className="text-gray-600 dark:text-gray-300">
          {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </span>
      </button>

      <ul
        className={`${
          isOpen ? 'visible' : 'invisible'
        } absolute z-10 w-9/12 py-1 mt-1 overflow-auto text-base bg-gray-200 rounded-md shadow-lg dark:bg-gray-600 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {options.map((option, index) => (
          <li
            className="relative flex flex-wrap items-center py-2 pl-3 mx-2 my-1 font-normal rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500"
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
