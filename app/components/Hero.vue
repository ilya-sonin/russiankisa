<template>
	<section class="hero" data-testid="section-hero">
		<div class="container hero__container">
			<figure class="hero__image hero__image--mobile hero-image-animation trig-stagger-1" data-trig>
				<img :src="content.image.src" :alt="content.image.alt" />
			</figure>

			<div class="hero__copy hero-title-animation trig-stagger-2" data-trig>
				<h1 class="hero-title hero__title">
					<span class="decorative-text hero__decorative">{{ content.decorativeTitle }}</span><br />
					<span>{{ content.title }}</span>
				</h1>
				<a :href="content.ctaTarget" class="btn hero__button trig-fade-in trig-stagger-3" data-trig>
					{{ content.ctaText }}
				</a>
			</div>

			<figure class="hero__image hero__image--desktop hero-image-animation trig-stagger-1" data-trig>
				<img :src="content.image.src" :alt="content.image.alt" />
			</figure>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { HeroContent } from '~/types/site-content'

defineProps<{ content: HeroContent }>()
</script>

<style lang="scss" scoped>
.hero {
	min-height: 100svh;
	padding: clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 8vw, 6rem);
	background-color: color(background);
	user-select: none;

	&__container {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-items: center;
		gap: clamp(1.5rem, 5vw, 4rem);
		min-height: calc(100svh - 8rem);
	}

	&__copy {
		display: grid;
		justify-items: center;
		gap: clamp(1.5rem, 4vw, 3rem);
		text-align: center;
	}

	&__title {
		line-height: 0.9;
	}

	&__decorative {
		display: inline-block;
		transform: translateX(0.12em) translateY(0.2em);
	}

	&__button {
		position: relative;
		z-index: 2;
	}

	&__image {
		margin: 0;
		justify-self: center;

		img {
			display: block;
			width: clamp(9rem, 32vw, 31.25rem);
			aspect-ratio: 500 / 512;
			object-fit: contain;
			pointer-events: none;
		}
	}

	&__image--desktop {
		display: none;
	}
}

@media (min-width: breakpoint(sm)) {
	.hero {
		&__container {
			grid-template-columns: minmax(0, 1.25fr) minmax(12rem, 0.75fr);
		}

		&__copy {
			justify-items: start;
			text-align: left;
		}

		&__image--mobile {
			display: none;
		}

		&__image--desktop {
			display: block;
		}
	}
}
</style>
