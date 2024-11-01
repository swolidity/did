import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const thingsTable = pgTable("things", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  thing: text("thing").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
