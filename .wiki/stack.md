---
title: stack — версии, зависимости, лицензии
type: stack
status: active
---

# stack

## Runtime

| Компонент | Версия | Заметка |
|-----------|--------|---------|
| Node | 20-alpine (Docker) | 20.x в Dockerfile |
| Nuxt | ^4.0.1 | **alpha** — см. [[decisions/nuxt-4-alpha]] |
| Vue | 3.x (через Nuxt 4) | |
| TypeScript | ^5.8.3 | |
| vue-tsc | ^3.0.1 | для typecheck |
| Sass | ^1.89.2 | dart-sass |

## Зависимости (dependencies)

| Пакет | Версия | Зачем |
|-------|--------|-------|
| `nuxt` | ^4.0.1 | meta-framework |
| `trig-js` | ^4.2.0 | анимации scroll-in-view (но **загружается из CDN**, не из node_modules) |

## devDependencies

| Пакет | Версия | Зачем |
|-------|--------|-------|
| `@nuxtjs/tailwindcss` | ^6.14.0 | Tailwind module |
| `@stagewise/toolbar` | ^0.6.2 | devtoolbar (см. [[problems/stagewise-not-wired]]) |
| `@stagewise-plugins/vue` | ^0.6.2 | то же |
| `sass` | ^1.89.2 | для `<style lang="scss">` |
| `typescript` | ^5.8.3 | |
| `vue-tsc` | ^3.0.1 | typecheck |

## Package manager

**pnpm** 10.10.0 (захардкожен в `packageManager` field). В Dockerfile: `corepack enable pnpm`.

## Скрипты

```json
"build":       "nuxt build",
"dev":         "nuxt dev",
"generate":    "nuxt generate",   // для статического экспорта
"preview":     "nuxt preview",
"postinstall": "nuxt prepare",
"typecheck":   "nuxt prepare && vue-tsc -b --noEmit"
```

## Совместимость

- `compatibilityDate: '2025-08-02'` — фиксирует поведение Nitro на эту дату (best practice Nuxt 4)

## Runtime config

```ts
runtimeConfig: {
  public: {
    baseURL: process.env.BASE_URL || '/',
  },
}
```

Минимально — только baseURL. Секретов нет.

## Что НЕ используется (намеренно)

- ❌ Pinia / Vuex — нет состояния
- ❌ Axios / ofetch composables — нет API
- ❌ Nuxt Content — нет markdown-контента
- ❌ i18n — только русский
- ❌ Auth (nuxt-auth) — пока не нужен
- ❌ Database / ORM — статика
