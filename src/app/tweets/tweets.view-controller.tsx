'use client';

import BlurFade from '@/components/ui/blur-fade';
import ClientTweetCard from '@/components/ui/client-tweet-card';
import { bind } from '@/utils/bind';
import { useTweetsViewModel } from './tweets.view-model';

type Props = ReturnType<typeof useTweetsViewModel>;

export function TweetsViewController({ tweets }: Props) {
    return (
        <div className="flex flex-col gap-y-4">
            {tweets.map((tweet) => (
                <BlurFade inView key={tweet}>
                    <ClientTweetCard id={tweet} />
                </BlurFade>
            ))}
        </div>
    );
}

export const TweetsBound = bind(TweetsViewController, useTweetsViewModel);
