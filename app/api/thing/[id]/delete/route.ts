import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { thingsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  await db.delete(thingsTable).where(eq(thingsTable.id, id));
  return NextResponse.redirect(new URL("/", request.url));
}
