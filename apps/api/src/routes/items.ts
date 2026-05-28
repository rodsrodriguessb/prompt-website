import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../db/index.js';
import { items } from '../db/schema.js';
import { validate } from '../middleware/validate.js';

export const itemsRouter = Router();

const createItemSchema = z.object({
  title: z.string().min(1).max(255),
  completed: z.boolean().optional(),
});

const updateItemSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  completed: z.boolean().optional(),
});

// GET /api/items — list all
itemsRouter.get('/', async (req, res) => {
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const rows = await db.select().from(items);
  res.json({ data: rows });
});

// GET /api/items/:id — get by ID
itemsRouter.get('/:id', async (req, res) => {
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const [row] = await db.select().from(items).where(eq(items.id, req.params.id));
  if (!row) return res.status(404).json({ error: 'Item not found' });
  res.json({ data: row });
});

// POST /api/items — create
itemsRouter.post('/', validate(createItemSchema), async (req, res) => {
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const [row] = await db.insert(items).values(req.body).returning();
  res.status(201).json({ data: row });
});

// PATCH /api/items/:id — update
itemsRouter.patch('/:id', validate(updateItemSchema), async (req, res) => {
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const [row] = await db.update(items).set({ ...req.body, updatedAt: new Date() }).where(eq(items.id, req.params.id)).returning();
  if (!row) return res.status(404).json({ error: 'Item not found' });
  res.json({ data: row });
});

// DELETE /api/items/:id — delete
itemsRouter.delete('/:id', async (req, res) => {
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const [row] = await db.delete(items).where(eq(items.id, req.params.id)).returning();
  if (!row) return res.status(404).json({ error: 'Item not found' });
  res.json({ data: row });
});
