# Russiankisa

Статическое портфолио: Nuxt формирует HTML и ресурсы в `dist/`, без серверного API и админки.

## Разработка

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

## Сборка для публикации

```sh
corepack pnpm build
```

Готовый сайт находится в `dist/`. Тексты и данные портфолио хранятся в `content/` в Markdown и попадают в сайт во время сборки.

Шрифты загружаются с самого сайта из `public/fonts/`. Oranienbaum распространяется по лицензии из `public/fonts/Oranienbaum-LICENSE.txt`.

## QA адаптива

```sh
corepack pnpm run typecheck
corepack pnpm run test:e2e --workers=2
```

Матрица размеров и исправленные дефекты описаны в [отчёте визуального QA](docs/visual-qa.md).
