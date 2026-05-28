import { db, client } from './index.js';
import { items } from './schema.js';

async function seed() {
  if (!db || !client) {
    console.log('No DATABASE_URL set — skipping seed');
    process.exit(0);
  }

  console.log('Seeding database...');

  await db.insert(items).values([
    { title: 'Set up project structure', completed: true },
    { title: 'Connect database', completed: true },
    { title: 'Build first feature', completed: false },
    { title: 'Deploy to production', completed: false },
  ]);

  console.log('Seeded 4 items');
  await client.end();
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
