import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health.js';
import { itemsRouter } from './routes/items.js';
import { errorHandler } from './middleware/error-handler.js';
import './db/index.js';

const app = express();
const port = process.env.PORT || 3001;

const corsOrigin =
  process.env.NODE_ENV === 'production'
    ? process.env.CORS_ORIGIN?.split(',').map((s) => s.trim()) || false
    : process.env.CORS_ORIGIN?.split(',').map((s) => s.trim()) || 'http://localhost:3000';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

// Routes
app.use('/api/health', healthRouter);
app.use('/api/items', itemsRouter);

// 404 handler
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler (must be last)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
