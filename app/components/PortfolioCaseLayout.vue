<template>
	<section class="portfolio-case-layout" :data-testid="`case-${item.id}`">
		<div class="portfolio-case-layout__container">
			<VerticalTitle
				decorative="МОИ"
				main="ПРОЕКТЫ"
				:rotated="true"
				position="left"
				size="md"
				class="portfolio-case-layout__title trig-slide-left trig-stagger-1"
				data-trig
			/>

			<header class="portfolio-case-layout__header">
				<CaseLabel
					:number="item.number"
					position="left"
					class="portfolio-case-layout__case-label trig-scale-up trig-stagger-1"
					data-trig
				/>
				<p class="portfolio-case-layout__description trig-fade-in trig-stagger-2" data-trig v-html="item.description" />
			</header>

			<div class="portfolio-case-layout__content">
				<CaseContent :item="item" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import CaseContent from '~/components/portfolio/CaseContent.vue'
import type { PortfolioCase } from '~/types/site-content'

defineProps<{ item: PortfolioCase }>()
</script>

<style lang="scss" scoped>
.portfolio-case-layout {
	position: relative;
	padding: clamp(3.75rem, 8vw, 7rem) 0;
	background: color(background);
	border-top: 1px solid rgba(color(primary), 0.09);
	overflow: clip;

	&:nth-child(even) {
		background: linear-gradient(110deg, rgba(color(white), 0.18), rgba(color(primary), 0.018));
	}

	&__container {
		display: grid;
		gap: clamp(1.75rem, 5vw, 3.5rem);
		width: min(100%, var(--content-width));
		margin-inline: auto;
		padding-inline: var(--page-gutter);
	}

	&__title {
		display: none;
	}

	&__header {
		display: grid;
		gap: 0.8rem;
	}

	&__case-label {
		justify-self: start;
	}

	&__description {
		max-width: 62rem;
		font-family: font-family(primary);
		font-size: clamp(1.1rem, 3.6vw, 1.65rem);
		line-height: 1.4;
		color: color(text-primary);
		text-align: left;
		margin: 0;
	}
}

@media (min-width: 700px) {
	.portfolio-case-layout {
		&__header {
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: start;
			gap: 2rem;
		}

		&__case-label {
			order: 2;
			justify-self: end;
		}

		&__description {
			font-size: clamp(1.25rem, 2.2vw, 1.7rem);
		}
	}
}

@media (min-width: 1100px) {
	.portfolio-case-layout {
		min-height: 100svh;
		display: grid;
		align-items: center;

		&__container {
			grid-template-columns: clamp(5.5rem, 7vw, 7.5rem) minmax(0, 1fr);
			grid-template-areas:
				'title header'
				'title content';
			align-items: center;
			column-gap: clamp(2.5rem, 5vw, 5rem);
			row-gap: clamp(1.5rem, 3vw, 2.5rem);
		}

		&__title {
			display: inline-grid;
			grid-area: title;
			align-self: stretch;
		}

		&__header {
			grid-area: header;
		}

		&__content {
			grid-area: content;
		}
	}
}
</style>
