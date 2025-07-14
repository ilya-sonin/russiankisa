<script setup lang="ts">
import VuePlugin from '@stagewise-plugins/vue'
import { initToolbar } from '@stagewise/toolbar'

useSeoMeta({
	title: 'Nuxt App',
	description: 'Современное Nuxt приложение с поддержкой TypeScript',
})

onMounted(() => {
	if (import.meta.dev) {
		initToolbar({
			plugins: [VuePlugin],
		})
	}
})
</script>

<template>
	<div>
		<NuxtPage />
	</div>
</template>

<style scoped>
div {
	min-height: 100vh;
}
</style>
