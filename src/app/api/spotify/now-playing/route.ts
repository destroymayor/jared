import { NextResponse } from 'next/server';
import { getNowPlaying } from '@/lib/spotify';

export const dynamic = 'force-static';

export async function GET() {
    const response = await getNowPlaying();

    return NextResponse.json(response.data);
}
