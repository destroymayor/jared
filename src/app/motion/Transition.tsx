import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import Layout from './Layout';

interface InputProps {
    children: string;
    value: number;
    set: (newValue: number) => void;
    min?: number;
    max?: number;
}

export function Input({ value, children, set, min = -200, max = 200 }: InputProps) {
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
}

export default function Transition() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    const [type, setType] = useState('spring');

    return (
        <Layout>
            <Layout.Description>
                <ul className="list-disc">
                    <li>
                        transition 可以設定元件的動畫類型，可以客製化 transition 的數值
                    </li>
                </ul>
            </Layout.Description>
            <Layout.Content>
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
                        <Button onClick={() => setType('tween')}>tween</Button>
                        <Button onClick={() => setType('spring')}>spring</Button>
                    </div>
                </div>
                <div>
                    <motion.div
                        className="h-20 w-20 rounded-md border-2 border-red-500"
                        animate={{ x, y, rotate }}
                        transition={{ type }}
                    />
                </div>
            </Layout.Content>
        </Layout>
    );
}
