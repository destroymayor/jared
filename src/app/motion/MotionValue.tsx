import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function MotionValue() {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-200, 0, 100], [0, 1, 0]);

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 100 }}
            className="h-20 w-20 bg-red-500"
            style={{
                x,
                opacity,
            }}
        ></motion.div>
    );
}