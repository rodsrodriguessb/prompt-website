---
maestru: "0.4"
type: doc
id: 04-deployment
title: "Deployment Guide"
description: "Deploying to Railway and managing production environments"
created: 2026-05-28
updated: 2026-05-28
tags: [deployment, railway, production]
---

# Deployment Guide

<!-- maestru:summary -->
How to deploy your app to Railway and manage production environments.
<!-- /maestru:summary -->

## Architecture

Railway deploys each app as a **separate service** with its own domain:

```
┌─────────────────────────┐     ┌─────────────────────────────┐
│  Web Service            │     │  API Service                │
│  your-web.up.railway.app│────▶│  your-api.up.railway.app    │
│  (static files via      │     │  (Express + Node.js)        │
│   npx serve)            │     │          │                  │
└─────────────────────────┘     │          ▼                  │
                                │    ┌──────────┐             │
                                │    │ PostgreSQL│             │
                                │    └──────────┘             │
                                └─────────────────────────────┘
```

This means:
- Web and API are on **different domains** — you can't use relative paths like `/api` from the frontend in production
- The frontend must know the API's full URL via `VITE_API_URL`
- The API must allow the frontend's domain via `CORS_ORIGIN`

## Railway Configuration

Each app has its own `railway.toml` that defines build and deploy behavior. Railway runs all commands from the **repository root**, not from inside the app subdirectory.

### Frontend (`apps/web/railway.toml`)

```toml
[build]
buildCommand = "npm run -w apps/web build"
watchPatterns = ["apps/web/**", "packages/**", "package.json"]

[deploy]
startCommand = "npx serve apps/web/dist -s -l $PORT"
```

Builds the Vite app and serves the static files. The `-s` flag enables SPA mode (all routes serve `index.html`).

### Backend (`apps/api/railway.toml`)

```toml
[build]
buildCommand = "npm run -w apps/api build"
watchPatterns = ["apps/api/**", "packages/**", "package.json"]

[deploy]
startCommand = "node apps/api/dist/index.js"
preDeployCommand = "cd apps/api && npx drizzle-kit migrate"
healthcheckPath = "/api/health"
```

Builds the API, runs database migrations before each deploy, and uses the health endpoint for readiness checks.

### Important: Paths are relative to repo root

Railway runs commands from `/app/` (the repo root), not from inside the app subdirectory. That's why:
- `startCommand` uses `apps/web/dist` and `apps/api/dist/index.js` (not `dist`)
- `preDeployCommand` uses `cd apps/api &&` before running drizzle-kit
- `buildCommand` uses `-w apps/web` / `-w apps/api` (npm workspace flag)

### Publishing Tab

Use the **Publishing** tab in Maestru to:
- Deploy your app to Railway
- View deployment status and logs
- Manage production settings

## Environment Variables

### Development

Manage locally via `.env` files or the **Secrets** tab:
- `apps/api/.env` — API config
- `apps/web/.env` — Frontend config

### Production

Set environment variables in Railway's dashboard or via the Publishing tab:

| Variable | Service | Purpose |
|----------|---------|---------|
| `DATABASE_URL` | API | PostgreSQL connection string (Railway provisions this automatically) |
| `PORT` | Both | Server port (Railway sets this automatically) |
| `NODE_ENV` | API | Set to `production` |
| `CORS_ORIGIN` | API | Frontend URL(s), comma-separated (e.g. `https://example.com,https://www.example.com`) |
| `VITE_API_URL` | Web | Full API URL in production (e.g. `https://your-api.up.railway.app`) |

### Wiring Web and API together

Since web and API are on separate domains in Railway:

1. **Set `VITE_API_URL`** on the web service to the API's Railway URL (e.g. `https://your-api.up.railway.app`)
2. **Set `CORS_ORIGIN`** on the API service to the web's Railway URL (e.g. `https://your-web.up.railway.app`)
3. If you have a custom domain, include both the Railway URL and custom domain in `CORS_ORIGIN`

`CORS_ORIGIN` supports multiple origins as a comma-separated list.

## Database Migrations

Migrations run automatically via `preDeployCommand` on every deploy. For this to work:

1. **Migration files must be committed to git** — the `drizzle/` folder inside `apps/api/` must not be gitignored
2. **Generate migrations locally** before deploying — run `npm run -w apps/api db:generate` after schema changes
3. **Commit the generated files** in `apps/api/drizzle/`

The deploy sequence is: build → run migrations → start the server.

## Deployment Checklist

- [ ] Database migrations generated and committed — `npm run -w apps/api db:generate`, then commit `apps/api/drizzle/`
- [ ] Environment variables configured — `CORS_ORIGIN`, `VITE_API_URL`, `DATABASE_URL`
- [ ] Health endpoint returns `200` — visit `https://your-api.up.railway.app/api/health`
- [ ] Frontend builds — `npm run -w apps/web build`
- [ ] API builds — `npm run -w apps/api build`
- [ ] Deploy via the **Publishing** tab
