import Image from 'next/future/image';

export default function PostImage(props) {
  const { alt } = props;

  return (
    <div className="my-5 flex items-center justify-center">
      <Image {...props} className="rounded-lg" alt={alt} />
    </div>
  );
}
