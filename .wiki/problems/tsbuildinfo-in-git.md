---
title: tsbuildinfo-in-git — TypeScript артефакт в репозитории
type: problem
status: open
priority: low
---

# tsbuildinfo-in-git

## Проблема

Файл `tsconfig.tsbuildinfo` (33 KB) лежит в репозитории и не в `.gitignore`.

## Что это

TypeScript создаёт `.tsbuildinfo` для **incremental compilation** — хранит хеши файлов, чтобы перекомпилировать только изменённое. По сути — кеш.

## Почему нельзя коммитить

1. **Бинарный файл** — при каждом `pnpm typecheck` обновляется
2. **Локальный кеш** — у каждого разработчика свой
3. **Ломает git status** — постоянно «modified» без причины
4. **Конфликты** при merge

## Решение

Добавить в `.gitignore`:

```gitignore
# TypeScript build info
*.tsbuildinfo
```

И удалить из репо:

```bash
git rm --cached tsconfig.tsbuildinfo
echo "*.tsbuildinfo" >> .gitignore
git add .gitignore
git commit -m "chore: ignore tsbuildinfo, remove from tracking"
```

## Где наблюдается

`/Volumes/developer/_main/_projects/russiankisa/tsconfig.tsbuildinfo` — 33 KB
