'use client';

import { motion } from 'framer-motion';

import Layout from './Layout';
export default function Component() {
    return (
        <Layout>
            <Layout.Description>
                <ul className="list-disc">
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
            </Layout.Description>

            <Layout.Content>
                <motion.div
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
            </Layout.Content>
        </Layout>
    );
}
