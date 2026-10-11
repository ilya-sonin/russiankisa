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
		justify-items: center;
		gap: clamp(1.5rem, 4vh, 2.5rem);
		text-align: center;
	}

	&__title {
		display: grid;
		justify-items: center;
		font-family: font-family(primary);
		font-size: clamp(3.7rem, 17vw, 5.8rem);
		font-weight: font-weight(normal);
		line-height: 0.78;
		letter-spacing: -0.025em;
	}

	&__decorative {
		position: relative;
		z-index: 1;
		font-size: 0.78em;
		line-height: 0.9;
		transform: translateY(0.06em) rotate(-2deg);
	}

	&__main-title {
		position: relative;
		z-index: 0;
		display: block;
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
			width: clamp(8rem, 34vw, 11rem);
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

@media (min-width: breakpoint(sm)) {
	.hero {
		&__container {
			grid-template-columns: minmax(0, 1.5fr) minmax(12rem, 0.5fr);
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
			font-size: clamp(6.2rem, 13.1vw, 12rem);
			line-height: 0.76;
		}

		&__decorative {
			font-size: 0.82em;
			transform: translateX(0.08em) translateY(0.09em) rotate(-2deg);
		}

		&__image--mobile {
			display: none;
		}

		&__image--desktop {
			display: block;
			justify-self: end;
			align-self: end;
			margin-bottom: clamp(1rem, 4vh, 3rem);
		}

		&__image img {
			width: clamp(12rem, 25vw, 24rem);
		}
	}
}

@media (min-width: breakpoint(xl)) {
	.hero {
		&__container {
			grid-template-columns: minmax(0, 1.75fr) minmax(18rem, 0.5fr);
		}

		&__title {
			font-size: clamp(9.5rem, 13.4vw, 12.5rem);
		}
	}
}

@media (min-width: breakpoint(sm)) and (max-height: 720px) {
	.hero {
		padding-bottom: 2rem;

		&__title {
			font-size: clamp(5.5rem, 11vw, 9rem);
		}

		&__image img {
			width: clamp(10rem, 21vw, 18rem);
		}
	}
}
</style>
