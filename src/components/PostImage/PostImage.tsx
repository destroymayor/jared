import Image from 'next/future/image';

type Props = {
  src: string;
  alt: string;
};

export default function PostImage(props: Props) {
  const { src, alt } = props;

  return (
    <div className="my-5 flex items-center justify-center">
      <Image {...props} className="rounded-lg" src={src} alt={alt} />
    </div>
  );
}
