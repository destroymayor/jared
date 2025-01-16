import Sandpack from './Sandpack';
import { sandpackCode } from './constants';

const code = `
import { motion } from 'framer-motion';
import Refresh from './Refresh';

export default function App() {

    return (
        <div className="p-4 flex h-screen justify-center items-center">
            <motion.div
                className="h-10 w-10 bg-red-500"
                drag
                whileHover={{
                  scale: 1.5,
                }}
                whileTap={{ scale: 0.9 }}
                whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
            ></motion.div>
        </div>
    )
}`;

export default function Gestures() {
    return (
        <div className="flex flex-col gap-4 pb-10">
            <ul className="list-disc pl-6">
                <li>whileHover</li>
                <li>whileTap</li>
                <li>whileDrag</li>
                <li>whileInView</li>
            </ul>
            <Sandpack
                files={{
                    '/App.js': code,
                    '/Refresh.js': sandpackCode['/Refresh.js'],
                }}
            />
        </div>
    );
}
