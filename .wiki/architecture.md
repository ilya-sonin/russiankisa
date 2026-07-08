---
title: architecture — Nuxt 4 файловая структура
type: architecture
status: active
---

# architecture

## Файловая структура (Nuxt 4 alpha)

```
russiankisa/
├── app/                              # ← Nuxt 4 srcDir (НЕ root!)
│   ├── assets/
│   │   └── scss/
│   │       ├── _variables.scss       # SCSS-переменные (colors, fonts, spacing, z-index, breakpoints)
│   │       ├── main.scss             # Tailwind base + общие стили (.btn, .container, .hero-title, .nav-link)
│   │       ├── trig-animations.scss  # CSS-классы trig-js (trig-fade-in, trig-stagger-N, hero-title-animation и т.д.)
│   │       └── trig-mobile-optimizations.scss  # ускорение анимаций на mobile, prefers-reduced-motion
│   ├── components/
│   │   ├── Header.vue                # фиксированный, лого, навигация, бургер-меню
│   │   ├── Hero.vue                  # 1-й экран, h1 "Творческое ПОРТФОЛИО" + птичка
│   │   ├── About.vue                 # обо мне, фото, инструменты (7 шт)
│   │   ├── Workflow.vue              # 8 этапов работы (absolute layout)
│   │   ├── Services.vue              # 5 услуг (absolute layout)
│   │   ├── Portfolio.vue             # 1-й кейс (Yudaev.School)
│   │   ├── PortfolioCase2..12.vue    # ещё 11 кейсов
│   │   ├── ContactSection.vue        # 3 QR-кода + цитата Джобса
│   │   └── DevScreenSize.vue         # dev-only индикатор текущего breakpoint
│   └── pages/
│       └── index.vue                 # корневая страница (композирует все компоненты)
├── public/
│   ├── images/                       # ~50 PNG/SVG (кейсы, инструменты, QR, workflow-path)
│   ├── fonts/Disruptor's Script.otf
│   ├── favicon.ico
│   └── robots.txt
├── server/
│   └── tsconfig.json                 # extends .nuxt/tsconfig.server.json
├── .nuxt/                            # генерируется nuxt prepare, в .gitignore
├── .output/                          # генерируется nuxt build
├── Dockerfile                        # multi-stage build (deps → builder → runner)
├── Dockerfile.dist                   # минимальный runtime-only (для CI/registry)
├── nuxt.config.ts                    # модули, head, fonts, runtimeConfig
├── tailwind.config.js                # design tokens (colors, screens, fonts, spacing)
├── tsconfig.json                     # 4 references на .nuxt/tsconfig.*
├── package.json                      # pnpm@10.10.0
└── pnpm-lock.yaml
```

## Ключевые архитектурные решения

### 1. Nuxt 4 srcDir = `app/`

Это **alpha** версия Nuxt 4. `app/` вместо корня — критично для путей в конфигах (`~/assets/...`).

### 2. SSR + Prerender

- `ssr: true`
- `nitro.prerender.routes: ['/']` — единственная страница генерируется статически
- `experimental.payloadExtraction: false` — payload инлайнится

### 3. Tailwind через SCSS

- `tailwindcss.cssPath: '~/assets/scss/main.scss'`
- В `main.scss`: `@tailwind base/components/utilities` + кастомные слои
- Дизайн-токены **в двух местах**: Tailwind config (для классов) И `_variables.scss` (для SCSS-функций). **Синхронизировать вручную!**

### 4. Шрифты

- `Oranienbaum` — основной, загружается из Google Fonts (preconnect, stylesheet link)
- `Disruptors Script` — декоративный (для "рукописных" акцентов), локальный OTF + `@font-face` в main.scss
- `font-display: swap` — FOUT допустим

### 5. Анимации — trig-js (загружается из CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/trig-js/src/trig.min.js" defer></script>
```

JS сам навешивает класс `.trig` на элементы с `data-trig`, когда они в viewport. Наши CSS-стили (`.trig-fade-in`, `.trig-stagger-N` и т.д.) — **только определяют** начальное/конечное состояние. См. [[trig-animations]].

## Что отсутствует (пробелы)

- Нет `app.vue` (используется встроенный)
- Нет `layouts/`
- Нет `error.vue`
- Нет `plugins/`
- Нет `composables/`
- Нет `middleware/`
- Нет `server/api/`, `server/routes/`
- Нет Pinia/Vuex, нет useState — всё stateless

→ **Это статическая визитка. Всё состояние — локальное (ref/scroll) в Header.vue.**
