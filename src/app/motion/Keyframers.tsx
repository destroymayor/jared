import Sandpack from './Sandpack';

const code = `import { motion } from 'framer-motion';
export default function App() {

    return (
        <div className="grid place-items-center h-screen">
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
            />
        </div>
    )
}
`;

export default function Keyframers() {
    return (
        <div className="flex flex-col gap-4 pb-10">
            <Sandpack
                files={{
                    '/App.js': code,
                }}
            />
        </div>
    );
}
