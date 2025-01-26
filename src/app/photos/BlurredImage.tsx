'use client';

import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import { cn } from '@/lib/utils';

import useImageLoadedState from './useImageLoadedState';

export interface ImageProps extends Omit<NextImageProps, 'src' | 'priority'> {
    src: string;
}

const BlurredImage = (props: ImageProps) => {
    const { alt, src, loading = 'lazy', style, className, ...rest } = props;
    const [loaded, onLoad] = useImageLoadedState(src);

    return (
        <div
            className={cn(
                'mx-auto w-fit',
                'overflow-hidden',
                !loaded && 'animate-pulse [animation-duration:4s]',
                className
            )}
        >
            <NextImage
                className={cn(
                    '[transition:filter_500ms_cubic-bezier(.4,0,.2,1)]',
                    'h-full max-h-full w-full object-center',
                    'my-0',
                    loaded ? 'blur-0' : 'blur-xl'
                )}
                src={src}
                alt={alt}
                style={{ objectFit: 'cover', ...style }}
                loading={loading}
                priority={loading === 'eager'}
                quality={100}
                onLoad={onLoad}
                {...rest}
            />
        </div>
    );
};

export default BlurredImage;
