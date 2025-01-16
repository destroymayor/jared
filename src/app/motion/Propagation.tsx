import Sandpack from './Sandpack';
import { sandpackCode } from './constants';

const code = `import { useState } from 'react';
import { motion } from 'framer-motion';
import Refresh from './Refresh';

export default function App() {
      const [count, setCount] = useState(0);

      const list = {
          visible: {
              opacity: 1,
              transition: {
                  when: 'beforeChildren',
                  staggerChildren: 0.5,
              },
          },
          hidden: {
              opacity: 0,
              transition: {
                  when: 'afterChildren',
              },
          },
      };

      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }


    return (
        <div className="p-4 flex flex-col h-screen">
            <Refresh onClick={() => {setCount(count + 1)}} />
            <motion.ul
                key={count}
                className="flex flex-col gap-2 pt-10"
                initial="hidden"
                whileInView="visible"
                variants={list}
              >
                <motion.li variants={item} className="bg-slate-400">1</motion.li>
                <motion.li variants={item} className="bg-slate-400">2</motion.li>
                <motion.li variants={item} className="bg-slate-400">3</motion.li>
              </motion.ul>
        </div>
    )
}`;

export default function Propagation() {
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
