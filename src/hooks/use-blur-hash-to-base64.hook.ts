import { decode } from 'blurhash';

interface BlurDataProps {
  blur_hash: string;
  width: number;
  height: number;
}

export default function useBlurhashToBase64() {
  const getBlurData = (cover: BlurDataProps, width: number = 40) => {
    const { blur_hash, width: originalWidth, height: originalHeight } = cover;
    const ratio = originalWidth / width;
    const height = Math.round(originalHeight / ratio);

    const pixels = decode(blur_hash, width, height, 0);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    const imageData: any = context?.createImageData(width, height);

    imageData?.data.set(pixels);
    context?.putImageData(imageData, 0, 0);

    return canvas.toDataURL();
  };

  return getBlurData;
}
