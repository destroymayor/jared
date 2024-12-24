import Sandpack from './Sandpack';
import { sandpackCode } from './constants';

const code = `import { useState } from 'react';
import { motion } from 'framer-motion';
import Refresh from './Refresh';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="p-4">
            <Refresh onClick={() => {setCount(count + 1)}} />
            <motion.div
                key={count}
                className="h-10 w-10 bg-red-500"
                initial={{
                    x: 0,
                    opacity: 0,
                }}
                animate={{
                    x: 100,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
            ></motion.div>
        </div>
    )
}`;

export default function Component() {
    return (
        <div className="flex flex-col gap-4 pb-10">
            <ul className="list-disc pl-6">
                <li>
                    透過 motion[HTML Tag] 取代 HTML Tag 來使用 motion - 透過 animate
                    可以設定 style 來執行動畫
                </li>
                <li>x = translateX，會在元件載入時執行 translateX = 100</li>
                <li>
                    motion 已經有預設的 transition(duration, delay...)，也可以客製化
                    transtition 的數值
                </li>
                <li>initial 可以設定元件的初始狀態</li>
                <li>Variants 可以透過物件方式設定元件的動畫</li>
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
