import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect:'postgresql',
  schema:'./src/database/schema.ts',
  out:'./src/database/drizzle',
  dbCredentials:{
    url:'postgresql://postgres.jsvxonxpgrgqampqhdif:Mizuki9270@@@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres',
  }
})
