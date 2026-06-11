import { NextResponse } from 'next/server';
import type { Endpoint } from './types';

/** Route-handler factory: `export const GET = integrationRoute(endpoint)`. */
export function integrationRoute<TData>(endpoint: Endpoint<TData>) {
    return async function GET(): Promise<NextResponse> {
        return NextResponse.json(await endpoint());
    };
}
