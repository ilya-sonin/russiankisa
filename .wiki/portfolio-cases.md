---
title: portfolio-cases — 12 кейсов портфолио
type: content
status: active
---

# portfolio-cases

Все 12 кейсов — это статические секции, каждая со своими изображениями, "Кейс N" меткой и описанием.

## Список

| # | Компонент | Размер (строк) | Изображения | Описание |
|---|-----------|----------------|-------------|----------|
| 1 | Portfolio.vue | 314 | case1-mac, case1-iphone | Yudaev.School (первый проект) |
| 2 | PortfolioCase2.vue | 291 | case2-tablet, case2-galaxy-tab | |
| 3 | PortfolioCase3.vue | 326 | case3-iphone, case3-ipad | |
| 4 | PortfolioCase4.vue | 279 | case4-tablet | |
| 5 | PortfolioCase5.vue | 295 | case5-ipad-large | |
| 6 | PortfolioCase6.vue | 280 | case6-mac | |
| 7 | PortfolioCase7.vue | 470 | case7-iphone, card-1..8 (back-1..8) | ⭐ самый большой — карточки |
| 8 | PortfolioCase8.vue | 365 | case8-tablet-right, case8-tablet-left | |
| 9 | PortfolioCase9.vue | 282 | case9-ipad-large | |
| 10 | PortfolioCase10.vue | 296 | pixel-image-1..3, tablet-vector | |
| 11 | PortfolioCase11.vue | 296 | (TODO: проверить) | |
| 12 | PortfolioCase12.vue | 363 | moodboard-main, business-card-1, business-card-2 | "Мудборд и визитная карточка компании - проект, выполненный в рамках обучения в центре АЗы" |

## Анатомия кейса (на примере PortfolioCase12)

```vue
<section class="portfolio-case12">
  <div class="portfolio-case12__container">
    <!-- Title (МОИ ПРОЕКТЫ, повторяется в каждом кейсе) -->
    <div class="portfolio-case12__title">
      <div class="portfolio-case12__title-decorative">МОИ</div>
      <div class="portfolio-case12__title-main">ПРОЕКТЫ</div>
    </div>

    <div class="portfolio-case12__content">
      <div class="portfolio-case12__case-label">
        <span>Кейс</span>
        <span>5</span>   <!-- ⚠ номер кейса, не совпадает с #5 в списке -->
      </div>

      <p class="portfolio-case12__description">...</p>

      <div class="portfolio-case12__images-layout">
        <div class="portfolio-case12__main-image">...</div>
        <div class="portfolio-case12__side-images">
          <div class="portfolio-case12__side-image--top">...</div>
          <div class="portfolio-case12__side-image--bottom">...</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Проблема дублирования

См. [[concepts/case-layout-duplication]]. Каждый `PortfolioCaseN.vue`:
- дублирует title (МОИ / ПРОЕКТЫ)
- дублирует case-label (Кейс + N)
- дублирует absolute-layout с `height: 832px`
- имеет собственные медиа-запросы для адаптива

**При добавлении нового кейса нужно копировать ~280-470 строк.**

## Контракты для будущего CMS

Когда появится админка, кейс должен иметь:
- `id`, `number` (для "Кейс N")
- `title` (опц., сейчас "МОИ ПРОЕКТЫ" — общий)
- `description` (русский текст)
- `images[]` с alt-текстами (для SEO + a11y)
- `tags` (опц., "веб-дизайн" / "полиграфия" и т.д.)
- `externalUrl` (опц., ссылка на сам проект если опубликован)
- `date` (опц., дата создания)
- `featured` (bool, для сортировки)

→ Сейчас всё это — **захардкожено** в каждом `.vue`.
