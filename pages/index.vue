<script setup lang="ts">
// SEO для главной страницы
useSeoMeta({
  title: 'Главная страница - Nuxt App',
  description: 'Добро пожаловать в современное Nuxt приложение'
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style scoped>
div {
  padding: 2rem;
}
</style> 