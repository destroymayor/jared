import { NextResponse } from "next/server";
import { getAllMDXFolder } from "@/helpers/mdx.helpers";

export const dynamic = 'force-dynamic';

export async function GET() {
  const snippets = await getAllMDXFolder("content/snippet");

  return NextResponse.json(snippets);
}
