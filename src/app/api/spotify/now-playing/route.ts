import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await getNowPlaying();

  await new Promise(resolve=> setTimeout(resolve, 2000));

  return NextResponse.json(response.data);
}
