'use client';

import AdComponent from './AdComponent';

import SDK from './SDK';

export default function Page() {
    return (
        <>
            <SDK />
            <div className="flex w-[480px] flex-col gap-6">
                <AdComponent className="panel-top-container" />
                <AdComponent className="below-search-container" />
                {/* <AdComponent className="post-inside-container" /> */}
            </div>
        </>
    );
}
