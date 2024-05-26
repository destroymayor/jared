import Image from 'next/image';

export default function PostImage(props: { src: string; alt: string }) {
    const { src, alt } = props;

    return (
        <div className="my-5 flex items-center justify-center">
            <Image {...props} className="rounded-lg" src={src} alt={alt} />
        </div>
    );
}
