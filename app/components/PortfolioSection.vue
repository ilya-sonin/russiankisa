<template>
	<div class="portfolio-section">
		<PortfolioCaseLayout
			v-for="item in portfolioCases"
			:key="item.id"
			:case-id="item.id"
			:case-number="item.number"
			:description="item.description"
			:variant="item.variant.includes('cards') ? 'cards' : 'standard'"
		>
			<PortfolioCaseImages :item="item" />
		</PortfolioCaseLayout>
	</div>
</template>

<script setup lang="ts">
import { portfolioCases } from '~/data/portfolio'
</script>

<style lang="scss" scoped>
.portfolio-section {
	width: 100%;
}
</style>
