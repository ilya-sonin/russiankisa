<template>
	<section class="hero" data-testid="section-hero">
		<div class="container hero__container">
			<figure class="hero__image hero__image--mobile hero-image-animation trig-stagger-1" data-trig>
				<img :src="content.image.src" :alt="content.image.alt" />
			</figure>

			<div class="hero__copy hero-title-animation trig-stagger-2" data-trig>
				<h1 class="hero__title">
					<span class="decorative-text hero__decorative">{{ content.decorativeTitle }}</span>
					<span class="hero__main-title">{{ content.title }}</span>
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
	position: relative;
	display: grid;
	min-height: 100svh;
	padding: calc(var(--header-height) + clamp(1.75rem, 5vh, 3.75rem)) 0 clamp(2.5rem, 6vh, 5rem);
	background:
		radial-gradient(circle at 82% 72%, rgba(color(primary), 0.045), transparent 26rem),
		color(background);
	overflow: hidden;
	user-select: none;

	&__container {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-content: center;
		justify-items: center;
		gap: clamp(0.75rem, 3vh, 1.75rem);
	}

	&__copy {
		display: grid;
		width: 100%;
		container-type: inline-size;
		justify-items: center;
		gap: clamp(1.5rem, 4vh, 2.5rem);
		text-align: center;
	}

	&__title {
		display: grid;
		width: 100%;
		justify-items: center;
		gap: 0.1em;
		font-family: font-family(primary);
		font-size: clamp(2.4rem, 13vw, 6.5rem);
		font-size: clamp(2.4rem, 16cqi, 6.5rem);
		font-weight: font-weight(normal);
		line-height: 0.95;
		letter-spacing: -0.025em;
	}

	&__decorative {
		position: relative;
		z-index: 1;
		font-size: 1.25em;
		line-height: 0.8;
		transform: rotate(-2deg);
	}

	&__main-title {
		position: relative;
		z-index: 0;
		display: block;
		white-space: nowrap;
	}

	&__button {
		position: relative;
		z-index: 2;
		min-width: min(100%, 15rem);
	}

	&__image {
		margin: 0;
		justify-self: center;

		img {
			display: block;
			width: clamp(9rem, 36vw, 13rem);
			aspect-ratio: 500 / 512;
			object-fit: contain;
			pointer-events: none;
			filter: drop-shadow(0 1.5rem 2rem rgba(color(primary), 0.09));
		}
	}

	&__image--desktop {
		display: none;
	}
}

@media (min-width: breakpoint(tablet)) {
	.hero {
		&__container {
			grid-template-columns: minmax(0, 1.75fr) minmax(0, 0.65fr);
			align-items: center;
			justify-items: stretch;
			gap: clamp(1rem, 3vw, 3rem);
		}

		&__copy {
			justify-items: start;
			text-align: left;
		}

		&__title {
			justify-items: start;
			font-size: clamp(4rem, 10vw, 11rem);
			font-size: clamp(4rem, 16cqi, 11rem);
		}

		&__decorative {
			font-size: 1.1em;
			transform: translateX(0.04em) rotate(-2deg);
		}

		&__image--mobile {
			display: none;
		}

		&__image--desktop {
			display: block;
			justify-self: end;
			align-self: center;
		}

		&__image img {
			width: min(100%, 24rem);
		}
	}
}

@media (max-height: 600px) and (min-width: breakpoint(sm)) {
	.hero {
		min-height: 100svh;
		padding-top: calc(var(--header-height) + 1.5rem);
		padding-bottom: 2rem;

		&__container {
			grid-template-columns: minmax(0, 1.75fr) minmax(0, 0.65fr);
			align-items: center;
		}

		&__title {
			font-size: clamp(2.4rem, 10vw, 7rem);
			font-size: clamp(2.4rem, 16cqi, 7rem);
		}

		&__image--mobile {
			display: none;
		}

		&__image--desktop {
			display: block;
		}

		&__image img {
			width: min(100%, 12rem);
		}
	}
}
</style>
