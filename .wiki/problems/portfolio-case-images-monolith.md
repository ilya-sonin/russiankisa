---
title: portfolio-case-images-monolith — тех. долг после рефакторинга
type: problem
status: open
priority: medium
---

# portfolio-case-images-monolith

## Проблема

После codex-рефакторинга 2026-07-08 все изображения 12 кейсов рендерятся через **один компонент `PortfolioCaseImages.vue` — 3411 строк**.

Это **монолит**, который содержит legacy SCSS-координаты, специфичные для каждого кейса (`case1`, `case2`, `case7` и т.д.).

## Почему так получилось

Codex сознательно перенёс ВСЕ координаты из 11 удалённых `PortfolioCaseN.vue` в один файл, чтобы:
- ✅ сохранить визуальный результат 1-в-1 (нет доступа к макетам)
- ✅ убрать копипасту по 11 файлам (всё в одном месте)
- ✅ централизовать правки

Но это **временное решение**. Не финальное.

## Что плохо

1. Файл 3411 строк — слишком большой для одного компонента
2. `variant: 'devices' | 'retro' | 'cards-front' | 'cards-back' | 'business-cards'` — внутри один большой `if/else` или `switch`
3. Каждое добавление нового кейса → добавить новый блок в этот файл
4. Сложно тестировать отдельные варианты

## Что нужно сделать (следующий шаг)

**Разбить `PortfolioCaseImages.vue` на:**

```
components/portfolio/images/
├── DeviceImages.vue          # variant='devices' (case 1, 2, 3, 4, 5, 6, 8, 9)
├── RetroImages.vue           # variant='retro' (case 7) — pixel-images + timeline
├── CardGrid.vue              # variant='cards-front' | 'cards-back' (case 10, 11)
└── BusinessCardLayout.vue    # variant='business-cards' (case 12)
```

В `PortfolioCaseImages.vue` (или прямо в `PortfolioSection.vue`) сделать switch:

```vue
<script setup>
const props = defineProps<{ item: PortfolioCase }>()
</script>

<template>
  <DeviceImages v-if="item.variant === 'devices'" :images="item.images" :legacy-class="item.legacyClass" />
  <RetroImages v-else-if="item.variant === 'retro'" :images="item.images" />
  <CardGrid v-else-if="item.variant.startsWith('cards')" :images="item.images" />
  <BusinessCardLayout v-else-if="item.variant === 'business-cards'" :images="item.images" />
</template>
```

**Постепенно**, по мере того как у нас будет доступ к макетам или появится время переписать, **заменять legacy-координаты на нормальные grid/flex layouts**.

## Текущее состояние

Файл живёт и работает. **Prerender идентичен baseline по тексту/alt.** Можно использовать как есть ещё долго.

## Когда решать

- При **первой возможности** попасть в визуальную регрессию (визуальное расхождение с макетом) — переписать соответствующий variant-блок
- Перед **внедрением админки** — вынести варианты в отдельные компоненты (легче добавлять новые)
- Перед **e2e-тестами** — иметь отдельные компоненты проще тестировать изолированно

## Метрики

- **Сейчас**: 1 файл × 3411 строк = 3411
- **После разбиения** (ориентир): 4 файла × ~200-400 строк = 800-1600 строк + главный switch ~50 строк = **~900-1650 строк** (-50%)