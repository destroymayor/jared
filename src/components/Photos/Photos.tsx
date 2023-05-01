'use client';

import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { motion } from 'framer-motion';
import useBlurhashToBase64 from '@/hooks/use-blur-hash-to-base64.hook';

type PhotoType = {
  id: string;
  blur_hash: string;
  color: string;
  urls: {
    raw: string;
    regular: string;
  };
  links: {
    html: string;
    download: string;
  };
};

const photoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3 },
  },
};

export default function Photos() {
  const { data: photos } = useSWR<PhotoType[]>('/api/unsplash/photos', fetcher, {
    revalidateOnFocus: false,
  });

  const getBlurData = useBlurhashToBase64();

  return (
    <ul className="relative left-1/2 right-1/2 -ml-[49vw] -mr-[50vw] grid min-h-screen w-[97vw] gap-2 pt-4 [grid-template-columns:repeat(auto-fill,minmax(100%,1fr))] sm:px-2 sm:[grid-template-columns:repeat(auto-fill,minmax(440px,1fr))] md:w-[98vw]">
      {photos?.map((photo) => {
        const blurDataURL = getBlurData({ blur_hash: photo.blur_hash, width: 440, height: 700 });

        return (
          <motion.li
            key={photo.id}
            className="group relative h-[700px] min-w-full sm:min-w-[440px]"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            variants={photoVariants}
          >
            <Image
              id={photo.id}
              alt={photo.id}
              src={photo.urls.regular}
              placeholder="blur"
              blurDataURL={blurDataURL}
              unoptimized
              className="h-full w-full rounded-md object-cover object-center"
              width={1080}
              height={400}
            />
          </motion.li>
        );
      })}
    </ul>
  );
}
