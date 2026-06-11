'use client';

import BlurFade from '@/components/ui/blur-fade';
import ClientTweetCard from '@/components/ui/client-tweet-card';

const TWEET_IDS = ['1550414849976451072', '1766049472918979069'];

export function TweetsViewController() {
    return (
        <div className="flex flex-col gap-y-4">
            {TWEET_IDS.map((tweet) => (
                <BlurFade inView key={tweet}>
                    <ClientTweetCard id={tweet} />
                </BlurFade>
            ))}
        </div>
    );
}
