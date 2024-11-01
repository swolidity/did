import { db } from "@/db/drizzle";
import { thingsTable } from "@/db/schema";

export async function GET() {
  const things = await db.select().from(thingsTable);
  return Response.json({ things });
}

export async function POST(request: Request) {
  const res = await request.json();

  await db.insert(thingsTable).values({ thing: res.thing });
  return Response.json({ res });
}
