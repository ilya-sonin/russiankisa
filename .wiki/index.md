---
title: russiankisa — индекс wiki
description: LLM Wiki проекта russiankisa (Karpathy pattern). Сайт-визитка портфолио на Nuxt 4.
type: index
status: active
owner: Илья Сонин
created: 2026-07-08
last_updated: 2026-07-08
---

# russiankisa — визитка портфолио (LLM Wiki)

LLM Wiki этого проекта по паттерну Karpathy (llm-wiki v3.1). Каждая страница — атомарный, плотно написанный документ, который можно скормить агенту как контекст.

## 0. Точка входа

- [[project-overview]] — что это, цели, аудитория, владелец, стадия
- [[architecture]] — Nuxt 4, файловая структура, ключевые модули
- [[stack]] — версии, зависимости, лицензии
- [[current-state]] — что готово, что нет, технический долг

## 1. Домен

- [[content-map]] — карта секций, компонентов, якорей, переводов
- [[portfolio-cases]] — 11 кейсов портфолио, изображения, контракты

## 2. Архитектура и стиль

- [[styling-system]] — Tailwind config, SCSS-переменные, breakpoint-сетка, шрифты
- [[trig-animations]] — кастомные CSS-анимации, классы, интеграция с trig-js
- [[layout-absolute-pattern]] — почему всё absolute, последствия, альтернативы
- [[responsive-strategy]] — 6 breakpoint'ов, mobile-first vs desktop-first

## 3. Сущности (entities/)

- [[entities/components]] — каталог 17 компонентов
- [[entities/design-assets]] — шрифты, изображения, иконки
- [[entities/docker]] — multi-stage build, лимиты памяти, presets

## 4. Концепции (concepts/)

- [[concepts/cms-admin-pending]] — будущая админка, требования
- [[concepts/vertical-rl-text]] — фирменный приём с вертикальным текстом
- [[concepts/case-layout-duplication]] — 11 копий
- [[concepts/cms-content-schema]] — контракт данных для админки

## 5. Проблемы / баги

- [[problems/tsbuildinfo-in-git]] — `tsconfig.tsbuildinfo` в репо
- [[problems/stagewise-not-wired]] — пакет в devDeps, не подключён
- [[problems/hardcoded-px-layout]] — absolute с px, ломается на нестандартных экранах
- [[problems/hero-mobile-top-hack]]
- [[problems/portfolio-case7-bug]]
- [[problems/data-driven-cases-needed]]

## 6. Решения / принятые

- [[decisions/nuxt-4-alpha]] — почему alpha, риски
- [[decisions/vanilla-css-animations]] — почему не библиотека, почему CSS

## 7. Сессии / история

- [[sessions/2026-07-08-init]] — первая сессия: разведка + создание wiki
- [[sessions/2026-07-08-refactor]] — codex-рефакторинг (completed)
- [[sessions/2026-07-08-cleanup]] — codex радикальная зачистка (in-progress)

---

## Как пользоваться

1. **Новая задача по проекту**: сначала прочитай `index.md` (ты здесь), затем `project-overview` + `current-state`, затем — нужные секции.
2. **Контекст для подагента**: копируй нужные страницы в промпт (см. [[delegation-context-template]] — TODO).
3. **Обновление wiki**: после задачи, в которой узнал что-то новое (баг, паттерн, решение) — добавь/обнови страницу. Не откладывай.
4. **Связи**: используй `[[entity-name]]` для перекрёстных ссылок. Поддерживай граф связей актуальным.
