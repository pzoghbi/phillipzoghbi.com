import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error("Missing DATABASE_URL environemt variable.");
}

export const db = drizzle(DATABASE_URL, {
  schema,
  casing: "snake_case",
});
