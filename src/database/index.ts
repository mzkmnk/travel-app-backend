import {config} from "dotenv";
import postgres from "postgres";
import {drizzle} from "drizzle-orm/postgres-js";
import * as schema from './schema';

config({path:'.env'})

const client = postgres(process.env.supabase_database_url!);

export const db = drizzle({client,schema})
