import { NextResponse } from 'next/server';
import { getNowPlaying } from '@/domain';

export const dynamic = 'force-dynamic';

export async function GET() {
    const response = await getNowPlaying();

    return NextResponse.json(response.data);
}
