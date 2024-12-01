import { defineConfig } from "drizzle-kit";
import {config} from "dotenv";

config({path:process.env.VARIABLE || '.env'})

export default defineConfig({
  dialect:'postgresql',
  schema:'./src/database/schema.ts',
  out:'./src/database/drizzle',
  dbCredentials:{
    url:process.env.supabase_database_url!,
  }
})
