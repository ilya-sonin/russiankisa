---
title: styling-system — Tailwind + SCSS
type: design-system
status: active
---

# styling-system

## Двойная система токенов ⚠️

**Токены дизайна определены ДВАЖДЫ** (требуют ручной синхронизации):

1. **`tailwind.config.js`** — для utility-классов (`.bg-primary`, `.font-primary`, `.text-9xl`)
2. **`app/assets/scss/_variables.scss`** — для SCSS-функций (`color(primary)`, `font-size('3xl')`)

### Маппинг токенов

| Концепт | Tailwind | SCSS | Значение |
|---------|----------|------|----------|
| Primary color | `primary` | `$colors.primary` | `#db2e28` (красный) |
| Background | `background` | `$colors.background` | `#fff6f4` (кремовый) |
| Text primary | `text-primary` | `$colors.text-primary` | `#000000` |
| White | (default) | `$colors.white` | `#ffffff` |
| Font primary | `font-primary` | `$font-families.primary` | `Oranienbaum, ...` |
| Font decorative | `font-decorative` | `$font-families.decorative` | `Disruptors Script, ...` |
| Font system | `font-system` | `$font-families.system` | `-apple-system, ...` |
| Hero size | `text-hero` | `$font-sizes.hero` | `14.25rem` (228px) |
| Hero tablet | `text-hero-tablet` | (нет в SCSS) | `8.5rem` (136px) |
| Button radius | `rounded-button` | `$border-radius.button` | `0.4375rem` (7px) |

⚠ **Если поменяешь в одном месте — поменяй в другом.** Это тех. долг.

## Breakpoint-сетка

```
xs:   <550
sm:   550+
md:   768+
tablet: 900+      ← кастомный, нестандартный
lg:   1024+
xl:   1280+
2xl:  1536+
```

Используются **6 breakpoint'ов** (xs, sm, md, tablet, lg, xl, 2xl — последний это 2xl).

⚠ `tablet: 900px` — **нестандартный** брейкпоинт между md и lg. Не путать с `lg`.

## Шрифты

### Oranienbaum
- Google Fonts: `https://fonts.googleapis.com/css2?family=Oranienbaum:wght@400&display=swap`
- Только Regular (400)
- preconnect + stylesheet в `nuxt.config.ts:53-64`
- preload: ❌ нет (нужно бы)

### Disruptors Script
- Локально: `public/fonts/Disruptor's Script.otf`
- `@font-face` в `app/assets/scss/main.scss:8-14`
- `font-display: swap` (FOUT допустим)
- preload: ✅ есть в `nuxt.config.ts:65-71`

## Цветовая палитра

```
primary    #db2e28   ← красный (CTA, акценты)
background #fff6f4   ← кремовый (фон всей страницы)
text-primary #000000
secondary  #18181b
accent     #3b82f6   ← blue
success    #22c55e
warning    #f59e0b
error      #ef4444

gray-50    #f9fafb
gray-100   #f3f4f6
...
gray-900   #111827
```

Используются преимущественно `primary`, `background`, `text-primary`. Остальные — из коробки Tailwind, в коде не встречаются.

## Container

```scss
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
// + responsive max-width: 6xl, 5xl, 4xl, 3xl, full
```

⚠ В `nuxt.config.ts:1-3` уже `max-w-desktop` = 1280px, но в SCSS `.container` всё равно переопределяет. **Дублирование.**

## Z-index шкала

```
dropdown        1000
sticky          1020
fixed           1030
modal-backdrop  1040
modal           1050
popover         1060
tooltip         1070
```

В `Header.vue` используется `z-[10000]`, `z-[10001]`, `z-[10002]`, `z-[10003]` — **в обход шкалы!** См. TODO.

## БЭМ-нотация

`.block__element--modifier` — основная. Но есть **гибриды**:
- `.about__tools-grid` ✅
- `.about-tools-animation` ❌ (без `__`)
- `.hero-title-animation` ❌
- `.workflow-step-animation` ❌

→ **Анимационные классы не в БЭМ**. Скорее всего так задумано (cross-cutting concern), но единообразия нет.

## Глобальные утилитарные классы (main.scss)

- `.btn` — кнопка (bg-primary, rounded-button, text-4xl)
- `.container` — обёртка с max-width
- `.hero-title` — h1 в Hero (text-hero, font-primary)
- `.decorative-text` — декоративный текст (font-decorative, text-decorative)
- `.nav-link` — ссылка в навигации
- `.nav-link:hover` — primary

## CSS reset

Глобальный (`* { box-sizing, margin: 0, padding: 0 }`), `body { overflow-x: hidden }`, `img { max-width: 100% }`, `a { color: inherit; text-decoration: none }`.
