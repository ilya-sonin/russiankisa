# Документация анимаций Trig.js для проекта RussianKisa

## 🎬 Обзор внедренных анимаций

Проект теперь использует библиотеку Trig.js для создания плавных анимаций появления элементов при скролле. Анимации оптимизированы для всех типов устройств и учитывают пользовательские предпочтения.

## 📦 Структура файлов

```
assets/scss/
├── trig-animations.scss           # Основные CSS анимации
├── trig-mobile-optimizations.scss # Оптимизации для мобильных
└── main.scss                      # Основной файл стилей
```

## 🎯 Анимации по секциям

### Header
- **Навигация**: `trig-slide-left` (слева) и `trig-slide-right` (справа)
- **Логотип**: `trig-scale-up` с масштабированием
- **Последовательность**: stagger-анимация для плавного появления

### Hero секция
- **Декоративный текст**: `hero-decorative-animation` с поворотом
- **Заголовок**: `hero-title-animation` с масштабированием 
- **Изображение**: `hero-image-animation` со сдвигом справа
- **Кнопка**: `trig-fade-in` с задержкой

### About секция
- **Текст**: `trig-fade-in` для плавного появления
- **Заголовок**: `trig-slide-left` со сдвигом слева
- **Фото**: `about-photo-animation` с поворотом и масштабированием
- **Инструменты**: `about-tools-animation` с stagger-эффектом

### Workflow секция
- **Заголовок**: `trig-slide-left` 
- **Путь**: `workflow-path-animation` с анимацией прорисовки линии
- **Шаги**: `workflow-step-animation` с последовательным появлением

### Services секция
- **Заголовок**: `trig-fade-in`
- **Звезды**: `services-star-animation` с вращением и масштабированием
- **Карточки услуг**: `services-card-animation` с подъемом снизу

### Portfolio секции (все PortfolioCase 1-12)
- **Заголовки**: `trig-slide-left` или `trig-slide-right`
- **Описания**: `trig-fade-in`
- **Метки кейсов**: `trig-scale-up`
- **Устройства**: `portfolio-device-animation` с 3D-эффектом
- **Карточки** (Case10,11): `trig-scale-up` с последовательным появлением
- **Временная шкала** (Case7): анимация линии и меток времени
- **Пиксельные изображения** (Case7): `trig-scale-up` с задержками
- **Группы изображений** (Case8,12): `portfolio-device-animation` для каждого элемента

### ContactSection
- **Заголовок**: `trig-slide-left`
- **Текст**: `trig-fade-in` с задержками
- **QR-коды**: `contact-qr-animation` с поворотом и масштабированием

## 🎨 Типы анимаций

### Базовые анимации
- `trig-fade-in` - Плавное появление с подъемом
- `trig-slide-left` - Сдвиг слева
- `trig-slide-right` - Сдвиг справа  
- `trig-scale-up` - Масштабирование
- `trig-rotate-in` - Поворот с появлением

### Специальные анимации
- `hero-*-animation` - Уникальные анимации для Hero секции
- `about-*-animation` - Анимации для About секции
- `workflow-*-animation` - Анимации для Workflow секции
- `services-*-animation` - Анимации для Services секции
- `portfolio-device-animation` - 3D анимации устройств
- `contact-qr-animation` - Анимации QR-кодов

### Stagger эффекты
- `trig-stagger-1` до `trig-stagger-8` - Последовательное появление элементов

## 📱 Мобильная оптимизация

### Ускорение на малых экранах
- Сокращение длительности анимаций до 0.3s на экранах < 480px
- Уменьшение задержек stagger-анимаций
- Упрощение сложных transform-эффектов

### Доступность
- Полное отключение анимаций при `prefers-reduced-motion: reduce`
- Оптимизация для battery saver режима
- Адаптация для touch-устройств

## ⚙️ Настройка

### Добавление новых анимаций
1. Создайте CSS класс в `trig-animations.scss`
2. Добавьте `data-trig` атрибут к элементу
3. Примените класс анимации
4. Опционально добавьте `trig-stagger-*` для последовательности

### Пример использования
```html
<div class="my-element trig-fade-in trig-stagger-2" data-trig>
  Контент элемента
</div>
```

## 🎛️ Конфигурация Trig.js

Библиотека подключена через CDN в `nuxt.config.ts`:
```javascript
script: [
  {
    src: 'https://cdn.jsdelivr.net/npm/trig-js/src/trig.min.js',
    defer: true
  }
]
```

## 🚀 Производительность

- Использование CSS transitions вместо JavaScript анимаций
- GPU-ускорение через transform свойства
- Оптимизация для слабых устройств
- Lazy-загрузка анимаций при появлении в viewport

## 📊 Браузерная совместимость

- Chrome/Edge 60+
- Firefox 55+ 
- Safari 12+
- iOS Safari 12+
- Android Chrome 60+

## 🛠️ Отладка

1. Откройте DevTools
2. Добавьте класс `trig` к элементу для принудительного запуска
3. Проверьте CSS переменные Trig.js в Elements панели
4. Используйте Performance панель для анализа производительности

---

Все анимации настроены для создания плавного и профессионального пользовательского опыта, подчеркивающего творческий характер портфолио RussianKisa. 