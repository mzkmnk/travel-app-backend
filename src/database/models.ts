import {userTable} from "./schema";

export type TSelectUser = typeof userTable.$inferSelect;
export type TInsertUser = typeof userTable.$inferInsert;
