---
title: vertical-rl-text — фирменный приём
type: concept
status: active
---

# vertical-rl-text

## Что это

В нескольких секциях **заголовки написаны вертикально** (сверху вниз) — это фирменный приём, пришедший из дизайн-макета.

## Где используется

| Секция | Текст | Режим |
|--------|-------|-------|
| About | "КТО Я ?" | `writing-mode: vertical-rl` |
| Workflow | "ЭТАПЫ" | `writing-mode: vertical-rl` + `transform: rotate(180deg)` |
| Services | "СПЕКТР" + "УСЛУГ" | `writing-mode: vertical-rl` |
| Portfolio | "МОИ" + "ПРОЕКТЫ" | `writing-mode: vertical-rl` + `transform: rotate(180deg)` |
| PortfolioCase2..12 | "МОИ" + "ПРОЕКТЫ" | дублируется в каждом кейсе |
| ContactSection | "СВЯЗЬ СО МНОЙ" | `writing-mode: vertical-rl` |

## CSS

```scss
.workflow__title-vertical {
  font-family: font-family(primary);
  font-size: 7.4rem; // 118px
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: left;
  transform: rotate(180deg); // для "ЭТАПЫ" — чтобы читалось снизу вверх
}
```

## Mobile fallback

На mobile (`< 768px`) все `vertical-rl` переключаются на горизонтальный:

```scss
@media (max-width: calc(breakpoint('md') - 1px)) {
  .about__title-text {
    writing-mode: horizontal-tb;
    text-orientation: initial;
  }
}
```

## Проблемы

1. **Дублирование** — каждый кейс копирует эту конструкцию (см. [[concepts/case-layout-duplication]])
2. **Accessibility** — `writing-mode: vertical-rl` нормально читается скринридерами, но **в комбинации с `transform: rotate(180deg)`** — ломает порядок для AT. ⚠ TODO: протестировать с VoiceOver/NVDA.
3. **SEO** — порядок слов меняется (rotate 180°). Поисковики читают DOM-линейно, не должны пострадать, но стоит проверить.

## Альтернативы (для будущего)

- Использовать **CSS-кастомку** (как сейчас) — норм
- Использовать **SVG** с ручной вёрсткой текста — избыточно
- Использовать **библиотеку** (например, `css-vertical-text`) — overkill
