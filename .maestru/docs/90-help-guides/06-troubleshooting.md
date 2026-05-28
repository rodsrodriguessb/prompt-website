---
maestru: "0.4"
type: doc
id: 06-troubleshooting
title: "Troubleshooting & FAQ"
description: "Common issues and how to fix them"
created: 2026-05-28
updated: 2026-05-28
tags: [troubleshooting, faq, help]
---

# Troubleshooting & FAQ

<!-- maestru:summary -->
Solutions to common issues you may encounter while developing.
<!-- /maestru:summary -->

## Dev Server

### Port already in use

```
Error: listen EADDRINUSE :::3000
```

Another process is using the port. Open a **Terminal** tab and find it:

```bash
lsof -i :3000          # find the process
kill -9 <PID>           # stop it
```

Or change the port in the **Secrets** tab.

### Frontend can't reach API

If `/api` calls return 404 or network errors:

1. Check the **Console** tab — is the API running on port 3001?
2. Check `apps/web/vite.config.ts` — the proxy should forward `/api` to `http://localhost:3001`
3. Open the **Secrets** tab and verify `CORS_ORIGIN` matches the frontend URL

## Database

### Connection refused

```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

PostgreSQL isn't running or `DATABASE_URL` is wrong. Check:
- Is PostgreSQL installed and running?
- Open the **Secrets** tab — is `DATABASE_URL` set correctly?
- The API works without a database — it's optional for development

### Migration errors

If `db:migrate` fails, open a **Terminal** tab and:

1. Check the migration files in `apps/api/drizzle/`
2. Verify `DATABASE_URL` in the **Secrets** tab
3. Try regenerating: `npm run -w apps/api db:generate`

If the schema is out of sync, you may need to drop and recreate the database in development.

## Build

### TypeScript errors on build

```bash
npm run -w apps/web build    # check frontend
npm run -w apps/api build    # check backend
```

Fix type errors before deploying. The build will fail on type errors by default.

### Missing dependencies

If `npm run dev` fails with module not found errors:

```bash
npm install                  # reinstall from root
```

If a specific package is missing, install it in the correct workspace:

```bash
npm install -w apps/web <package>     # frontend dependency
npm install -w apps/api <package>     # backend dependency
```

## Deployment (Railway)

### Build fails with "Tracker idealTree already exists"

The build command is running `npm install` after Railway's install step already ran `npm ci`. Remove any redundant `npm install` from `buildCommand` in `railway.toml` — Railway handles dependency installation automatically.

### ERR_MODULE_NOT_FOUND at runtime

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/app/apps/api/dist/routes/health'
```

This project uses ESM (`"type": "module"`). Node.js requires `.js` extensions in import paths. Check that:
- All local imports in `apps/api/src/` use `.js` extensions (e.g. `from './routes/health.js'`)
- `tsconfig.json` uses `"moduleResolution": "nodenext"` (not `"bundler"`)

### All routes return 404

If the app starts but every request returns 404:
- **Web service**: Check that `startCommand` in `railway.toml` points to the correct dist folder (`apps/web/dist`, not `dist`). Railway runs from the repo root.
- **API service**: Same — `startCommand` should be `node apps/api/dist/index.js`, not `node dist/index.js`.

### Pre-deploy migration fails

If the pre-deploy command fails:
- **"drizzle-kit not found"**: `drizzle-kit` must be in `dependencies` (not `devDependencies`) in `apps/api/package.json`, since devDependencies are not installed in production.
- **No migration files**: Generate migrations locally (`npm run -w apps/api db:generate`), commit `apps/api/drizzle/`, and push. The `drizzle/` folder must not be in `.gitignore`.
- **Wrong working directory**: The `preDeployCommand` must `cd apps/api` first since Railway runs from the repo root.

### CORS errors in production

```
Access to fetch has been blocked by CORS policy
```

Web and API are on separate Railway domains. Set `CORS_ORIGIN` on the API service to the web service's URL. For multiple domains, use comma-separated values:

```
CORS_ORIGIN=https://example.com,https://www.example.com
```

### Frontend API calls fail in production

The default `VITE_API_URL=/api` assumes web and API share a domain (via proxy). In Railway, they're separate services. Set `VITE_API_URL` on the web service to the API's full URL:

```
VITE_API_URL=https://your-api.up.railway.app
```

## Maestru

### `maestru check` fails

Read the error message — it tells you which file has the issue and what's wrong. Common causes:
- Missing required frontmatter fields (`id`, `title`, `created`)
- Invalid status values
- Broken cross-references in `blocked-by` or `specs`

### `maestru search` returns nothing

Make sure `.maestru/` files exist and have valid frontmatter. Run `maestru check` to verify.

## Preview Tab

### Preview not loading

1. Is `npm run dev` running? Check the **Console** tab
2. Is the frontend on port 3000? Check `apps/web/vite.config.ts`
3. Try refreshing the Preview tab

### Preview shows old content

Vite HMR should auto-reload. If it doesn't:
1. Check the Console tab for errors
2. Hard refresh the Preview tab
3. Restart `npm run dev`
