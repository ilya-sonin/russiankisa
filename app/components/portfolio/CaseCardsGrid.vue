<template>
	<div
		class="case-cards-grid"
		:style="{ '--case-columns': String(layout.columns) }"
	>
		<figure
			v-for="(image, index) in images"
			:key="`${image.src}-${index}`"
			class="case-cards-grid__card portfolio-device-animation"
			:class="`trig-stagger-${(index % 8) + 1}`"
			data-trig
		>
			<img :src="image.src" :alt="image.alt" />
		</figure>
	</div>
</template>

<script setup lang="ts">
import type { AssetRef, CardsGridLayout } from '~/types/site-content'

defineProps<{ layout: CardsGridLayout; images: AssetRef[] }>()
</script>

<style lang="scss" scoped>
.case-cards-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
	gap: clamp(1rem, 2.5vw, 2rem);
	align-items: center;
	padding: clamp(1rem, 3vw, 2rem) 0;

	&__card {
		margin: 0;
		border-radius: border-radius(xl);
		overflow: hidden;
		background-color: color(white);
		box-shadow: shadow(md);
	}

	&__card img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
}

@media (min-width: breakpoint(lg)) {
	.case-cards-grid {
		grid-template-columns: repeat(var(--case-columns), minmax(0, 1fr));
	}
}
</style>
