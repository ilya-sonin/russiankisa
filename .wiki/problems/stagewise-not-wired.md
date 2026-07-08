---
title: stagewise-not-wired — пакет в devDeps, не подключён
type: problem
status: open
priority: low
---

# stagewise-not-wired

## Проблема

`@stagewise/toolbar` и `@stagewise-plugins/vue` в `package.json` (devDependencies), но **нигде не подключены** в `nuxt.config.ts` или в коде.

## Что такое Stagewise

Visual editor для Vue-приложений: добавляет тулбар в dev-режиме, с которым можно кликать по элементам страницы и редактировать их пропсы прямо в браузере.

Полезно для дизайнеров (Екатерина) и не-программистов.

## Почему может быть нужно

- Визуально править текст «на месте» без IDE
- Менять цвета/шрифты
- Пригодится в фазе 2 (админка) — см. [[concepts/cms-admin-pending]]

## Решение (когда дойдут руки)

1. Установить: `pnpm add -D @stagewise/toolbar @stagewise-plugins/vue`
2. Создать `app/plugins/stagewise.client.ts`:

```ts
import { defineNuxtPlugin } from '#app'
import { initToolbar } from '@stagewise/toolbar'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV === 'development') {
    initToolbar({
      plugins: [],
    })
  }
})
```

3. Проверить, что тулбар появляется в dev-режиме (он client-only)

## Альтернатива — удалить

Если Stagewise не нужен → удалить из devDeps и забыть:

```bash
pnpm remove @stagewise/toolbar @stagewise-plugins/vue
```

## Решение для оркестратора

**Не подключать самому** — это не в скоупе текущей задачи (создание wiki). Включить в TODO следующей сессии.
