---
maestru: "0.4"
type: doc
id: 03-database
title: "Database Guide"
description: "Setting up PostgreSQL, Drizzle ORM, and the Database tab"
created: 2026-05-28
updated: 2026-05-28
tags: [database, drizzle, postgresql]
---

# Database Guide

<!-- maestru:summary -->
How to set up and work with PostgreSQL and Drizzle ORM in your project.
<!-- /maestru:summary -->

## Setup

The API is designed to work with or without a database. To enable it:

1. Open the **Secrets** tab and set `DATABASE_URL`:
   ```
   DATABASE_URL=postgres://user:password@localhost:5432/myapp
   ```
2. Restart the dev server

The health endpoint (`/api/health`) reports database status — use it to verify the connection.

## Drizzle ORM

This project uses [Drizzle ORM](https://orm.drizzle.team) for type-safe database access.

### Defining Tables

Create or edit `apps/api/src/db/schema.ts`:

```typescript
import { pgTable, uuid, varchar, boolean, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### Migrations

Always use the generate + migrate workflow. Open a **Terminal** tab and run:

```bash
npm run -w apps/api db:generate    # generates SQL migration from schema diff
npm run -w apps/api db:migrate     # applies pending migrations
```

Never edit generated migration files manually. If a migration is wrong, revert the schema change, regenerate, and re-migrate.

### Browsing Data

Use the **Database** tab in Maestru to browse tables, view data, and run queries — no external SQL client needed.

### Querying

```typescript
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

// Select all
const allUsers = await db.select().from(users);

// Select with filter
const user = await db.select().from(users).where(eq(users.email, 'a@b.com'));

// Insert
await db.insert(users).values({ email: 'a@b.com', name: 'Alice' });

// Update
await db.update(users).set({ name: 'Bob' }).where(eq(users.id, someId));

// Delete
await db.delete(users).where(eq(users.id, someId));
```

## Database Tab

The **Database** tab in Maestru provides a visual interface to browse tables, view data, and run queries — no SQL client needed.

## Configuration

Database config lives in `apps/api/drizzle.config.ts`:

```typescript
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',              // migration output directory
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```
