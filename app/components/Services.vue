<template>
	<section id="services" class="services" data-testid="section-services">
		<div class="container">
			<div class="services__layout">
				<div class="services__title trig-fade-in trig-stagger-1" data-trig>
					<h2 class="services__title-main">{{ content.title }}</h2>
					<span class="services__title-accent">{{ content.titleAccent }}</span>
				</div>

				<ul class="services__list">
					<li
						v-for="(item, index) in content.items"
						:key="item.id"
						class="services__item services-card-animation"
						:class="`trig-stagger-${(index % 8) + 2}`"
						data-trig
					>
						<img src="/images/star-icon.svg" alt="" class="services__star services-star-animation" data-trig />
						<h3 class="services__item-title" :class="{ 'services__item-title--multiline': item.titleMultiline }" v-html="item.title" />
						<p class="services__item-description">{{ item.description }}</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { ServicesContent } from '~/types/site-content'

defineProps<{ content: ServicesContent }>()
</script>

<style lang="scss" scoped>
.services {
	padding: var(--section-space) 0;
	background: color(background);
	overflow: clip;

	&__layout {
		display: grid;
		gap: clamp(2.5rem, 6vw, 5rem);
		align-items: center;
	}

	&__title {
		display: grid;
		justify-items: center;
		line-height: 0.84;
	}

	&__title-main,
	&__title-accent {
		margin: 0;
		font-weight: font-weight(normal);
	}

	&__title-main {
		font-family: font-family(primary);
		font-size: clamp(3.6rem, 12vw, 7.4rem);
	}

	&__title-accent {
		font-family: font-family(decorative);
		font-size: clamp(3.5rem, 12vw, 7.4rem);
		color: color(primary);
		transform: rotate(-3deg);
	}

	&__list {
		display: grid;
		gap: clamp(0.8rem, 2vw, 1.25rem);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	&__item {
		display: grid;
		grid-template-columns: 2.5rem minmax(0, 1fr);
		gap: 0.6rem 1rem;
		align-items: center;
		padding: clamp(1rem, 3vw, 1.5rem);
		background: linear-gradient(105deg, rgba(color(white), 0.8), rgba(color(white), 0.35));
		border: 1px solid rgba(color(primary), 0.09);
		border-radius: clamp(0.9rem, 2vw, 1.4rem);
		box-shadow: 0 0.6rem 1.5rem rgba(color(text-primary), 0.03);
	}

	&__star {
		width: clamp(1.9rem, 6vw, 2.7rem);
		aspect-ratio: 45 / 42;
	}

	&__item-title {
		font-family: font-family(primary);
		font-size: clamp(1.5rem, 4.8vw, 2.15rem);
		font-weight: font-weight(normal);
		line-height: 1.02;
		color: color(primary);
	}

	&__item-description {
		grid-column: 1 / -1;
		font-family: font-family(primary);
		font-size: clamp(1.08rem, 3.6vw, 1.55rem);
		line-height: 1.42;
		color: color(text-primary);
	}
}

@media (min-width: 700px) {
	.services {
		&__item {
			grid-template-columns: 2.8rem minmax(11rem, 0.42fr) minmax(0, 1fr);
			gap: clamp(1rem, 2vw, 1.75rem);
		}

		&__item-description {
			grid-column: auto;
			font-size: clamp(1.15rem, 2.2vw, 1.55rem);
			line-height: 1.3;
		}
	}
}

@media (min-width: 1100px) {
	.services {
		min-height: 100svh;
		display: grid;
		align-items: center;

		&__layout {
			grid-template-columns: clamp(6.5rem, 8vw, 8.5rem) minmax(0, 1fr);
			gap: clamp(2.5rem, 5vw, 5rem);
		}

		&__title {
			align-self: stretch;
			justify-items: start;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: rotate(180deg);
		}

		&__title-main,
		&__title-accent {
			font-size: clamp(4.5rem, 6.5vw, 7rem);
		}

		&__item {
			grid-template-columns: 2.8rem minmax(12rem, 16rem) minmax(0, 1fr);
			min-height: 6.1rem;
			padding: 0.8rem clamp(1.25rem, 2vw, 2rem);
		}

		&__item-title {
			font-size: clamp(1.45rem, 1.8vw, 2rem);
		}

		&__item-description {
			font-size: clamp(1.2rem, 1.55vw, 1.55rem);
			line-height: 1.22;
		}
	}
}
</style>
