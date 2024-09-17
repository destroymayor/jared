import { NextResponse } from 'next/server';
import { getGithubUserContribution } from '@/lib/github';

export const dynamic = 'force-static';

export async function GET() {
    const response = await getGithubUserContribution();

    return NextResponse.json(response.data);
}
