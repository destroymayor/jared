'use client';

import { Fragment, useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const Skeleton = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [isLoading, setIsLoading] = useState(false);

    const list = [1,3,4,5];

    const variants: Variants = {
        loading: {
            opacity: [1, 0.8, 0],
            scale: [1, 0.9, 1],
            filter: ['blur(0px)', 'blur(10px)', 'blur(0px)'],
        },
        completed: {
            opacity: [1, 0.8, 1],
            scale: [1, 0.9, 0.9, 1],
            filter: 'blur(0px)',
            borderColor: 'rgba(0, 0, 0, 0)',
            boxShadow:
                '4px 4px 10px -3px rgb(0 0 0 / 0.3), 4px 4px 6px -4px rgb(0 0 0 / 0.3)',
        },
    };

    return (
        <div>
            <AnimatePresence>
                <div
                    className={cn(
                        'flex w-2/3 items-center justify-around gap-2 rounded-md',
                        'border border-neutral-100 bg-white',
                        'p-4'
                    )}
                >
                    {list.map((item, index) => (
                        <Fragment key={item}>
                            <motion.div
                                initial="hidden"
                                animate={isLoading ? null : ['loading', 'completed']}
                                variants={variants}
                                transition={{
                                    delay: 0.1 * index,
                                    duration: 0.4,
                                }}
                                className="flex h-8 flex-1 items-center justify-center rounded-md border border-neutral-300"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate={{
                                        filter: isLoading ? 'blur(10px)' : 'blur(0px)',
                                        opacity: isLoading ? 0 : [0, 0.8, 1],
                                    }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.4,
                                    }}
                                    className="text-neutral-900"
                                >
                                    {index + 1} {children}
                                </motion.div>
                            </motion.div>
                        </Fragment>
                    ))}
                </div>
            </AnimatePresence>

            <button className="pt-3" onClick={() => setIsLoading(!isLoading)}>
                {isLoading ? 'isLoading' : 'completed'}
            </button>
        </div>
    );
};

export default Skeleton;
