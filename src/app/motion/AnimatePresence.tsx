import Sandpack from './Sandpack';
import { sandpackCode } from './constants';

const code = `
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';

const variants = {
    open: {
        opacity: 1,
        scale: 1,
    },
    closed: {
        opacity: 0,
        scale: 1.1,
    },
};

export default function App() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="p-4">
            <Button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Open'}
            </Button>
            <div className="flex flex-col gap-10 pt-10">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="grid h-20 items-center bg-red-500 p-2"
                            initial={variants.closed}
                            animate={isOpen ? variants.open : variants.closed}
                            exit={variants.closed}
                            variants={variants}
                        >
                            with AnimatePresence
                        </motion.div>
                    )}
                </AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="grid h-20 items-center bg-red-500 p-2"
                        initial={variants.closed}
                        animate={isOpen ? variants.open : variants.closed}
                        exit={variants.closed}
                        variants={variants}
                    >
                        without AnimatePresence
                    </motion.div>
                )}
            </div>
        </div>
    )
}
`;

export default function AnimatePresenceExample() {
    return (
        <div className="flex flex-col gap-4 pb-10">
            <Sandpack
                files={{
                    '/App.js': code,
                    '/Button.js': sandpackCode['/Button.js'],
                }}
            />
        </div>
    );
}
