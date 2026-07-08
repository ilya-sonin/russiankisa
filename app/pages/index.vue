<script setup lang="ts">
const { siteContent } = await useSiteContent()

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
		<Header :content="siteContent!.header" />
		<Hero :content="siteContent!.hero" />
		<About :content="siteContent!.about" />
		<Workflow :content="siteContent!.workflow" />
		<Services :content="siteContent!.services" />
		<Portfolio :cases="siteContent!.portfolio" />
		<ContactSection :content="siteContent!.contact" />
		<DevScreenSize />
	</div>
</template>

<style lang="scss" scoped>
.page {
	min-height: 100vh;
	background-color: color(background);
}
</style>