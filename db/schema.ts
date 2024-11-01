import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const thingsTable = pgTable("things", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  thing: text("thing").notNull(),
});
