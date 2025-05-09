import BlurFade from '@/components/magicui/blur-fade';
import ClientTweetCard from '@/components/magicui/client-tweet-card';

const tweets = ['1550414849976451072', '1766049472918979069'];

export default function Page() {
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
