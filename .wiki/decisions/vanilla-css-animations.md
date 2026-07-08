---
title: vanilla-css-animations — почему CSS, а не библиотека
type: decision
status: recorded
---

# vanilla-css-animations

## Решение

Анимации сделаны на **чистом CSS** (transitions + transforms + opacity) с trig-js как триггером. Не используются:
- GSAP
- Framer Motion
- @vueuse/motion
- Anime.js

## Архитектура

```
trig-js (CDN)        →    добавляет класс `.trig` на `[data-trig]`
                       ↓
Кастомные CSS-классы →    начальное состояние (opacity: 0, transform: ...)
                       ↓
                       →    конечное состояние (.trig-fade-in.trig { ... })
                       ↓
                       →    transition срабатывает
```

## Почему так

### Плюсы

✅ **Нулевой JS-bundle** — анимации в CSS, парсятся браузером нативно
✅ **GPU-accelerated** — `transform` + `opacity` идут на композитный поток
✅ **`prefers-reduced-motion` уважается** — нативный CSS, не надо доп. кода
✅ **Bundle-size 0 KB** — все стили уже есть
✅ **Совместимость** — работает без JS (если trig-js не загрузится, элементы просто не анимируются, но `opacity: 0` останется — ⚠ TODO graceful fallback)

### Минусы

❌ **Trig-js из CDN** — если jsdelivr недоступен, ничего не анимируется
❌ **Нет timeline-анимаций** — только enter/leave, нельзя сделать «последовательно: A → подождать 2s → B»
❌ **Зависимость от магии trig-js** — мы не контролируем, когда срабатывает `.trig`
❌ **Нет scroll-driven анимаций** — только enter-viewport

## Альтернативы, которые НЕ выбрали

| Вариант | Почему нет |
|---------|-----------|
| GSAP | Платный для продвинутых фич, ~50 KB, overkill для scroll-in-view |
| Anime.js | Тоже overkill, ~20 KB |
| VueUse `useIntersectionObserver` + CSS | Можно перейти — убрать зависимость от CDN |
| `@vueuse/motion` | v-motion API, удобно, но всё равно нужен JS |

## Что можно улучшить

### Короткое

1. Добавить fallback для `trig-js` — если скрипт не загрузился, убрать `opacity: 0`:

```html
<noscript>
  <style>
    [data-trig] { opacity: 1 !important; transform: none !important; }
  </style>
</noscript>
```

### Среднее

1. Заменить trig-js на `useIntersectionObserver` из VueUse:

```ts
// composables/useTrigReveal.ts
import { useIntersectionObserver } from '@vueuse/core'

export function useTrigReveal() {
  return (el: Element) => {
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) el.classList.add('trig')
    }, { threshold: 0.1 })
  }
}
```

✅ Нет CDN-зависимости
✅ Tree-shakeable
✅ Работает с `prefers-reduced-motion` через VueUse

### Длинное

1. Полный отказ от trig-js + добавление scroll-driven CSS animations (`animation-timeline: view()`) — но это Chrome-only пока.

## Рекомендация

Оставить как есть, **если**:
- CDN-зависимость не критична
- Сейчас всё работает

Добавить graceful fallback (короткое решение) — 1 час работы.
