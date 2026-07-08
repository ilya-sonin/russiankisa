---
title: design-assets — шрифты, изображения, иконки
type: entity
status: active
---

# design-assets

## Шрифты

### Oranienbaum
- Regular (400) — единственный вес
- Google Fonts, preconnect
- Используется: body, все заголовки, навигация, основной текст
- Семейный шрифт с засечками (serif)

### Disruptors Script
- Regular (400) — единственный вес
- Локальный OTF: `public/fonts/Disruptor's Script.otf`
- `@font-face` в `main.scss:8-14`
- Используется: "Творческое", "?", "КТО Я", "Я", "РАБОТЫ", "ЭТАПЫ", "СПЕКТР", "УСЛУГ", "МОИ", "ПРОЕКТЫ", "СВЯЗЬ СО МНОЙ" + цитата Джобса + номера кейсов
- Курсивный (cursive), "рукописный" акцент

## Изображения (50 файлов в `public/images/`)

### Workflow path (SVG, 3 версии)
- `workflow-path-desktop.svg` (≥1024px)
- `workflow-path-tablet.svg` (≥768px)
- `workflow-path-mobile.svg` (default)

### Tools (иконки, 7 SVG)
- `tool-figma.svg`, `tool-tilda.svg`, `tool-slides.svg`
- `tool-picsart.svg`, `tool-office.svg`
- `tool-recraft.svg`, `tool-midjourney.svg`

### Pixel art (PortfolioCase10)
- `pixel-image-1.svg`, `pixel-image-2.svg`, `pixel-image-3.svg`
- `pixel-image-1.png`
- `tablet-vector.svg`

### Hero
- `hero-image.png` (птичка) — используется в 2 размерах

### About
- `about-photo.png` (фото Екатерины)

### PortfolioCase1 (Yudaev.School)
- `case1-mac.png`, `case1-iphone.png`

### PortfolioCase2
- `case2-tablet.png`, `case2-galaxy-tab.png`

### PortfolioCase3
- `case3-iphone.png`, `case3-ipad.png`

### PortfolioCase4
- `case4-tablet.png`

### PortfolioCase5
- `case5-ipad-large.png`

### PortfolioCase6
- `case6-mac.png`

### PortfolioCase7 (⭐ визитки)
- `case7-iphone.png`
- `card-1.png`..`card-8.png` (8 визиток лицевая сторона)
- `card-back-1.png`..`card-back-8.png` (8 визиток обратная сторона)

### PortfolioCase8
- `case8-tablet-left.png`, `case8-tablet-right.png`

### PortfolioCase9
- `case9-ipad-large.png`

### PortfolioCase10
- `pixel-image-1..3.svg`, `pixel-image-1.png`, `tablet-vector.svg`

### PortfolioCase11
- (TODO: проверить какие именно)

### PortfolioCase12 (мудборд)
- `moodboard-main.png`
- `business-card-1.png`, `business-card-2.png`

### Star (decor)
- `star-icon.svg`

### QR-коды
- `qr-vk.png` (ВКонтакте → `vk.com/russiankisa`)
- `qr-telegram.png` (Telegram → `t.me/kt_mch`)
- `qr-instagram.png` (Instagram → `instagram.com/kt.mch`)

### Логотипы
- `logo-with-cat.svg` (прозрачный фон, сверху)
- `logo-without-cat.svg` (на кремовом фоне, при скролле)

### Decorative shapes
- `star-icon.svg` (⭐ декоративные в Services)

## Favicon
- `public/favicon.ico` (legacy)

## robots.txt
- `public/robots.txt` (минимальный)

## Оптимизация (что отсутствует)

- ❌ WebP / AVIF версии
- ❌ `<picture>` с srcset для responsive
- ❌ `loading="lazy"` на img (только default)
- ❌ `decoding="async"`
- ❌ Preload для hero-image.png
- ❌ CDN для статики (всё в `public/`)

→ **TODO для админки**: при загрузке картинок — автоконвертация в WebP + генерация srcset.
