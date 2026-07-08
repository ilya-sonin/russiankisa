---
title: cms-content-schema — контракт данных для админки
type: concept
status: active
---

# cms-content-schema

## Цель

Определить **минимальный, но полный** контракт данных, который покрывает весь контент сайта. Это будущий API-ответ CMS или форма в админке.

## Текущие данные (v0, в `app/data/portfolio.ts`)

```ts
export interface PortfolioCase {
  id: string
  number: number           // ⚠ намеренно не равен id (дизайн-семантика)
  description: string
  images: PortfolioImage[]
  variant: PortfolioCaseVariant
  legacyClass: string      // ⚠ уйдёт после v1
}
```

**Проблемы** для админки:
- `number` — захардкожен, нет автоматизма
- `variant` — enum, ограничен, нужно уметь расширять
- `legacyClass` — legacy
- Нет `title`, `tags`, `date`, `externalUrl`, `featured`, `status`

## Целевой контракт (v1, для админки)

### `SiteContent` — корень

```ts
interface SiteContent {
  hero: HeroContent
  about: AboutContent
  workflow: WorkflowContent
  services: ServicesContent
  contact: ContactContent
  portfolio: PortfolioCase[]   // массив, динамический
}
```

### `HeroContent`

```ts
interface HeroContent {
  title: string                // "ПОРТФОЛИО"
  decorativeTitle: string      // "Творческое"
  ctaText: string              // "СМОТРЕТЬ РАБОТЫ"
  ctaTarget: string            // "#portfolio"
  image: AssetRef              // птичка
}
```

### `AboutContent`

```ts
interface AboutContent {
  intro: string                // приветствие
  introAccent: string          // "я - графический и веб-дизайнер"
  title: string                // "КТО"
  titleAccent: string          // "Я"
  photo: AssetRef
  decorativeTexts: string[]    // ["работа с визуальными образами для печатных медиа", ...]
  tools: ToolItem[]            // Figma, Tilda, Slides, ...
  outro: string
}

interface ToolItem {
  name: string                 // "Figma"
  icon: AssetRef
  multiline?: boolean          // Google Slides → "Google<br>Slides"
}

interface AssetRef {
  src: string                  // "/images/foo.png" или URL
  alt: string
  width?: number
  height?: number
}
```

### `WorkflowContent`

```ts
interface WorkflowContent {
  title: string                // "ЭТАПЫ"
  titleAccent: string          // "РАБОТЫ"
  steps: WorkflowStep[]
  pathImage: AssetRef          // SVG-путь (desktop версия)
  pathImages: { desktop: AssetRef; tablet: AssetRef; mobile: AssetRef }
}

interface WorkflowStep {
  id: string
  title: string                // "ЗНАКОМСТВО"
  description: string          // "установление контакта"
  multiline?: boolean
  // координаты маркера/текста вычисляются автоматически по индексу, не вручную
}
```

### `ServicesContent`

```ts
interface ServicesContent {
  title: string                // "СПЕКТР"
  titleAccent: string          // "УСЛУГ"
  items: ServiceItem[]
}

interface ServiceItem {
  id: string
  title: string                // "ВЕБ-ДИЗАЙН"
  titleMultiline?: boolean
  description: string
  // icon не нужен — звёздочки декоративные, не контентные
}
```

### `ContactContent`

```ts
interface ContactContent {
  title: string                // "СВЯЗЬ СО"
  titleAccent: string          // "МНОЙ"
  callToAction: string
  quote: string
  quoteAuthor: string
  socials: SocialLink[]
}

interface SocialLink {
  id: string                   // "vk" | "telegram" | "instagram" | ...
  label: string                // "ВКонтакте"
  url: string                  // "https://vk.com/russiankisa"
  qrCode: AssetRef             // превью QR-кода
}
```

### `PortfolioCase` (v1)

```ts
interface PortfolioCase {
  id: string                   // slug, генерируется автоматически из title
  number: number               // 1, 2, 3... — генерируется автоматически по порядку
  title: string                // КРАТКОЕ название кейса, опционально
  description: string          // может содержать HTML
  images: AssetRef[]
  layout: PortfolioLayout      // что и где показать
  tags?: string[]
  date?: string                // ISO date
  externalUrl?: string
  featured?: boolean
  status: 'draft' | 'published'
}

type PortfolioLayout =
  | { type: 'single'; align?: 'center' | 'left' | 'right' }
  | { type: 'two-devices'; primary: AssetRef; secondary: AssetRef }
  | { type: 'business-cards'; main: AssetRef; variants: AssetRef[] }
  | { type: 'cards-grid'; columns: number; rows: number }
  | { type: 'retro-pixel'; images: AssetRef[]; timeline: { start: string; end: string } }
```

### `AssetRef` (глобальный)

```ts
interface AssetRef {
  src: string                  // "/images/foo.png" или внешний URL
  alt: string                  // обязательно для SEO/a11y
  width?: number
  height?: number
  mimeType?: string            // для будущей поддержки video
}
```

## Принципы контракта

1. **Никаких координат** (top/left) в data → все layout-вычисления в компонентах
2. **Никаких CSS-классов** в data → компоненты сами решают стили по типу
3. **AssetRef** для всего что грузится (img, qr, иконки)
4. **i18n-ready**: все текстовые поля string (не enum), можно будет добавить `lang`
5. **Status** — для draft/publish в админке
6. **Slug для id** — генерация на бэке из title

## Что НЕ нужно в v1

- `version` / `createdAt` / `updatedAt` — это метаданные CMS, не контента
- `legacyClass` — уйдёт после очистки
- `variant` в текущем виде — заменится на `layout: PortfolioLayout`
- `number` вручную — генерируется автоматически

## Где живёт в коде

```
app/data/site-content.ts        ← типизированный singleton (v1)
app/composables/useSiteContent.ts ← accessor для будущего CMS
app/components/portfolio/Case*.vue ← layout-specific рендеры
```

## Когда это нужно

- **Сейчас**: определить структуру, мигрировать `portfolio.ts` под неё
- **До админки**: реализовать `useSiteContent` с возможностью подмены источника
- **При админке**: backend отдаёт JSON этой структуры → frontend рендерит как есть

## Как мигрировать существующий код

1. Сейчас: расширить `app/data/portfolio.ts` (только `portfolioCases` часть) до полной `SiteContent`
2. Сейчас: заменить `variant: 'devices' | ...` на `layout: { type: '...', ... }`
3. Сейчас: добавить `title` опционально, убрать `number` (auto-generate)
4. Сейчас: вынести текст всех секций в data (Hero, About, Services, Workflow, Contact)
5. Потом: `useSiteContent` → из async fetcher (CMS API)