<template>
	<section id="portfolio" class="portfolio" data-testid="section-portfolio">
		<PortfolioSection :cases="cases" />
	</section>
</template>

<script setup lang="ts">
import type { PortfolioCase } from '~/types/site-content'

defineProps<{ cases: PortfolioCase[] }>()
</script>

<style lang="scss" scoped>
.portfolio {
	width: 100%;
	background-color: color(background);
}
</style>
