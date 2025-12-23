import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const forms = pgTable("forms", {
  id: uuid().primaryKey().defaultRandom(),
  createdAt: timestamp({ mode: "string", withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp({ mode: "string", withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date().toISOString())
    .notNull(),
  description: text().notNull(),
  devices: text().array().notNull(),
  budget: text().notNull(),
  timeline: text().notNull(),
  email: text(),
  phone: text(),
});
