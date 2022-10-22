import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Image from 'next/future/image';

import useSWR from 'swr';

import { DownloadIcon, LinkIcon } from '@/components/Icons';
import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';
import Hero from '@/components/Hero';

interface IUrls {
  raw: string;
  regular: string;
}

interface IPhoto {
  id: string;
  urls: IUrls;
  links: {
    html: string;
    download: string;
  };
}

const title = `Photos`;
const description = `I like to feel nature and take that moment.`;

const Page: NextPageWithLayout = () => {
  const { data: photos } = useSWR<IPhoto[]>('/api/unsplash/photos', {
    revalidateOnFocus: false,
  });

  return (
    <ul className="relative left-1/2 right-1/2 -mx-[50vw] grid w-screen gap-2 px-2 [grid-template-columns:repeat(auto-fill,minmax(100%,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(440px,1fr))]">
      {photos?.map((photo) => {
        return (
          <li key={photo.id} className="group relative h-[700px] min-w-full sm:min-w-[440px]">
            <Image
              id={photo.id}
              alt={photo.id}
              className="h-full w-full rounded-md object-cover object-center"
              src={photo.urls.regular}
              width={1080}
              height={400}
            />
            <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between rounded-b-md bg-zinc-100 p-2 text-sm text-zinc-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-90 dark:bg-zinc-900 dark:text-zinc-400">
              <div>
                <span>Photo by </span>
                <ExternalLink
                  href="https://unsplash.com/@destroymayor"
                  className="underline hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  Jared Chen
                </ExternalLink>
                <span> / </span>
                <ExternalLink
                  href="https://unsplash.com"
                  className="underline hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  Unsplash
                </ExternalLink>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink
                  href={photo.links.html}
                  className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  <LinkIcon className="h-4 w-4" />
                  Link
                </ExternalLink>
                <span>·</span>
                <ExternalLink
                  href={photo.links.download}
                  download
                  className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download
                </ExternalLink>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      {page}
    </Container>
  );
};

export default Page;
