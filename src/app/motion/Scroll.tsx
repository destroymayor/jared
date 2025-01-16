import Sandpack from './Sandpack';
import { sandpackCode } from './constants';

const code = `import { useState } from 'react';
import { motion } from 'framer-motion';
import Refresh from './Refresh';

export default function App() {

    return (
        <div className="p-4 flex flex-col">
            <div className="bg-slate-100 h-[1000px]">
                <div className="h-[500px]" />
                <div className="flex gap-4">
                    <motion.div
                    className="w-20 h-20 bg-red-500"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1 }}
                  >
                  </motion.div>
                  <motion.div
                    className="w-20 h-20 bg-blue-500"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    whileInView={{ opacity: 1 }}
                  >
                  </motion.div>
                  <motion.div
                    className="w-20 h-20 bg-green-500"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    whileInView={{ opacity: 1 }}
                  >
                  </motion.div>
                </div>
              </div>
        </div>
    )
}`;

export default function Scroll() {
    return (
        <div className="flex flex-col gap-4 pb-10">
            <Sandpack
                files={{
                    '/App.js': code,
                    '/Refresh.js': sandpackCode['/Refresh.js'],
                }}
            />
        </div>
    );
}
