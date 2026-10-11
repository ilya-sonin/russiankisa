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
