<script setup>
useSeoMeta({
	title: 'RussianKisa - Творческое портфолио',
	description:
		'Творческое портфолио RussianKisa. Смотрите мои работы и узнайте больше обо мне.',
	ogTitle: 'RussianKisa - Творческое портфолио',
	ogDescription:
		'Творческое портфолио RussianKisa. Смотрите мои работы и узнайте больше обо мне.',
	ogType: 'website',
	twitterCard: 'summary_large_image',
})
</script>

<template>
	<div class="page">
		<Header />
		<Hero />
		<About />
		<Workflow />
		<Services />
		<Portfolio />
		<ContactSection />
		<DevScreenSize />
	</div>
</template>

<style lang="scss" scoped>
.page {
	min-height: 100vh;
	background-color: color(background);
}
</style>
