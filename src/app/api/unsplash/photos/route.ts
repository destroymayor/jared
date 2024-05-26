import { getUnsplashPhotos } from '@/lib/unsplash';
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await getUnsplashPhotos()

  return NextResponse.json(response.data)
}
