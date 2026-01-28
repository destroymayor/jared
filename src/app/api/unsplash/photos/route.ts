import { NextResponse } from 'next/server';
import { getUnsplashPhotos } from '@/lib/unsplash';

export const dynamic = 'force-dynamic';

export async function GET() {
    const response = await getUnsplashPhotos();

    return NextResponse.json(response.data);
}
