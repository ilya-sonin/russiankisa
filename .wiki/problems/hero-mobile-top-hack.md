---
title: hero-mobile-top-hack — top: -100px
type: problem
status: open
priority: medium
---

# hero-mobile-top-hack

## Проблема

В `Hero.vue:35`:

```vue
<div class="flex flex-col sm:items-start items-center justify-center relative top-[-100px] sm:top-0">
  <h1 class="hero-title text-left">
    <span class="decorative-text relative top-[30px] left-[25px] sm:top-16 sm:left-16 md:top-24 md:left-24 lg:top-24 lg:left-28 xl:top-32 xl:left-32 2xl:top-36 2xl:left-36">
      Творческое
    </span>
    <br />
    <span>ПОРТФОЛИО</span>
  </h1>
</div>
```

`top: -100px` на mobile — попытка сдвинуть заголовок вверх, чтобы птичка и текст поместились. На sm+ сбрасывается в `top-0`.

## Почему хак

`<section class="h-screen relative overflow-hidden md:-mt-8">` — на 100vh экрана, flex-колонка с `justify-center` должна центрировать. Но птичка занимает место → заголовок уезжает вниз → приходится сдвигать вверх вручную.

## Где сломалось

- `top-[-100px]` — magic number, не масштабируется
- На landscape phone (`h < 500px`) — `-100px` от `h-screen` даёт overflow снизу
- На iPad (768×1024 portrait) — `-100px` смотрится странно (заголовок ближе к верху чем ожидается)
- На desktop (`sm+`) — сбрасывается в `sm:top-0`, что **визуально не центрирует** (текст прижат к верху)

## Решение

### A. Flex без absolute (правильный путь)

```vue
<section class="h-screen flex flex-col items-center justify-center">
  <img v-if="isMobile" src="/images/hero-image.png" class="w-[150px]" />
  <h1 class="hero-title text-center">
    <span class="decorative-text">Творческое</span>
    <br />
    <span>ПОРТФОЛИО</span>
  </h1>
  <a href="#portfolio" class="btn mt-8">СМОТРЕТЬ РАБОТЫ</a>
</section>
```

→ Центрирование через flex, без хаков.

### B. Grid

```vue
<section class="h-screen grid place-items-center">
  ...
</section>
```

### C. min-h вместо h + auto

```vue
<section class="min-h-screen flex flex-col items-center justify-center px-4">
```

→ На маленьких экранах секция растёт, а не обрезается.

## Рекомендация

Применить A (или C). Это 5-минутный фикс, но требует:
1. Решить, должна ли птичка быть **над** заголовком (mobile) или **рядом** (sm+)
2. Проверить, что кнопка «СМОТРЕТЬ РАБОТЫ» не налезает на птичку/текст

## Где ещё похожие хаки

- `Hero.vue:38` — 6 наборов `top-30px left-25px sm:top-16 sm:left-16 md:top-24 md:left-24 lg:...` — позиционирование декоративного текста «Творческое». Это не хак, но сильно усложняет понимание.
- `About.vue:355-364` — mobile title `font-size: 3xl`, `writing-mode: horizontal-tb` — сброс vertical-rl. Норм, но опять переписывание.
