'use client';

import { useRef } from 'react';

import useKeyPress from '@/hooks/use-key-press.hook';
import useOnClickOutside from '@/hooks/use-on-click-outside.hook';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';

import { useCommandPalette } from './context';

import { AnimatePresence, motion } from 'framer-motion';
import { Command } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Backdrop from './Backdrop';
import Breadcrumbs from './Breadcrumbs';
import SearchBar from './SearchBar';
import Menu from './Menu';

export default function CommandPalette() {
    const containerRef = useRef(null);

    const { animationControls, isOpen, setIsOpen, resetCommandPaletteStatus } =
        useCommandPalette();

    useScrollDisabler(isOpen);
    useOnClickOutside(containerRef, () => resetCommandPaletteStatus());

    useKeyPress('Escape', () => resetCommandPaletteStatus());
    useKeyPress('KeyK', (event) => {
        if (event.metaKey || event?.ctrlKey) {
            if (isOpen) {
                resetCommandPaletteStatus();
                return;
            }

            handleToggle();
        }
    });

    const handleToggle = () => setIsOpen((prevState: boolean) => !prevState);

    return (
        <>
            <Button
                size="icon"
                variant="ghost"
                onClick={handleToggle}
                className="flex h-10 w-10 items-center justify-center rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 focus:outline-none dark:hover:ring-zinc-600 dark:hover:bg-black"
                aria-label="Command palette"
            >
                <Command />
            </Button>

            <AnimatePresence mode="wait" initial={false}>
                {isOpen && (
                    <motion.div
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className="bg-zinc-20 fixed inset-0 z-[999] overflow-y-auto pt-[10vh] md:px-4"
                    >
                        <Backdrop />

                        <motion.div
                            transition={{ duration: 0.2 }}
                            animate={animationControls}
                        >
                            <motion.div
                                ref={containerRef}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: [1, 0.98, 1] }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="relative mx-auto max-w-xl overflow-hidden rounded-lg border border-zinc-300 bg-white p-2 shadow-2xl ring-1 ring-black/5 dark:divide-zinc-600 dark:border-black/90 dark:bg-black/90"
                            >
                                <div className="flex flex-col gap-3 p-2">
                                    <Breadcrumbs />
                                    <SearchBar />
                                </div>
                                <div className="relative -left-2 block h-[1px] w-[calc(100%+16px)] bg-zinc-200 dark:bg-zinc-800" />
                                <Menu />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
