<template>
	<div
		v-if="isDev"
		class="fixed bottom-4 left-4 bg-text-primary text-background px-3 py-2 rounded-md text-sm font-mono z-[9999] shadow-lg"
	>
		<span class="sm:hidden">xs</span>
		<span class="hidden sm:inline md:hidden">sm (550px+)</span>
		<span class="hidden md:inline tablet:hidden">md (768px+)</span>
		<span class="hidden tablet:inline lg:hidden">tablet (900px+)</span>
		<span class="hidden lg:inline xl:hidden">lg (1024px+)</span>
		<span class="hidden xl:inline 2xl:hidden">xl (1280px+)</span>
		<span class="hidden 2xl:inline">2xl (1536px+)</span>
	</div>
</template>

<script setup>
const isDev = process.env.NODE_ENV === 'development'
</script>
