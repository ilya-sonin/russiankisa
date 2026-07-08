---
title: trig-animations — кастомные CSS-анимации
type: design-system
status: active
---

# trig-animations

## Как работает

1. HTML: `<div class="trig-fade-in trig-stagger-2" data-trig>`
2. CSS: `.trig-fade-in { opacity: 0; transform: translateY(30px); transition: all 0.8s ...; }`
3. JS (`trig-js` из CDN): при попадании в viewport добавляет класс `.trig` на элемент
4. CSS: `.trig-fade-in.trig { opacity: 1; transform: translateY(0); }` → анимация проигрывается

## Классы анимаций (см. `app/assets/scss/trig-animations.scss`)

### Базовые (используются повсюду)

| Класс | Начальное | Конечное | Transition |
|-------|-----------|----------|------------|
| `trig-fade-in` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s |
| `trig-slide-left` | `opacity: 0; translateX(-50px)` | `opacity: 1; translateX(0)` | 0.8s |
| `trig-slide-right` | `opacity: 0; translateX(50px)` | `opacity: 1; translateX(0)` | 0.8s |
| `trig-scale-up` | `opacity: 0; scale(0.8)` | `opacity: 1; scale(1)` | 0.8s |
| `trig-rotate-in` | `opacity: 0; rotate(-10deg) scale(0.9)` | `opacity: 1; rotate(0) scale(1)` | 0.8s |

### Stagger (задержка)

```
.trig-stagger-1 { transition-delay: 0.1s; }
.trig-stagger-2 { transition-delay: 0.2s; }
.trig-stagger-3 { transition-delay: 0.3s; }
.trig-stagger-4 { transition-delay: 0.4s; }
.trig-stagger-5 { transition-delay: 0.5s; }
.trig-stagger-6 { transition-delay: 0.6s; }
.trig-stagger-7 { transition-delay: 0.7s; }
.trig-stagger-8 { transition-delay: 0.8s; }
```

### Hero-специфичные

| Класс | Начальное | Конечное |
|-------|-----------|----------|
| `hero-title-animation` | `translateY(50px) scale(0.95)` | `translateY(0) scale(1)` (1.2s) |
| `hero-decorative-animation` | `translateX(-30px) rotate(-5deg)` | `translateX(0) rotate(0)` (1s) |
| `hero-image-animation` | `translateX(30px) scale(0.9)` | `translateX(0) scale(1)` (1.2s) |

### Section-специфичные

| Класс | Где | Описание |
|-------|-----|----------|
| `about-photo-animation` | About.vue | scale + rotate |
| `about-tools-animation` | About.vue | простой translateY |
| `workflow-step-animation` | Workflow.vue | scale + translateY |
| `workflow-path-animation` | Workflow.vue | stroke-dashoffset (для SVG-пути, но не используется в коде — TODO) |
| `services-star-animation` | Services.vue | scale + rotate 180° (звёздочки) |
| `services-card-animation` | Services.vue | translateY |
| `portfolio-device-animation` | Portfolio.vue + кейсы | translateY + rotateY |
| `contact-qr-animation` | ContactSection.vue | scale + rotate |

### Параллакс (объявлены, но не используются)

- `.trig-parallax` → `transform: translateY(var(--trig-px, 0))`
- `.trig-parallax-reverse` → `transform: translateY(var(--trig-px-reverse, 0))`

## Мобильные оптимизации (trig-mobile-optimizations.scss)

```scss
@media (max-width: 480px) {
  [data-trig] { transition-duration: 0.3s !important; }
  // + сокращённые stagger-задержки
}

@media (prefers-reduced-motion: reduce) {
  [data-trig] { transition: none !important; animation: none !important; transform: none !important; opacity: 1 !important; }
}

@media (prefers-reduced-motion: reduce), (update: slow) {
  // отключаем сложные анимации для battery saver
}

@media (hover: none) and (pointer: coarse) {
  [data-trig] { transition-timing-function: ease-out; }
}
```

## Что важно для подагента

- **trig-js загружается из CDN** — не из node_modules. Зависимость `trig-js` в package.json **не используется напрямую**.
- Если меняешь CSS-классы анимаций — обнови и Hero.vue, и About.vue, и т.д. (везде, где они применены).
- Если убираешь CDN-скрипт — нужно убрать **все** `data-trig` атрибуты иначе анимации не сработают, но элементы останутся скрытыми (`opacity: 0`).
- **Параллакс не используется** — классы объявлены, но `trig.js` их не навешивает (или навешивает, но без эффекта).
