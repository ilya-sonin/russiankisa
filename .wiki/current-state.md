---
title: current-state — что готово, что нет, тех. долг
type: status
status: active
updated: 2026-07-08
---

# current-state

## Готово (работает)

- ✅ Структура страницы: 12 секций в правильном порядке
- ✅ Header с фиксированной навигацией, скроллом и мобильным меню
- ✅ Hero с заголовком, птичкой, кнопкой "СМОТРЕТЬ РАБОТЫ"
- ✅ About с фото, инструментами (7 шт)
- ✅ Workflow (8 этапов, SVG-путь с 3 версиями — desktop/tablet/mobile)
- ✅ Services (5 услуг, absolute layout)
- ✅ Portfolio (кейс 1 — Yudaev.School)
- ✅ PortfolioCase2..12 (11 кейсов) — каждый рендерит изображения
- ✅ ContactSection (3 QR-кода: ВК, Telegram, Instagram)
- ✅ DevScreenSize — индикатор текущего breakpoint
- ✅ Адаптивность: xs / sm(550) / md(768) / tablet(900) / lg(1024) / xl(1280) / 2xl(1536)
- ✅ Анимации: trig-js + кастомные CSS-классы
- ✅ Шрифты: Oranienbaum (Google Fonts) + Disruptors Script (локально)
- ✅ Docker: multi-stage build, лимиты памяти 256/512 MB
- ✅ Prerender единственной страницы
- ✅ `prefers-reduced-motion` уважается

## Известные проблемы (тех. долг)

| # | Проблема | Приоритет | Страница |
|---|----------|-----------|----------|
| 1 | `tsconfig.tsbuildinfo` в репо (должен быть в .gitignore) | 🟡 low | [[problems/tsbuildinfo-in-git]] |
| 2 | `stagewise` в devDeps, но НЕ подключён в `nuxt.config.ts` | 🟡 low | [[problems/stagewise-not-wired]] |
| 3 | Все секции в absolute layout с захардкоженными px | 🟠 medium | [[problems/hardcoded-px-layout]] |
| 4 | Hero: `top: -100px` хак для центрирования | 🟠 medium | [[problems/hero-mobile-top-hack]] |
| 5 | 11 кейсов PortfolioCase2..12 — копипаста с минимальными отличиями | 🟠 medium | [[concepts/case-layout-duplication]] |
| 6 | Сайт prerender → `/`, но не настроен fallback 404/500 | 🟡 low | (TODO) |
| 7 | SEO: нет `og:image`, нет JSON-LD | 🟡 low | (TODO) |
| 8 | Inline `font-family` в `ContactSection.vue:135,149,165` (Oranienbaum/Disruptors Script) — должны идти из `font-family()` SCSS-функции | 🟢 nit | (TODO) |
| 9 | Hero-картинка: `position: absolute; right: 0; bottom: 10` идёт **поверх** центрального блока на узких экранах | 🟠 medium | (TODO) |
| 10 | БЭМ-нотация непоследовательная (`.about__title` vs `.about-tools-animation`) | 🟢 nit | (TODO) |
| 11 | `prerender: ['/']` в nitro, но `ssr: true` → почему не `nuxt generate` для статики? | 🟡 low | (TODO) |

## Что нужно сделать (по заказу)

### Фаза 1: доработка вёрстки

- [ ] Сверка с дизайн-макетами (Figma, у заказчика) — **доступ нужен**
- [ ] Фикс найденных проблем #3, #4, #9
- [ ] Возможно: уход от absolute layout к flex/grid
- [ ] Оптимизация изображений (WebP, srcset)
- [ ] Добавить `og:image`, `og:url`
- [ ] Open Graph + Twitter Card preview

### Фаза 2: админка

> **Детали НЕ уточнены.** См. [[concepts/cms-admin-pending]]. Варианты:
> 1. **Headless CMS** (Sanity, Strapi, Directus) — управление контентом через их UI
> 2. **Local-first файл-редактор** (Nuxt Content + git) — markdown-файлы в репо
> 3. **Кастомный бэкенд** (Nuxt server routes + SQLite/Postgres + admin UI) — максимум гибкости
> 4. **Stagewise (visual editor)** — у этого проекта уже есть зависимость!
> 5. **Designer-MCP** — если использовать PKM-Конструктор (но это V1-only)

→ **Прежде чем браться за админку — нужно обсудить с заказчиком: что именно он хочет редактировать и как**.

## Метрики

- ~7150 строк кода (Vue + SCSS)
- 17 компонентов
- 12 кейсов портфолио
- 50+ изображений (3.6 MB на диске, оценочно)
- 0 unit-тестов
- 0 e2e-тестов
- 0 linting конфига (eslint, prettier — отсутствуют)
