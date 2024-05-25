import { getUnsplashPhotos } from '@/lib/unsplash';
import { NextResponse } from 'next/server'

export async function GET() {
  const response = await getUnsplashPhotos()

  return NextResponse.json(response.data)
}
