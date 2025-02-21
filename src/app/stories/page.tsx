'use client';

import { useEffect, useState } from 'react';

import Stories from '@/components/Stories';

const data = [
    {
        id: 1,
        name: 'test-1',
        desc: 'test-1-desc',
       img: 'https://images.unsplash.com/photo-1665910385646-97acf6fc3b42?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        name: 'test-2',
        desc: 'test-2-desc',
        img: 'https://images.unsplash.com/photo-1666372190022-cf1172e6dd42?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        name: 'test-3',
        desc: 'test-3-desc',
        img: 'https://images.unsplash.com/photo-1733212736638-73f4d088855e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        name: 'test-4',
        desc: 'test-4-desc',
         img: 'https://images.unsplash.com/photo-1733212426013-cb3459eded36?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);

    const [currentStory, setCurrentStory] = useState(0);

    useEffect(() => setHasMounted(true), []);

    const title = data.find((_, index) => index === currentStory)?.name;
    const desc = data.find((_, index) => index === currentStory)?.desc;
    const img = data.find((_, index) => index === currentStory)?.img;

    return (
        <>
            {/* <SDK />
            <div className="flex w-[480px] flex-col gap-6">
                <AdComponent hasMounted={hasMounted} adId="brand_square" />
                <AdComponent hasMounted={hasMounted} adId="brand_rectangle" />
                <AdComponent hasMounted={hasMounted} adId="listing_square" />
            </div> */}
            {hasMounted && (
                <>
                    <Stories
                        total={data.length}
                        onChange={(index) => setCurrentStory(index)}
                    >
                        <Stories.Header title={title} desc={desc} img={img}>
                            <Stories.Bars />
                        </Stories.Header>
                        <Stories.List>
                            {data.map((item, index) => (
                                <Stories.Item
                                    key={item.id}
                                    index={index}
                                    img={item.img}
                                    label={item.name}
                                    onClick={() => setCurrentStory(index)}
                                />
                            ))}
                        </Stories.List>
                        <Stories.Pagination onChange={(index) => setCurrentStory(index)} />
                    </Stories>
                </>
            )}
        </>
    );
}
