"use server";

import { db } from "@/db/drizzle";
import { thingsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Thing({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const thing = await db
    .select()
    .from(thingsTable)
    .where(eq(thingsTable.id, id));

  return (
    <div>
      <div>{thing[0].thing}</div>
      <div>{thing[0].createdAt.toLocaleString()}</div>
      <form action={`/api/thing/${id}/delete`} method="DELETE">
        <button type="submit" className="btn btn-error">
          Delete
        </button>
      </form>
    </div>
  );
}
