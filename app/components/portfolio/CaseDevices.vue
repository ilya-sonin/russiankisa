<template>
	<div class="case-devices">
		<figure class="case-devices__device case-devices__device--primary portfolio-device-animation trig-stagger-3" data-trig>
			<img :src="layout.primary.src" :alt="layout.primary.alt" />
		</figure>
		<figure class="case-devices__device case-devices__device--secondary portfolio-device-animation trig-stagger-4" data-trig>
			<img :src="layout.secondary.src" :alt="layout.secondary.alt" />
		</figure>
	</div>
</template>

<script setup lang="ts">
import type { TwoDevicesLayout } from '~/types/site-content'

defineProps<{ layout: TwoDevicesLayout }>()
</script>

<style lang="scss" scoped>
.case-devices {
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	gap: clamp(1.5rem, 4vw, 3rem);
	align-items: center;
	min-height: clamp(24rem, 58vw, 42rem);

	&__device {
		display: grid;
		justify-items: center;
		margin: 0;
	}

	&__device img {
		width: 100%;
		max-height: clamp(18rem, 58vw, 39rem);
		object-fit: contain;
		filter: drop-shadow(0 1.25rem 2rem rgba(0, 0, 0, 0.12));
	}

	&__device--primary img {
		max-width: 48rem;
	}

	&__device--secondary img {
		max-width: 22rem;
	}
}

@media (min-width: breakpoint(md)) {
	.case-devices {
		grid-template-columns: minmax(0, 2fr) minmax(10rem, 1fr);

		&__device--secondary {
			align-self: end;
		}
	}
}
</style>
