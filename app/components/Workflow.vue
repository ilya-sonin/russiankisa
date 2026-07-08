<template>
	<section id="workflow" class="workflow" data-testid="section-workflow">
		<div class="container">
			<div class="workflow__layout">
				<div class="workflow__title trig-slide-left trig-stagger-1" data-trig>
					<span class="workflow__title-accent">{{ content.titleAccent }}</span>
					<h2 class="workflow__title-main">{{ content.title }}</h2>
				</div>

				<div class="workflow__diagram">
					<picture class="workflow__path trig-fade-in trig-stagger-2" data-trig>
						<source media="(min-width: 1024px)" :srcset="content.pathImages.desktop.src" />
						<source media="(min-width: 768px)" :srcset="content.pathImages.tablet.src" />
						<img :src="content.pathImages.mobile.src" :alt="content.pathImages.mobile.alt" class="workflow__path-svg" />
					</picture>

					<ol class="workflow__steps">
						<li
							v-for="(step, index) in content.steps"
							:key="step.id"
							class="workflow__step workflow-step-animation"
							:class="[`workflow__step--${index + 1}`, `trig-stagger-${(index % 8) + 1}`]"
							data-trig
						>
							<span class="workflow__marker" aria-hidden="true" />
							<h3 class="workflow__step-title" v-html="step.title" />
							<p class="workflow__step-description">{{ step.description }}</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { WorkflowContent } from '~/types/site-content'

defineProps<{ content: WorkflowContent }>()
</script>

<style lang="scss" scoped>
.workflow {
	padding: clamp(4rem, 9vw, 7rem) 0;
	background-color: color(background);

	&__layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(2rem, 6vw, 5rem);
		align-items: center;
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
		font-size: clamp(3.5rem, 9vw, 8.75rem);
		color: color(primary);
	}

	&__diagram {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	&__path {
		display: block;
		justify-self: center;
		width: min(100%, 64rem);
	}

	&__path-svg {
		display: block;
		width: 100%;
		height: auto;
	}

	&__steps {
		display: grid;
		grid-template-columns: 1fr;
		gap: spacing(4);
		padding: 0;
		margin: 0;
		list-style: none;
	}

	&__step {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: spacing(2) spacing(4);
		align-items: start;
		padding: spacing(4);
		background-color: rgba(color(primary), 0.05);
		border-radius: border-radius(xl);
	}

	&__marker {
		grid-row: span 2;
		width: clamp(0.8rem, 1.5vw, 1.35rem);
		aspect-ratio: 1;
		margin-top: 0.45em;
		border-radius: border-radius(full);
		background-color: color(primary);
	}

	&__step-title {
		font-family: font-family(primary);
		font-size: clamp(1.25rem, 2.7vw, 2.25rem);
		font-weight: font-weight(normal);
		line-height: 1.2;
		margin: 0;
		color: color(text-primary);
	}

	&__step-description {
		font-family: font-family(decorative);
		font-size: clamp(1.25rem, 2.7vw, 2.25rem);
		line-height: 1.2;
		margin: 0;
		color: color(text-primary);
	}
}

@media (min-width: breakpoint(md)) {
	.workflow {
		&__layout {
			grid-template-columns: auto minmax(0, 1fr);
		}

		&__title {
			align-self: stretch;
			justify-items: start;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: rotate(180deg);
		}

		&__steps {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		&__step {
			grid-template-columns: 1fr;
			justify-items: center;
			text-align: center;
		}

		&__marker {
			grid-row: auto;
			margin: 0;
		}
	}
}
</style>
