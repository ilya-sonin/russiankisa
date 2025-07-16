# Сборка и деплой RussianKisa Portfolio

## Статическая сборка для SEO

Приложение настроено для генерации статических файлов с помощью Nuxt.js для лучшего SEO.

### Локальная сборка

```bash
# Установка зависимостей
pnpm install

# Генерация статической сборки
pnpm run generate

# Превью локально
pnpm run preview
```

### Docker сборка и запуск

#### Простой запуск с Docker Compose

```bash
# Сборка и запуск
docker-compose up -d

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

#### Ручная сборка Docker

```bash
# Сборка образа
docker build -t russiankisa-portfolio .

# Запуск контейнера на порту 80
docker run -d -p 80:80 --name russiankisa russiankisa-portfolio
```

### Доступ к сайту

После запуска сайт будет доступен по адресу:
- `http://localhost` (порт 80)
- `http://0.0.0.0:80`

### Настройки SEO

✅ Статическая генерация всех страниц  
✅ Мета-теги для поисковых систем  
✅ Gzip сжатие  
✅ Кэширование статических ресурсов  
✅ Русская локализация (lang="ru")  

### Production деплой

Для production рекомендуется:
1. Использовать обратный прокси (nginx/Apache)
2. Настроить SSL/TLS сертификаты
3. Настроить мониторинг и логирование

```bash
# Пример с SSL через nginx
docker run -d \
  -p 443:80 \
  -v /path/to/ssl:/etc/nginx/ssl \
  russiankisa-portfolio
``` 