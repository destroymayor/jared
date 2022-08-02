import { useRef } from 'react';

import useKeyPress from '@/hooks/use-key-press.hook';
import useOnClickOutside from '@/hooks/use-on-click-outside.hook';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';

import { useCommandPalette } from './CommandPaletteProvider';

import { AnimatePresence, motion } from 'framer-motion';
import { CommandIcon } from '@/components/Icons';

import Button from './Button';
import Backdrop from './Backdrop';
import CommandBreadcrumbs from './CommandBreadcrumbs';
import CommandSearch from './CommandSearch';
import CommandMenu from './CommandMenu';

export default function CommandPalette() {
  const containerRef = useRef(null);

  const { animationControls, isOpen, setIsOpen, resetCommandPaletteStatus } = useCommandPalette();

  useScrollDisabler(isOpen);
  useOnClickOutside(containerRef, () => resetCommandPaletteStatus());

  useKeyPress('Escape', () => resetCommandPaletteStatus());
  useKeyPress('KeyK', (event) => {
    if (event.metaKey || event.ctrlKey) {
      if (isOpen) {
        resetCommandPaletteStatus();
        return;
      }

      handleToggle();
    }
  });

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Button onClick={handleToggle}>
        <CommandIcon className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="bg-zinc-20 fixed inset-0 z-[999] overflow-y-auto pt-[10vh] md:px-4"
          >
            <Backdrop />
            <motion.div transition={{ duration: 0.2 }} animate={animationControls}>
              <motion.div
                ref={containerRef}
                transition={{ duration: 0.2 }}
                animate={{ scale: [1, 0.97, 1] }}
                className="relative mx-auto max-w-xl overflow-hidden rounded-lg border border-zinc-300 bg-white p-2 shadow-2xl ring-1 ring-black/5 dark:divide-zinc-600 dark:border-black/90 dark:bg-black/90"
              >
                <div className="flex flex-col gap-3 px-2 pt-1 pb-3">
                  <CommandBreadcrumbs />
                  <CommandSearch />
                </div>
                <div className="relative -left-2 block h-[1px] w-[calc(100%+16px)] bg-zinc-200 dark:bg-zinc-800" />
                <CommandMenu />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
