import {pgTable, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";

export const userTable = pgTable('user',{
  id:uuid().primaryKey(),
  username: text().notNull(),
  email: text().notNull(),
  role: varchar('role',{length:20}).default('user'),
  createdAt:timestamp({precision:0,withTimezone:true}).defaultNow().notNull(),
});
