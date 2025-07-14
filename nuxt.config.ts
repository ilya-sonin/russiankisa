// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Включаем TypeScript поддержку
  typescript: {
    typeCheck: true
  },
  
  // CSS конфигурация
  css: [],
  
  // Экспериментальные функции
  experimental: {
    restoreState: true
  },
  
  // Оптимизация производительности
  features: {
    inlineStyles: false
  }
})
