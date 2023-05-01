import { NextResponse } from 'next/server';
import { getUnsplashStatistics } from '@/lib/unsplash';

export async function GET() {
  const response = await getUnsplashStatistics();

  return NextResponse.json(response.data);
}
