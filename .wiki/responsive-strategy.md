---
title: responsive-strategy — 6 breakpoint'ов
type: design-system
status: active
---

# responsive-strategy

## Breakpoint-сетка (повтор [[styling-system]])

```
xs:    <550
sm:    550+
md:    768+
tablet: 900+   ← кастомный
lg:    1024+
xl:    1280+
2xl:   1536+
```

## Mobile-first vs Desktop-first

Проект **НЕ mobile-first**. Скорее **desktop-first**:
- Главный layout — десктопный absolute 1280×832
- На мобильных — `@media (max-width: ...)` переписывает всё

В SCSS-файлах типично:
```scss
.about {
  // desktop-стили (по умолчанию)
  &__content { height: 832px; }
  // ...absolute-координаты
}

@media (max-width: calc(breakpoint('md') - 1px)) {
  .about {
    // mobile-стили — ПЕРЕОПРЕДЕЛЯЮТ
    &__content { display: flex; flex-direction: column; height: auto; }
  }
}
```

⚠ Это **не mobile-first** (тот бы писал `@media (min-width: 768px)`).

## Hero — responsive (mobile)

Hero.vue переключает 2 версии картинки (птички):

```vue
<!-- xs: птичка над заголовком -->
<div class="sm:hidden relative left-12 hero-image-animation trig-stagger-1">
  <img src="/images/hero-image.png" class="w-[150px] h-[153px]" />
</div>

<!-- sm+: птичка справа, absolute -->
<div class="hidden sm:block absolute right-0 bottom-10 md:bottom-14 ...">
  <img src="/images/hero-image.png" class="w-[250px] h-[256px] md:w-[300px] md:h-[307px] lg:w-[400px] lg:h-[410px] xl:w-[450px] xl:h-[461px] 2xl:w-[500px] 2xl:h-[512px]" />
</div>
```

→ **Дублируется разметка**, но разные размеры/позиции. Типичный подход.

## Проблемы адаптива

| # | Проблема | Где |
|---|----------|-----|
| 1 | Hero `top: -100px sm:top-0` — на sm/md хак компенсирует absolute | Hero.vue:35 |
| 2 | About desktop (`height: 832px`, `left: 640px`) → полностью ломается на <768 | About.vue:216 |
| 3 | Workflow desktop (`left: 210px`, `width: 1054px`) — на tablet всё сжимается, на mobile перестраивается в column | Workflow.vue:178 |
| 4 | Services desktop (`width: 1084px` на items) — на mobile cards перестраиваются | Services.vue:205 |
| 5 | PortfolioCaseN — все используют `width: 1280px` напрямую (не container!) | Все Case*.vue |
| 6 | Контейнер `.container` имеет разные max-width на breakpoints, но в кейсах он не используется | ContactSection.vue:83 |

## Что видит пользователь (sm 320-550)

- Header: упрощённый, бургер появляется
- Hero: птичка над заголовком, текст меньше
- About: одна колонка, фото по центру, инструменты 33% ширины
- Workflow: список карточек
- Services: карточки одна под другой
- Portfolio: устройства стопкой
- Contact: QR-коды стопкой

## Что видит пользователь (lg 1024-1280)

- Близко к десктопу, но с reduced sizes
- Hero-title: `text-hero-lg` (10rem = 160px)
- About: ещё absolute, но title меньше

## Что видит пользователь (xl 1280+)

- Дизайн-целевой. 1280×832 секции.
- Hero-title: 228px
- About: 832px высота, всё на своих местах

## TODO (подагенту)

- [ ] Проверить реальное поведение на 1440, 1920 (где 832px выглядит «маленьким»)
- [ ] Проверить landscape phone (высота <500px) — что с Hero
- [ ] Проверить tablet portrait 768-900 (где промежуточные стили)
