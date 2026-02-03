import { NextResponse } from 'next/server';
import { getTopTracks } from '@/domain';

export const dynamic = 'force-dynamic';

export async function GET() {
    const response = await getTopTracks();

    return NextResponse.json(response.data);
}
