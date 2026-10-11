<template>
	<div class="case-business-cards">
		<figure class="case-business-cards__main portfolio-device-animation trig-stagger-3" data-trig>
			<img :src="layout.main.src" :alt="layout.main.alt" />
		</figure>

		<div class="case-business-cards__variants">
			<figure
				v-for="(image, index) in layout.variants"
				:key="image.src"
				class="case-business-cards__variant portfolio-device-animation"
				:class="`trig-stagger-${index + 4}`"
				data-trig
			>
				<img :src="image.src" :alt="image.alt" />
			</figure>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BusinessCardsLayout } from '~/types/site-content'

defineProps<{ layout: BusinessCardsLayout }>()
</script>

<style lang="scss" scoped>
.case-business-cards {
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	gap: clamp(1rem, 3vw, 2.5rem);
	align-items: center;
	padding: clamp(0.5rem, 2vw, 1.5rem) 0;

	figure {
		margin: 0;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 1.25rem 2rem rgba(0, 0, 0, 0.12));
	}

	&__main img {
		max-height: min(60svh, 36rem);
	}

	&__variants {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(0.75rem, 2vw, 1.5rem);
	}
}

@media (min-width: breakpoint(md)) {
	.case-business-cards {
		grid-template-columns: minmax(0, 1.5fr) minmax(14rem, 0.85fr);

		&__variants {
			grid-template-columns: 1fr;
		}
	}
}
</style>
