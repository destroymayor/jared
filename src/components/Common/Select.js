import { useState, useRef, Fragment } from 'react';

import useOnClickOutside from '@/hooks/use-on-click-outside.hook';

import clsx from 'clsx';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

export default function Select(props) {
  const { disabled, options = [], value, renderItem, onChange, onFocus, onBlur } = props;
  const ref = useRef();

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
        disabled={disabled}
        className={clsx(
          'group flex w-5/12 items-center justify-between rounded-lg bg-zinc-200 px-3 py-2 text-zinc-600 focus:outline-none dark:bg-zinc-800 dark:text-zinc-300',
          `${disabled ? 'cursor-not-allowed text-zinc-300' : ''}`
        )}
        onClick={handleToggle}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <span className="truncate pr-2">{value === '' ? '請選擇' : value}</span>
        <span>
          {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
        </span>
      </button>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <ul className="absolute z-10 mt-1 max-h-56 w-5/12 overflow-auto rounded-lg bg-zinc-200 py-2 shadow-lg focus:outline-none dark:bg-zinc-800">
          {options.map((option, index) => (
            <li
              className="relative mx-2 flex cursor-pointer flex-wrap items-center rounded-lg px-1 py-2 text-sm hover:bg-zinc-300 hover:text-zinc-600 dark:hover:bg-zinc-600 dark:hover:text-zinc-200"
              key={`${index.toString()}`}
              onClick={() => handleSelect(option, index)}
            >
              {renderItem({ option })}
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
}
