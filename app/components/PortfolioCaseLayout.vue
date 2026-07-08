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
	padding: clamp(4rem, 8vw, 6rem) 0;
	background-color: color(background);
	overflow: hidden;

	&__container {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: clamp(2rem, 5vw, 4rem);
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 spacing(4);
	}

	&__title {
		display: none;
	}

	&__header {
		display: grid;
		gap: spacing(4);
	}

	&__case-label {
		justify-self: center;
	}

	&__description {
		font-family: font-family(primary);
		font-size: clamp(1.125rem, 2.4vw, 1.6875rem);
		line-height: 1.35;
		color: color(text-primary);
		text-align: center;
		margin: 0;
	}
}

@media (min-width: breakpoint(md)) {
	.portfolio-case-layout {
		&__container {
			grid-template-columns: minmax(5rem, 8rem) minmax(0, 1fr);
			grid-template-areas:
				'title header'
				'title content';
		}

		&__title {
			display: block;
			grid-area: title;
			position: sticky;
			top: spacing(20);
		}

		&__header {
			grid-area: header;
			grid-template-columns: 1fr auto;
			align-items: start;
		}

		&__case-label {
			order: 2;
			justify-self: end;
		}

		&__description {
			text-align: left;
		}

		&__content {
			grid-area: content;
		}
	}
}
</style>
