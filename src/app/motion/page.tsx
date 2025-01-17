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
import Gestures from './Gestures';
import AnimatePresence from './AnimatePresence';
import Propagation from './Propagation';
import Scroll from './Scroll';

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
        title: 'Gestures',
        value: 'gestures',
        component: <Gestures />,
    },
    {
        title: 'Scroll',
        value: 'scroll',
        component: <Scroll />,
    },
    {
        title: 'AnimatePresence',
        value: 'animatePresence',
        component: <AnimatePresence />,
    },
    {
        title: 'Propagation',
        value: 'propagation',
        component: <Propagation />,
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

            <div className='px-4'>
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
