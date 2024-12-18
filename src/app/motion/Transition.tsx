import Sandpack from './Sandpack';

const files = {
    'App.js': `import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from './Input';

export default function App() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    const [type, setType] = useState('spring');

    return (
        <div>
            <div className="flex flex-col gap-4">
                <Input value={x} set={setX}>
                    x
                </Input>
                <Input value={y} set={setY}>
                    y
                </Input>
                <Input value={rotate} set={setRotate} min={-180} max={180}>
                    rotate
                </Input>
                <div>transition type: {type}</div>
                <div className="flex gap-2">
                    <button onClick={() => setType('tween')}>tween</button>
                    <button onClick={() => setType('spring')}>spring</button>
                </div>
            </div>
                <div>
                    <motion.div
                        className="h-20 w-20 rounded-md border-2 border-red-500"
                        animate={{ x, y, rotate }}
                        transition={{ type }}
                    />
                </div>
        </div>
    );
}`,
    'Input.js': `export default function Input({ value, children, set, min = -200, max = 200 }) {
    return (
        <label className='flex items-center gap-2'>
            <code className='w-20'>{children}</code>
            <input
              className='accent-red-500'
                value={value}
                type="range"
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value))}
            />
            <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value) || 0)}
            />
        </label>
    );
}`,
};

export default function Transition() {
    return (
        <div className="flex flex-col gap-4 pb-10">
            <ul className="list-disc pl-6">
                <li>transition 可以設定元件的動畫類型，可以客製化 transition 的數值</li>
            </ul>
            <Sandpack files={files} />
        </div>
    );
}
