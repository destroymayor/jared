import { NextResponse } from 'next/server';
import { getGithubUserContribution } from '@/domain';

export const dynamic = 'force-dynamic';

export async function GET() {
    const response = await getGithubUserContribution();

    return NextResponse.json(response.data);
}
