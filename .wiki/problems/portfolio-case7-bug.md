---
title: portfolio-case7-bug — вложенный &-main блок
type: problem
status: open
priority: medium
---

# portfolio-case7-bug

## Проблема

В `PortfolioCase7.vue:122-128` (исходный файл) — **опечатка**: внутри блока `&-main { ... }` вложен ещё один блок `&-main { ... }`.

```scss
&__title {
  ...
  &-main {
    -main {                    // ⚠ ВЛОЖЕННЫЙ &-main, ЭТО ОПЕЧАТКА
      font-size: font-size('6xl');
      writing-mode: initial;
      // ...
    }
    font-family: font-family(primary);
    font-size: 7.4rem; // 140px
    // ...
  }
}
```

SCSS интерпретирует `&-main {` внутри `&-main {` как **селектор `.portfolio-case7__title-main-main`** (с `-main` суффиксом дважды). Такого класса в HTML нет → **все правила из вложенного блока мёртвые**.

## Что это значит

Правила:
```scss
font-size: font-size('6xl');   // 54px
writing-mode: initial;
text-orientation: initial;
display: inline;
position: static;
margin-right: spacing(2);
```

**никогда не применяются**. Они бы использовались, если бы был селектор `.portfolio-case7__title-main-main`, но такого нет.

## Влияние

**Только на PortfolioCase7.vue.** Остальные кейсы (PortfolioCase2..12) используют правильную структуру без вложенности.

## Решение

В исходном виде: удалить вложенный `&-main { ... }` блок (строки 122-128).

**Но!** Этот файл будет **удалён в ходе рефакторинга** (см. [[concepts/case-layout-duplication]] и план codex-сессии). Так что баг исчезнет автоматически.

## Когда проверять

- При codex-рефакторинге: убедиться, что новый `PortfolioCaseLayout.vue` не содержит этой ошибки.
- После рефакторинга: проверить, что mobile-стили у case 7 работают (если они использовали вложенный блок для чего-то).