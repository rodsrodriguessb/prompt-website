import { Router } from 'express';
import { db } from '../db/index.js';
import { sql } from 'drizzle-orm';

export const healthRouter = Router();

healthRouter.get('/', async (req, res) => {
  const result: { status: string; timestamp: string; database?: string } = {
    status: 'ok',
    timestamp: new Date().toISOString(),
  };

  if (db) {
    try {
      await db.execute(sql`SELECT 1`);
      result.database = 'connected';
    } catch {
      result.database = 'error';
    }
  } else {
    result.database = 'not configured';
  }

  res.json(result);
});
