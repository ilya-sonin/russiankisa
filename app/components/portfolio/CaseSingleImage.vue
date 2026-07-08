<template>
	<figure class="case-single-image" :class="`case-single-image--${layout.align ?? 'center'}`">
		<img class="case-single-image__image portfolio-device-animation trig-stagger-3" data-trig :src="layout.image.src" :alt="layout.image.alt" />
	</figure>
</template>

<script setup lang="ts">
import type { SingleImageLayout } from '~/types/site-content'

defineProps<{ layout: SingleImageLayout }>()
</script>

<style lang="scss" scoped>
.case-single-image {
	display: grid;
	margin: 0;
	min-height: clamp(20rem, 52vw, 42rem);
	align-items: center;

	&--left { justify-items: start; }
	&--center { justify-items: center; }
	&--right { justify-items: end; }

	&__image {
		width: min(100%, 52rem);
		max-height: clamp(18rem, 58vw, 40rem);
		object-fit: contain;
		filter: drop-shadow(0 1.25rem 2rem rgba(0, 0, 0, 0.12));
	}
}
</style>
