---
title: data-driven-cases-needed — контент кейсов должен быть данными
type: problem
status: open
priority: high
---

# data-driven-cases-needed

## Проблема

Сейчас контент 11 кейсов **захардкожен в `<template>`** каждого `PortfolioCaseN.vue`. Чтобы:
- добавить кейс → создать новый файл (~280-470 строк)
- изменить текст → править .vue
- поменять порядок → менять index.vue
- внедрить админку → нужно переписывать **все** 11 файлов

## Что нужно

**Вынести контент в `app/data/portfolio.ts`** — массив объектов:

```ts
export interface PortfolioCase {
  id: string                       // 'case1', 'case2', ...
  number: number                   // 1, 2, 3, ...
  description: string              // может содержать <br>
  images: PortfolioImage[]
  variant?: 'standard' | 'cards' | 'retro'  // для разных layout-сеток
}

export interface PortfolioImage {
  src: string
  alt: string
  variant: 'mac' | 'iphone' | 'ipad' | 'tablet' | 'pixel' | 'card' | 'business-card'
  width?: number
  height?: number
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: 'case1',
    number: 1,
    description: 'Свои первые работы я осуществила благодаря интенсиву Yudaev.School, где впервые познакомилась с Figma и её функционалом.',
    images: [
      { src: '/images/case1-mac.png', alt: 'Mac Studio - дизайн проект', variant: 'mac', width: 800, height: 623 },
      { src: '/images/case1-iphone.png', alt: 'iPhone - мобильная версия', variant: 'iphone', width: 359, height: 464 },
    ],
  },
  // ...
]
```

## Преимущества

1. ✅ **Админка**: добавить/изменить кейс = изменить объект в data (или через CMS позже)
2. ✅ **E2E тесты**: стабильные id (`case-1`, `case-2`, ...) → `page.getByTestId('case-1')`
3. ✅ **Порядок**: меняется порядком в массиве, не импортами в index.vue
4. ✅ **Фильтрация**: по `variant`, по `tags` (добавить позже)
5. ✅ **Меньше кода**: -3500 строк копипасты

## Когда внедрять

**В рамках рефакторинга codex** (см. [[sessions/2026-07-08-refactor]]). ШАГ 4 ТЗ.

## Контракт данных (для будущего CMS)

Когда появится CMS, эта структура данных может стать API-ответом:

```json
{
  "cases": [
    {
      "id": "case1",
      "number": 1,
      "title": "Yudaev.School",       // опционально, сейчас нет
      "description": "...",
      "tags": ["first", "intensive"],  // опционально
      "externalUrl": null,            // опционально, ссылка на проект
      "date": "2024-03-15",           // опционально
      "featured": false,
      "images": [...]
    }
  ]
}
```

→ **TODO**: добавить `title`, `tags`, `externalUrl`, `date`, `featured` когда дойдёт до админки.