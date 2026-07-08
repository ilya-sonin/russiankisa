---
title: components — каталог 17 компонентов
type: entity
status: active
---

# components

Каталог всех Vue-компонентов в `app/components/`.

## Header.vue (156 строк)

**Фиксированная навигация с двумя логотипами и мобильным меню.**

- State: `isScrolled` (ref, scroll handler), `isMobileMenuOpen` (ref)
- Скролл >50px → меняет фон на кремовый + показывает лого без кота
- Бургер на <900px (`tablet:hidden`)
- 4 якорных ссылки: `#about`, `#workflow`, `#services`, `#contacts`
- Z-index 9998..10003 (в обход шкалы)
- ⚠ `#contacts` → не существует в ContactSection.vue (там нет `id`)

## Hero.vue (78 строк)

**Первый экран. h1 «Творческое ПОРТФОЛИО» + изображение птички + CTA-кнопка.**

- 2 версии птички (xs vs sm+) — дублирование разметки
- Кнопка `.btn` (Tailwind utility) → `#portfolio`
- `user-select: none` для всего
- ⚠ `top: -100px sm:top-0` — хак для центрирования

## About.vue (653 строки)

**Обо мне. 2-колоночный absolute layout.**

- Intro текст (с `decorative-text` акцентом)
- Title «КТО Я ?» (vertical-rl)
- Фото `about-photo.png` (468×335)
- 2 декоративных текста (digital/print)
- 7 инструментов (Figma, Tilda, Google Slides, PicsArt, Microsoft Office, Recraft AI, Midjourney)
- Outro текст (выравнивание по правому краю)
- ⚠ Большой файл — 653 строки, на 90% SCSS

## Workflow.vue (887 строк)

**8 этапов работы с SVG-путём.**

- Title «ЭТАПЫ» (vertical-rl) + декоративный «РАБОТЫ»
- SVG-путь с 3 версиями: desktop/tablet/mobile (`<picture>`)
- 8 маркеров (красные круги) с absolute-координатами
- 8 текстовых блоков (ЗНАКОМСТВО → ОПЛАТА) — absolute
- ⚠ Самый большой файл — 887 строк, на 95% SCSS
- ⚠ Маркеры скрыты на mobile (`.workflow__markers { display: none }`)

## Services.vue (378 строк)

**5 услуг в absolute layout + 6 звёздочек (decor).**

- Title «СПЕКТР» + декоративный «УСЛУГ»
- 6 звёздочек `star-icon.svg` (absolute, декоративные)
- 5 услуг (ВЕБ-ДИЗАЙН, ДИЗАЙН ПОЛИГРАФИИ, ПРЕЗЕНТАЦИИ, ДИЗАЙН БАННЕРОВ, ЧЕК-ЛИСТЫ И ГАЙДЫ)
- На mobile: cards в column, звёздочки скрыты

## Portfolio.vue (314 строк)

**1-й кейс (Yudaev.School).**

- Title «МОИ» + «ПРОЕКТЫ» (vertical-rl)
- Описание: «Свои первые работы я осуществила благодаря интенсиву Yudaev.School...»
- 2 устройства: Mac (`case1-mac.png`) + iPhone (`case1-iphone.png`)

## PortfolioCase2..12 (11 файлов, ~280-470 строк каждый)

**Кейсы 2-12.** Каждый:
- дублирует title «МОИ / ПРОЕКТЫ»
- имеет свою `case-label` (Кейс + N)
- имеет 1-3 изображения
- absolute layout 1280×832
- mobile/tablet media queries

См. [[portfolio-cases]] + [[concepts/case-layout-duplication]].

## ContactSection.vue (376 строк)

**Контакты + цитата + 3 QR-кода.**

- Title «СВЯЗЬ СО МНОЙ» (vertical-rl)
- Призыв к действию (call to action)
- Цитата Стива Джобса (decorative, красная)
- 3 QR-кода: ВК, Telegram, Instagram
- ⚠ **Нет `id="contacts"`** — навигация в Header не работает корректно
- ⚠ Inline `font-family` в CSS (должны идти через SCSS-функции)

## DevScreenSize.vue (18 строк)

**Dev-only индикатор текущего breakpoint.**

- `v-if="isDev"` (process.env.NODE_ENV)
- Фиксирован в `bottom-4 left-4`
- Показывает название текущего breakpoint (xs/sm/md/tablet/lg/xl/2xl)
- Не виден в production-сборке

## Паттерны

- **Все компоненты** используют `<style lang="scss" scoped>` (не глобальный)
- **Все компоненты** используют `data-trig` + кастомные CSS-классы
- **Header.vue — единственный** с `<script setup>` логикой (scroll handler)
- **Все остальные** — pure presentation, без реактивности
- **Pinia/Vuex отсутствуют** — нет state-management
