'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import Component from './Component';
import Transition from './Transition';
import Keyframers from './Keyframers';
import AnimatePresence from './AnimatePresence';
import MotionValue from './MotionValue';

const list = [
    {
        title: 'Component',
        value: 'component',
        component: <Component />,
    },
    {
        title: 'Transition',
        value: 'transition',
        component: <Transition />,
    },
    {
        title: 'Keyframers',
        value: 'keyframers',
        component: <Keyframers />,
    },
    {
        title: '(WIP) 手勢',
        value: 'gesture',
        component: null,
    },
    {
        title: '(WIP) Scroll',
        value: 'scroll',
        component: null,
    },
    {
        title: 'AnimatePresence',
        value: 'animatePresence',
        component: <AnimatePresence />,
    },
    {
        title: '(WIP)Propagation',
        value: 'propagation',
        component: null,
    },
    {
        title: 'MotionValue',
        value: 'motionValue',
        component: <MotionValue />,
    },
    {
        title: '(WIP)hooks',
        value: 'hooks',
        component: null,
    },
];

export default function Page() {
    return (
        <div className="flex flex-col gap-4 pt-10">
            <h1 className="text-2xl font-bold">motion 淺入淺出</h1>
            <p>
                Motion 是一個 JS/React 處理動畫 Library，之前是
                framer-motion，讓你可以直接在 React component props 中操作動畫。
            </p>

            <div className='border rounded-md px-4'>
                <Accordion type="multiple" defaultValue={['component']}>
                    {list.map((item) => (
                        <AccordionItem
                            value={item.value}
                            key={item.title}
                            className="text-2xl"
                        >
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>{item.component}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
