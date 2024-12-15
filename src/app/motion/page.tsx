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

import Collection from './Collection';

export default function Page() {

    const list = [
        {
            title: 'Component',
            component: <Component />,
        },
        {
            title: 'Transition',
            component: <Transition />,
        },
        {
            title: 'Keyframers',
            component: <Keyframers />,
        },
        {
            title: '(WIP) 手勢',
            component: null,
        },
        {
            title: '(WIP) Scroll',
            component: null,
        },
        {
            title: 'AnimatePresence',
            component: <AnimatePresence />,
        },
        {
            title: 'MotionValue',
            component: <MotionValue />,
        },
        {
            title: '(WIP)hooks',
            component: null,
        },
        {
            title: 'Collection',
            component: <Collection />,
        },
    ];
    return (
        <div className="flex flex-col gap-4 pt-10">
            <h1 className="text-2xl font-bold">motion 淺入淺出</h1>
            <p>
                Motion 是一個 JS/React 處理動畫 Library，之前是
                framer-motion，讓你可以直接在 React component props 中操作動畫。
            </p>

            <Accordion type='multiple'>
                {list.map((item) => (
                    <AccordionItem value={item.title} key={item.title} className='text-2xl'>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.component}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
