---
title: case-layout-duplication — 11 кейсов, 11 копий
type: concept
status: active
---

# case-layout-duplication

## Проблема

`PortfolioCase2..12.vue` (11 файлов) — это **~3500 строк** (282-470 на файл), и они почти одинаковые. Каждый содержит:

```scss
.portfolio-caseN {
  // всегда одинаковое:
  background-color: #fff6f4;
  padding: 0;
  width: 100%;
  height: 832px;
  position: relative;
  overflow: hidden;

  &__container {
    position: relative;
    width: 1280px;
    height: 100%;
    margin: 0 auto;
  }

  &__title {  // всегда "МОИ / ПРОЕКТЫ"
    transform: rotate(180deg);
    position: absolute;
    left: 0;
    top: 79px;
    width: 124px;
    height: 674px;
    // ...
  }

  &__case-label {  // "Кейс + N"
    position: absolute;
    right: 36px;
    top: 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__description {  // одинаковая структура
    position: absolute;
    right: 17px;
    top: 41px;
    width: 1140px;
    height: 85px;
    font-family: 'Oranienbaum', serif;
    font-size: 27px;
    // ...
  }

  // responsive — одинаковая структура
  @media (max-width: 1600px) { /*...*/ }
  @media (max-width: 768px)   { /*...*/ }
}
```

## Что отличается между кейсами

Только:
- **Количество изображений** (1-3)
- **Имена файлов** (`case1-mac.png`, `case7-iphone.png`, etc)
- **Alt-тексты** (для SEO/a11y)
- **Текст описания** (русский)
- **Номер кейса** (1-12)
- **Иногда** — variant layouts (e.g. `case12` — main + 2 side-by-side)

## Последствия

1. **При добавлении кейса** → копировать ~300 строк + адаптировать absolute-координаты под изображения
2. **При багфиксе** в одном кейсе → нужно проверить все 11 (легко забыть)
3. **При рефакторе** стилей → менять в 11 местах
4. **Невозможно** сделать общую сортировку кейсов
5. **Невозможно** добавить новые поля (e.g. `tags`, `date`) без правки всех 11 файлов
6. **Дублирование** шрифтов в inline-стилях (`font-family: 'Oranienbaum', serif` vs `font-family(primary)`)

## Решения

### Короткое (3-4 дня работы)

**Вынести общую обёртку в `PortfolioCaseLayout.vue`:**

```vue
<!-- PortfolioCaseLayout.vue -->
<template>
  <section class="portfolio-case-layout">
    <div class="portfolio-case-layout__container">
      <div class="portfolio-case-layout__title">...</div>
      <div class="portfolio-case-layout__case-label">Кейс {{ number }}</div>
      <p class="portfolio-case-layout__description">{{ description }}</p>
      <div class="portfolio-case-layout__content">
        <slot />  <!-- сюда конкретные изображения -->
      </div>
    </div>
  </section>
</template>
```

```vue
<!-- PortfolioCase12.vue (после рефактора) -->
<template>
  <PortfolioCaseLayout :number="5" :description="desc">
    <div class="images-layout">
      <img src="/images/moodboard-main.png" />
      <img src="/images/business-card-1.png" />
      <img src="/images/business-card-2.png" />
    </div>
  </PortfolioCaseLayout>
</template>
```

✅ Убирает ~80% дублирования
✅ Меняешь layout в одном месте
❌ Не решает data-driven проблему (контент всё ещё hardcoded)

### Длинное (для админки)

**Сделать `<PortfolioCase>` data-driven:**

```vue
<!-- Portfolio.vue (главный) -->
<template>
  <section v-for="item in portfolio" :key="item.id">
    <PortfolioCaseLayout
      :number="item.number"
      :description="item.description"
    >
      <CaseImages :layout="item.imageLayout" :images="item.images" />
    </PortfolioCaseLayout>
  </section>
</template>
```

Где `portfolio` — массив объектов из CMS (см. [[concepts/cms-admin-pending]]).

## Рекомендация

- **Если фаза 1 (вёрстка) — без изменений контента**: оставить как есть, сделать TODO
- **Если планируется добавить/убрать кейс** — применить короткое решение (PortfolioCaseLayout)
- **Если планируется админка** — сразу переходить к длинному решению

## Где это может стрельнуть

- При багфиксе в `__title` (vertical-rl повёрнут) — нужно фиксить в 11 местах
- При изменении breakpoint'ов в `__title` mobile — опять 11 правок
- При добавлении analytics-событий на клик по изображению — 11 × по количеству img
