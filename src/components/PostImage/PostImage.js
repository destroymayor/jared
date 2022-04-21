import Image from 'next/image';

export default function PostImage(props) {
  return (
    <div className="my-5 flex items-center justify-center">
      <Image {...props} className="rounded-lg" alt="" />
    </div>
  );
}
