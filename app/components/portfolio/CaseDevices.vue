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
	display: flex;
	align-items: flex-end;
	justify-content: center;
	gap: clamp(0.5rem, 2vw, 1.5rem);
	min-height: 0;

	&__device {
		display: grid;
		justify-items: center;
		margin: 0;
	}

	&__device--primary {
		flex: 1 1 72%;
	}

	&__device--secondary {
		flex: 0 1 28%;
		align-self: flex-end;
	}

	&__device img {
		width: 100%;
		max-height: min(62svh, 38rem);
		object-fit: contain;
		filter: drop-shadow(0 1.25rem 2rem rgba(0, 0, 0, 0.12));
	}

	&__device--primary img {
		max-width: 48rem;
	}

	&__device--secondary img {
		max-width: 20rem;
	}
}

@media (min-width: breakpoint(md)) {
	.case-devices {
		gap: clamp(1.5rem, 4vw, 3rem);
	}
}
</style>
