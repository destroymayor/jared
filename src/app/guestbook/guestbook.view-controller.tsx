'use client';

import Giscus from './Giscus';

const giscusConfig = {
    repo: 'destroymayor/guestbook' as const,
    repoId: 'R_kgDOHwPSeA',
    category: 'General',
    categoryId: 'DIC_kwDOHwPSeM4CQkUo',
    mapping: 'title',
};

export function GuestbookViewController() {
    return (
        <div className="min-h-[600px]">
            <Giscus {...giscusConfig} />
        </div>
    );
}
