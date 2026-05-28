import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const databaseUrl = process.env.DATABASE_URL;

// Database is optional — the app starts without it if DATABASE_URL is not set
export const client = databaseUrl ? postgres(databaseUrl) : null;
export const db = client ? drizzle(client) : null;
