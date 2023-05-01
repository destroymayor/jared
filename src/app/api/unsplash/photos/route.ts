import { NextResponse } from 'next/server';
import { getUnsplashPhotos } from '@/lib/unsplash';

export async function GET() {
  const response = await getUnsplashPhotos();

  return NextResponse.json(response.data);
}
