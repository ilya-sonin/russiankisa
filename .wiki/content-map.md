---
title: content-map — карта секций, якорей, переводов
type: content
status: active
---

# content-map

## Якоря (anchors) на странице

| anchor | компонент | зачем |
|--------|-----------|-------|
| `#about` | About.vue | "Обо мне" в навигации |
| `#workflow` | Workflow.vue | "Этапы работы" в навигации |
| `#services` | Services.vue | "Услуги" в навигации |
| `#portfolio` | Portfolio.vue | кнопка "СМОТРЕТЬ РАБОТЫ" из Hero |
| `#contacts` | ContactSection.vue | "Контакты" в навигации (⚠️ **id не проставлен в ContactSection** — см. TODO) |

## Композиция страницы (app/pages/index.vue)

```
<Header />
<Hero />
<About />
<Workflow />
<Services />
<Portfolio />
<PortfolioCase2 />
<PortfolioCase3 />
... (Case4..12)
<ContactSection />
<DevScreenSize />
```

## Язык

Только русский. `useSeoMeta` в `index.vue` дублирует title/description на русском.
`htmlAttrs: { lang: 'ru' }` в `nuxt.config.ts:36`.

## SEO-мета (что есть)

```ts
title: 'RussianKisa - Творческое портфолио'
description: 'Творческое портфолио RussianKisa. Смотрите мои работы и узнайте больше обо мне.'
ogTitle: 'RussianKisa - Творческое портфолио'
ogDescription: (same)
ogType: 'website'
twitterCard: 'summary_large_image'
```

## SEO-мета (чего НЕТ)

- `og:image`, `og:url`, `og:locale`
- `<link rel="canonical">`
- `description` для каждой секции
- JSON-LD (`@context: schema.org/Person`)
- `robots.txt` есть, но минимальный (см. `public/robots.txt`)

## Контент по секциям

### Hero
- Заголовок: «Творческое ПОРТФОЛИО» (h1, hero-размер 228px на десктопе)
- CTA: «СМОТРЕТЬ РАБОТЫ» → `#portfolio`

### About
- Приветствие: «Привет и добро пожаловать в мой творческий уголок! Меня зовут Екатерина, я - графический и веб-дизайнер, превращаю визуальный код в искусство.»
- Заголовок: «КТО Я ?»
- Фото: `/images/about-photo.png`
- Инструменты: Figma, Tilda, Google Slides, PicsArt, Microsoft Office, Recraft AI, Midjourney
- Outro: «Моя работа помогает не только создавать стиль и узнаваемость...»

### Workflow (8 этапов)
1. ЗНАКОМСТВО — установление контакта
2. БРИФИНГ — выявление потребностей
3. ПРЕДОПЛАПЛАТА — финансовое подтверждение
4. ПОДПИСАНИЕ ДОГОВОРА — юридическое оформление
5. УТВЕРЖДЕНИЕ МАКЕТА — внесение правок
6. УТВЕРЖДЕНИЕ СВЁРСТАННОГО МАКЕТА — финальная проверка
7. СДАЧА ПРОЕКТА — передача работы
8. ОПЛАТА — расчёт

### Services (5 услуг)
1. ВЕБ-ДИЗАЙН — лендинги, многостраничные сайты
2. ДИЗАЙН ПОЛИГРАФИИ — постеры, афиши, флаеры, визитки, пригласительные
3. ПРЕЗЕНТАЦИИ — для бизнеса, обучения, личных проектов
4. ДИЗАЙН БАННЕРОВ — для сайтов и соцсетей
5. ЧЕК-ЛИСТЫ И ГАЙДЫ — наглядные памятки, инструкции

### Portfolio (12 кейсов)

Подробно: [[portfolio-cases]]

### Contact
- Призыв: «Каждый проект — это возможность рассказать новую историю. Хотите рассказать свою? Напишите мне!»
- Цитата: «Дизайн — это не просто внешний вид и ощущения. Дизайн — это то, как это работает...» — Стив Джобс
- 3 QR-кода: ВК (`vk.com/russiankisa`), Telegram (`t.me/kt_mch`), Instagram (`instagram.com/kt.mch`)
