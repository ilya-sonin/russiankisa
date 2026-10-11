<template>
	<section id="portfolio" class="portfolio" data-testid="section-portfolio">
		<div class="container portfolio__intro">
			<h2 class="portfolio__heading"><span>МОИ</span> ПРОЕКТЫ</h2>
		</div>
		<PortfolioSection :cases="cases" />
	</section>
</template>

<script setup lang="ts">
import type { PortfolioCase } from '~/types/site-content'

defineProps<{ cases: PortfolioCase[] }>()
</script>

<style lang="scss" scoped>
.portfolio {
	width: 100%;
	background-color: color(background);

	&__intro {
		padding-block: clamp(2.5rem, 6vw, 4rem);
	}

	&__heading {
		display: grid;
		text-align: center;
		font-size: clamp(3rem, 11vw, 6rem);
		line-height: 0.95;

		span {
			font-family: font-family(decorative);
			color: color(primary);
		}
	}
}

@media (min-width: 1100px) {
	.portfolio__intro {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}
}
</style>
