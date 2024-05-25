import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export async function GET() {
  const response = await getNowPlaying();

  return NextResponse.json(response.data);
}
