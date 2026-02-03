'use client';

import Giscus from './Giscus';
import { bind } from '@/utils/bind';
import { useGuestbookViewModel } from './guestbook.view-model';

type Props = ReturnType<typeof useGuestbookViewModel>;

export function GuestbookViewController({ giscusConfig }: Props) {
    return (
        <div className="min-h-[600px]">
            <Giscus {...giscusConfig} />
        </div>
    );
}

export const GuestbookBound = bind(GuestbookViewController, useGuestbookViewModel);
