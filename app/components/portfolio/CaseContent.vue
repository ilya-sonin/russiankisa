<template>
	<CaseSingleImage v-if="item.layout.type === 'single'" :layout="item.layout" />
	<CaseDevices v-else-if="item.layout.type === 'two-devices'" :layout="item.layout" :images="item.images" />
	<CaseCardsGrid v-else-if="item.layout.type === 'cards-grid'" :layout="item.layout" :images="item.images" />
	<CaseBusinessCards v-else-if="item.layout.type === 'business-cards'" :layout="item.layout" />
</template>

<script setup lang="ts">
import CaseBusinessCards from '~/components/portfolio/CaseBusinessCards.vue'
import CaseCardsGrid from '~/components/portfolio/CaseCardsGrid.vue'
import CaseDevices from '~/components/portfolio/CaseDevices.vue'
import CaseSingleImage from '~/components/portfolio/CaseSingleImage.vue'
import type { PortfolioCase } from '~/types/site-content'

defineProps<{ item: PortfolioCase }>()
</script>