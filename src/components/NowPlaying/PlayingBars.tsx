import { motion } from 'framer-motion';

const bars = [
    {
        animate: {
            scaleY: [1.0, 3, 1.8, 1.2, 1.0],
            translateY: ['0rem', '-0.082rem', '0rem'],
        },
        transition: {
            duration: 0.8,
            easings: 'easeInOut',
            repeat: Infinity,
        },
    },
    {
        animate: {
            scaleY: [1.0, 3, 1.0],
            translateY: ['0rem', '-0.083rem', '0rem'],
        },
        transition: {
            duration: 1,
            easings: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.2,
        },
    },
    {
        animate: {
            scaleY: [1.0, 1.2, 1.0],
            translateY: ['0rem', '0.37rem', '0rem'],
        },
        transition: {
            duration: 0.8,
            easings: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.2,
        },
    },
    {
        animate: {
            scaleY: [1.0, 3, 1.5, 1.0],
            translateY: ['0rem', '0.37rem', '0rem'],
        },
        transition: {
            duration: 0.75,
            easings: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.4,
        },
    },
];

export default function PlayingBars() {
    return (
        <div className="mb-[2px] flex w-auto items-end gap-[2px] overflow-hidden pt-2">
            {bars.map((bar, index) => (
                <motion.span
                    key={`${index}`}
                    animate={bar.animate}
                    transition={bar.transition}
                    className="h-2 w-[2px] bg-green-500 dark:bg-green-600"
                />
            ))}
        </div>
    );
}
