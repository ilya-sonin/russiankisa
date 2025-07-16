#!/bin/bash

# Скрипт автоматического деплоя RussianKisa Portfolio

set -e

echo "🚀 Запуск деплоя RussianKisa Portfolio..."

# Проверка Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен!"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен!"
    exit 1
fi

# Остановка существующих контейнеров
echo "🛑 Остановка существующих контейнеров..."
docker-compose down 2>/dev/null || true

# Сборка и запуск
echo "🔨 Сборка Docker образа..."
docker-compose build --no-cache

echo "🌟 Запуск контейнера..."
docker-compose up -d

# Проверка статуса
echo "⏳ Ожидание запуска сервиса..."
sleep 10

if docker-compose ps | grep -q "Up"; then
    echo "✅ Деплой успешно завершен!"
    echo "🌐 Сайт доступен по адресу: http://localhost"
    echo "📊 Проверка логов: docker-compose logs -f"
else
    echo "❌ Ошибка при запуске контейнера"
    docker-compose logs
    exit 1
fi 