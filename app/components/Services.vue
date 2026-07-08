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
	padding: clamp(4rem, 9vw, 7rem) 0;
	background-color: color(background);

	&__layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(2rem, 6vw, 5rem);
		align-items: start;
	}

	&__title {
		display: grid;
		justify-items: center;
		line-height: 1;
	}

	&__title-main,
	&__title-accent {
		margin: 0;
		font-weight: font-weight(normal);
	}

	&__title-main {
		font-family: font-family(primary);
		font-size: clamp(3rem, 8vw, 7.4rem);
	}

	&__title-accent {
		font-family: font-family(decorative);
		font-size: clamp(3rem, 8vw, 7.4rem);
		color: color(primary);
	}

	&__list {
		display: grid;
		gap: clamp(1rem, 3vw, 2rem);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	&__item {
		display: grid;
		grid-template-columns: auto minmax(9rem, 0.35fr) minmax(0, 1fr);
		gap: clamp(0.75rem, 2vw, 2rem);
		align-items: center;
		padding: clamp(1rem, 2.5vw, 2rem);
		border-radius: border-radius(xl);
		background: linear-gradient(90deg, rgba(color(white), 0.74), rgba(color(white), 0));
	}

	&__star {
		width: clamp(1.75rem, 4vw, 2.8rem);
		aspect-ratio: 45 / 42;
	}

	&__item-title {
		font-family: font-family(primary);
		font-size: clamp(1.5rem, 3.4vw, 2.5rem);
		font-weight: font-weight(normal);
		line-height: 1.05;
		color: color(primary);
		margin: 0;
	}

	&__item-description {
		font-family: font-family(primary);
		font-size: clamp(1.125rem, 2.8vw, 2.25rem);
		line-height: 1.45;
		color: color(text-primary);
		margin: 0;
	}
}

@media (max-width: calc(breakpoint(md) - 1px)) {
	.services {
		&__item {
			grid-template-columns: auto 1fr;
		}

		&__item-description {
			grid-column: 1 / -1;
		}
	}
}

@media (min-width: breakpoint(lg)) {
	.services {
		&__layout {
			grid-template-columns: minmax(0, 1fr) auto;
		}

		&__title {
			position: sticky;
			top: spacing(24);
			order: 2;
			writing-mode: vertical-rl;
			text-orientation: mixed;
		}
	}
}
</style>
