---
title: docker — multi-stage build
type: entity
status: active
---

# docker

## Dockerfile (multi-stage)

3 стадии: **base → deps → builder → runner**

```dockerfile
# Base
FROM node:20-alpine
WORKDIR /app
EXPOSE 3000
ENV NODE_OPTIONS="--max-old-space-size=512"
ENV NITRO_PRESET=node-server

# Deps (только зависимости)
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm
RUN --mount=type=cache,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile --fetch-timeout=300000

# Builder (сборка)
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm
ENV NODE_OPTIONS="--max-old-space-size=512"
RUN pnpm build

# Runner (production runtime)
FROM base AS runner
ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV NODE_OPTIONS="--max-old-space-size=256"
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs
COPY --from=builder --chown=nuxtjs:nodejs /app/.output ./.output
COPY --from=builder --chown=nuxtjs:nodejs /app/package.json ./package.json
USER nuxtjs
CMD ["node", ".output/server/index.mjs"]
```

## Dockerfile.dist (minimal, для CI/registry)

Только `runner`-стадия. Используется, если `.output/` собран **где-то ещё** (например, на build-машине) и нужно положить его в registry.

```dockerfile
FROM node:20-alpine
WORKDIR /app
EXPOSE 3000
ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV NODE_OPTIONS="--max-old-space-size=256"
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs
COPY --chown=nuxtjs:nodejs .output ./.output
COPY --chown=nuxtjs:nodejs package.json ./package.json
USER nuxtjs
CMD ["node", ".output/server/index.mjs"]
```

## Ключевые настройки

- **NITRO_PRESET=node-server** — standalone Node-сервер (не Vercel/Netlify/etc)
- **NITRO_HOST=0.0.0.0** — слушать все интерфейсы (для Docker)
- **NITRO_PORT=3000** — порт по умолчанию
- **NODE_OPTIONS=--max-old-space-size=512** для build, **256** для runtime — лимиты памяти под маленький контейнер
- **Non-root user** (uid 1001, `nuxtjs`) — best practice
- **corepack pnpm** — pnpm активируется через corepack (не глобально)

## Размеры образов (оценка)

- Alpine base: ~50 MB
- + node_modules: ~150 MB
- + .output (built Nuxt): ~10 MB
- **Итого: ~200-250 MB** (для production runtime)

## Health check

❌ Не настроен. Docker healthcheck не объявлен. → TODO: добавить `HEALTHCHECK --interval=30s CMD wget -qO- http://localhost:3000/ || exit 1`

## Nginx

❌ Не используется (не нужен — Nitro сам обрабатывает HTTP). В ранних коммитах был, потом убрали (см. git log: `c4f0dfd migrate to nuxt4 remove docker`).

## Сборка и запуск

```bash
# Build
docker build -t russiankisa:latest .

# Run
docker run -d --name russiankisa -p 3000:3000 russiankisa:latest

# Или с docker-compose (TODO: нет compose-файла в репо)
```

## CI/CD

❌ Нет `.github/workflows/`, нет GitLab CI, нет Jenkinsfile.
Деплой — ручной (Илья: build → push → run на сервере).

## Проблемы

- ⚠ `--fetch-timeout=300000` (5 минут) — на медленном CI может быть мало
- ⚠ Нет `.dockerignore` — копируется всё (включая `.git/`, `.nuxt/`, `node_modules/` если они есть локально)
- ⚠ Нет multi-arch build (только linux/amd64)

→ **TODO**: добавить `.dockerignore` (`node_modules`, `.git`, `.nuxt`, `.output`, `*.log`, `.DS_Store`).
