<template>
	<div class="portfolio-section">
		<PortfolioCaseLayout v-for="item in cases" :key="item.id" :item="item" />
	</div>
</template>

<script setup lang="ts">
import type { PortfolioCase } from '~/types/site-content'

defineProps<{ cases: PortfolioCase[] }>()
</script>

<style lang="scss" scoped>
.portfolio-section {
	width: 100%;
}
</style>
