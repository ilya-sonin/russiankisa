---
title: vanilla-css-animations — почему CSS, а не библиотека
type: decision
status: recorded
updated: 2026-07-12
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
✅ **Совместимость** — CSS-анимации остаются простыми; с 2026-07-12 есть локальный fallback `app/plugins/trig-reveal.client.ts`, который добавляет `.trig` через `IntersectionObserver`, если CDN-скрипт не сработал.

### Минусы

❌ **Trig-js из CDN** — внешний скрипт всё ещё подключён, но видимость контента больше не зависит только от jsdelivr
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

### Сделано

1. Добавлен локальный fallback `app/plugins/trig-reveal.client.ts`.
2. Он ищет `[data-trig]`, добавляет `.trig` при попадании в viewport и раскрывает уже видимые элементы после mount/load.
3. Если `IntersectionObserver` недоступен, fallback сразу раскрывает все `[data-trig]`.

### Среднее

1. Полностью заменить CDN trig-js на локальный код или VueUse `useIntersectionObserver`:

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

CDN можно удалить отдельной задачей, если после визуального QA fallback полностью покрывает нужное поведение.
