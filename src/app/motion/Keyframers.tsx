import { motion } from 'framer-motion';

import Layout from './Layout';

export default function Keyframers() {
    return (
        <Layout>
            <motion.div
                className="h-10 w-10 bg-red-500"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                    transition: {
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                }}
            ></motion.div>
        </Layout>
    );
}
