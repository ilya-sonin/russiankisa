<template>
	<section
		class="portfolio-case-layout"
		:class="`portfolio-case-layout--${variant}`"
		:data-testid="`case-${caseId}`"
	>
		<div class="portfolio-case-layout__container">
			<div class="portfolio-case-layout__content">
				<slot />
			</div>

			<VerticalTitle
				decorative="МОИ"
				main="ПРОЕКТЫ"
				:rotated="true"
				position="left"
				size="md"
				class="portfolio-case-layout__title trig-slide-left trig-stagger-1"
				data-trig
			/>

			<div class="portfolio-case-layout__header">
				<CaseLabel
					:number="caseNumber"
					class="portfolio-case-layout__case-label trig-scale-up trig-stagger-1"
					data-trig
				/>
				<p
					v-if="description"
					class="portfolio-case-layout__description trig-fade-in trig-stagger-2"
					data-trig
					v-html="description"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		caseId: string
		caseNumber: number
		description?: string
		variant?: 'standard' | 'compact' | 'cards'
	}>(),
	{
		description: '',
		variant: 'standard',
	},
)
</script>

<style lang="scss" scoped>
.portfolio-case-layout {
	background-color: color(background);
	padding: 0;
	width: 100%;
	min-height: 832px;
	position: relative;
	overflow: hidden;

	&__container {
		position: relative;
		max-width: 1280px;
		height: 832px;
		margin: 0 auto;
	}

	&__content {
		position: absolute;
		inset: 0;
		z-index: 1;
	}

	&__title {
		left: 0;
		top: 79px;
	}

	&__header {
		position: absolute;
		inset: 0;
		z-index: 3;
		pointer-events: none;
	}

	&__case-label {
		position: absolute;
		top: 32px;
		right: 17px;
	}

	&__description {
		position: absolute;
		top: 41px;
		right: 17px;
		width: min(1140px, calc(100% - 140px));
		min-height: 85px;
		font-family: font-family(primary);
		font-size: 1.6875rem;
		font-weight: 400;
		line-height: 1.31;
		color: color(text-primary);
		margin: 0;
	}

	&--cards {
		.portfolio-case-layout__description {
			top: 93px;
			right: 17px;
			width: 1080px;
		}
	}
}

@media (max-width: 1600px) {
	.portfolio-case-layout {
		&__container {
			width: 100%;
			max-width: 1280px;
		}
	}
}

@media (max-width: calc(breakpoint('md') - 1px)) {
	.portfolio-case-layout {
		min-height: auto;
		overflow: visible;

		&__container {
			height: auto;
			min-height: 600px;
			padding: spacing(8) spacing(4);
		}

		&__content {
			position: relative;
			inset: auto;
			padding-top: spacing(20);
		}

		&__title {
			display: none;
		}

		&__header {
			position: relative;
			inset: auto;
			pointer-events: auto;
			margin-bottom: spacing(6);
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(4);
		}

		&__description {
			position: static;
			width: 100%;
			min-height: 0;
			font-size: font-size('lg');
			line-height: 1.4;
			text-align: center;
		}
	}
}
</style>
