import { NextResponse } from 'next/server'
import { getUnsplashStatistics } from '@/lib/unsplash'

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await getUnsplashStatistics()

  return NextResponse.json(response.data)
}
