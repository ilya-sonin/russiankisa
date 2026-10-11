<template>
	<section id="workflow" class="workflow" data-testid="section-workflow">
		<div class="container">
			<div class="workflow__layout">
				<div class="workflow__title trig-slide-left trig-stagger-1" data-trig>
					<span class="workflow__title-accent">{{ content.titleAccent }}</span>
					<h2 class="workflow__title-main">{{ content.title }}</h2>
				</div>

				<div class="workflow__diagram">
					<picture class="workflow__path trig-fade-in trig-stagger-2" data-trig aria-hidden="true">
						<source media="(min-width: 1440px)" :srcset="content.pathImages.desktop.src" />
						<source media="(min-width: 700px)" :srcset="content.pathImages.tablet.src" />
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
							<div class="workflow__step-copy">
								<h3 class="workflow__step-title" v-html="step.title" />
								<p class="workflow__step-description">{{ step.description }}</p>
							</div>
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
		font-size: clamp(3.3rem, 12vw, 7.8rem);
		color: color(primary);
		transform: rotate(-3deg);
	}

	&__diagram {
		position: relative;
	}

	&__path {
		position: absolute;
		inset: 0.5rem 0;
		z-index: 0;
		display: block;
		opacity: 0.2;
		pointer-events: none;
	}

	&__path-svg {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	&__steps {
		position: relative;
		z-index: 1;
		display: grid;
		gap: 0.8rem;
		padding: 0;
		margin: 0;
		list-style: none;
		counter-reset: workflow-step;
	}

	&__step {
		display: grid;
		grid-template-columns: 2.6rem minmax(0, 1fr);
		gap: clamp(0.8rem, 2vw, 1.25rem);
		align-items: start;
		padding: clamp(1rem, 3vw, 1.4rem);
		background: rgba(color(white), 0.76);
		border: 1px solid rgba(color(primary), 0.12);
		border-radius: clamp(0.9rem, 2vw, 1.35rem);
		box-shadow: 0 0.6rem 1.5rem rgba(color(text-primary), 0.035);
		backdrop-filter: blur(8px);
		counter-increment: workflow-step;
	}

	&__marker {
		display: grid;
		place-items: center;
		width: 2.6rem;
		aspect-ratio: 1;
		font-family: font-family(primary);
		font-size: 1.1rem;
		color: color(background);
		background: color(primary);
		border-radius: border-radius(full);

		&::after {
			content: counter(workflow-step, decimal-leading-zero);
		}
	}

	&__step-copy {
		display: grid;
		gap: 0.6rem;
		width: 100%;
	}

	&__step-title {
		font-family: font-family(primary);
		font-size: clamp(1.3rem, 3.5vw, 2rem);
		font-weight: font-weight(normal);
		line-height: 1.15;
		color: color(text-primary);
		overflow-wrap: anywhere;
		hyphens: auto;
	}

	&__step-description {
		font-family: font-family(primary);
		font-size: clamp(1.05rem, 2.6vw, 1.3rem);
		line-height: 1.4;
		color: color(primary);
	}
}

@media (min-width: 700px) {
	.workflow {
		&__steps {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 1rem;
		}

		&__step {
			min-height: 9rem;
		}

		&__path {
			opacity: 0.16;
		}
	}
}

@media (min-width: 1100px) {
	.workflow {
		min-height: 100svh;
		display: grid;
		align-items: center;

		&__layout {
			grid-template-columns: clamp(7.5rem, 9vw, 9rem) minmax(0, 1fr);
			gap: clamp(2.5rem, 5vw, 5rem);
		}

		&__title {
			align-self: center;
			justify-items: center;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: rotate(180deg);
			line-height: 1;
		}

		&__title-main,
		&__title-accent {
			font-size: clamp(3rem, 4.2vw, 3.75rem);
		}

		&__diagram {
			display: grid;
			align-items: center;
			min-height: 0;
		}

		&__path {
			inset: 3% 0;
			opacity: 0.16;
		}

		&__steps {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: clamp(1rem, 2.2vw, 2rem);
			align-items: stretch;
		}

		&__step {
			grid-template-columns: 1fr;
			justify-items: center;
			min-height: 11.5rem;
			padding: clamp(1rem, 1.8vw, 1.4rem);
			text-align: center;
			background: rgba(color(background), 0.88);
			border-color: rgba(color(primary), 0.15);
		}

		&__marker {
			width: 2.4rem;
			font-size: 0.95rem;
		}

		&__step-title {
			font-size: clamp(1.2rem, 1.4vw, 1.45rem);
		}

		&__step-description {
			font-size: clamp(1.05rem, 1.25vw, 1.2rem);
		}
	}
}

@media (min-width: 1440px) {
	.workflow {
		&__diagram {
			min-height: 34rem;
		}

		&__path {
			opacity: 0.5;
		}

		&__steps {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			grid-template-rows: repeat(2, minmax(0, 1fr));
		}
	}
}
</style>
