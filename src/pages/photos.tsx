import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Image from 'next/image';

import useSWR from 'swr';
import { motion } from 'framer-motion';
import useBlurhashToBase64 from '@/hooks/use-blur-hash-to-base64.hook';

import Container from '@/components/Container';

interface IUrls {
  raw: string;
  regular: string;
}

interface IPhoto {
  id: string;
  blur_hash: string;
  color: string;
  urls: IUrls;
  links: {
    html: string;
    download: string;
  };
}

const photoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3 },
  },
};

const title = `Photos`;

const Page: NextPageWithLayout = () => {
  const { data: photos } = useSWR<IPhoto[]>('/api/unsplash/photos', {
    revalidateOnFocus: false,
  });

  const getBlurData = useBlurhashToBase64();

  return (
    <ul className="relative left-1/2 right-1/2 -mr-[50vw] -ml-[49vw] grid min-h-screen w-[97vw] gap-2 pt-4 [grid-template-columns:repeat(auto-fill,minmax(100%,1fr))] sm:px-2 sm:[grid-template-columns:repeat(auto-fill,minmax(440px,1fr))] md:w-[98vw]">
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
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Container title={title}>{page}</Container>;
};

export default Page;
