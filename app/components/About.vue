<template>
	<section id="about" class="about" data-testid="section-about">
		<div class="container">
			<div class="about__layout">
				<div class="about__intro trig-fade-in trig-stagger-1" data-trig>
					<p class="about__intro-text">
						{{ introBefore }}
						<span class="decorative-text">{{ content.introAccent }}</span>
						{{ introAfter }}
					</p>
				</div>

				<h2 class="about__title trig-slide-left trig-stagger-2" data-trig>
					{{ content.title }} <span class="decorative-text">{{ content.titleAccent }}</span> ?
				</h2>

				<figure class="about__photo about-photo-animation trig-stagger-3" data-trig>
					<img :src="content.photo.src" :alt="content.photo.alt" class="about__photo-img" />
				</figure>

				<p
					v-for="(text, index) in content.decorativeTexts"
					:key="text"
					class="about__decorative-text"
					:class="`about__decorative-text--${index + 1}`"
				>
					{{ text }}
				</p>

				<div class="about__tools">
					<h3 class="about__tools-title">
						{{ content.toolsTitle }}<span class="decorative-text">{{ content.toolsTitleAccent }}</span> :
					</h3>
					<ul class="about__tools-grid">
						<li
							v-for="(tool, index) in content.tools"
							:key="tool.name"
							class="about__tool about-tools-animation"
							:class="[`trig-stagger-${(index % 8) + 1}`, { 'about__tool--multiline': tool.multiline }]"
							data-trig
						>
							<img :src="tool.icon.src" :alt="tool.icon.alt" class="about__tool-icon" />
							<span class="about__tool-name" v-html="tool.name" />
						</li>
					</ul>
				</div>

				<p class="about__outro-text trig-fade-in trig-stagger-5" data-trig>
					{{ content.outro }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AboutContent } from '~/types/site-content'

const props = defineProps<{ content: AboutContent }>()

const introParts = computed(() => props.content.intro.split('Екатерина,'))
const introBefore = computed(() => `${introParts.value[0] ?? ''}Екатерина, `)
const introAfter = computed(() => `, ${introParts.value[1]?.trim() ?? ''}`)
</script>

<style lang="scss" scoped>
.about {
	padding: var(--section-space) 0;
	background: color(background);
	overflow: clip;

	&__layout {
		display: grid;
		grid-template-areas:
			'intro'
			'title'
			'print'
			'photo'
			'tools'
			'digital'
			'outro';
		gap: clamp(1.75rem, 5vw, 3.25rem);
		align-items: center;
	}

	&__intro { grid-area: intro; }
	&__title { grid-area: title; }
	&__photo { grid-area: photo; }
	&__tools { grid-area: tools; }
	&__outro-text { grid-area: outro; }

	&__intro-text,
	&__outro-text {
		font-family: font-family(primary);
		font-size: clamp(1.2rem, 3.5vw, 2rem);
		line-height: 1.5;
		margin: 0;
	}

	&__intro-text {
		max-width: 68rem;
	}

	&__intro-text .decorative-text,
	&__tools-title .decorative-text {
		font-size: 1em;
		line-height: inherit;
		color: color(primary);
	}

	&__outro-text {
		max-width: 60rem;
		justify-self: end;
		text-align: right;
	}

	&__title {
		font-family: font-family(primary);
		font-size: clamp(3.4rem, 12vw, 7.5rem);
		font-weight: font-weight(normal);
		line-height: 0.9;
		text-align: center;
	}

	&__title .decorative-text {
		font-size: 0.88em;
		color: color(primary);
	}

	&__photo {
		width: min(100%, 38rem);
		margin: 0 auto;
	}

	&__photo-img {
		width: 100%;
		aspect-ratio: 468 / 335;
		object-fit: cover;
		border-radius: clamp(0.9rem, 2vw, 1.5rem);
		box-shadow: 0 1.5rem 3rem rgba(color(text-primary), 0.09);
	}

	&__decorative-text {
		font-family: font-family(decorative);
		font-size: clamp(1.9rem, 6vw, 3.75rem);
		line-height: 1.15;
		color: color(primary);
		text-align: center;
		margin: 0;

		&--1 { grid-area: print; }
		&--2 { grid-area: digital; }
	}

	&__tools {
		padding: clamp(1.25rem, 3vw, 2rem);
		background: rgba(color(white), 0.42);
		border: 1px solid rgba(color(primary), 0.09);
		border-radius: clamp(1rem, 2vw, 1.5rem);
	}

	&__tools-title {
		font-family: font-family(primary);
		font-size: clamp(1.35rem, 3.4vw, 2rem);
		font-weight: font-weight(normal);
		line-height: 1.2;
		text-align: center;
		margin: 0 0 clamp(1.25rem, 3vw, 2rem);
	}

	&__tools-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: clamp(1.1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1.25rem);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	&__tool {
		display: grid;
		align-content: start;
		justify-items: center;
		gap: 0.55rem;
		text-align: center;
	}

	&__tool-icon {
		width: clamp(2.25rem, 8vw, 3.5rem);
		aspect-ratio: 1;
		object-fit: contain;
	}

	&__tool-name {
		font-family: font-family(primary);
		font-size: clamp(0.9rem, 2.5vw, 1.25rem);
		line-height: 1.1;
	}
}

@media (min-width: 700px) {
	.about {
		&__layout {
			grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
			grid-template-areas:
				'title title'
				'intro intro'
				'print digital'
				'photo tools'
				'outro outro';
			column-gap: clamp(1.5rem, 4vw, 3rem);
		}

		&__title {
			font-size: clamp(4.5rem, 10vw, 7rem);
		}

		&__photo {
			width: 100%;
		}

		&__tools-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
}

@media (min-width: 1100px) {
	.about {
		min-height: 100svh;
		display: grid;
		align-items: center;

		&__layout {
			grid-template-columns: clamp(6.5rem, 8vw, 8.5rem) minmax(18rem, 0.9fr) minmax(24rem, 1.1fr);
			grid-template-areas:
				'title intro intro'
				'title photo tools'
				'title print digital'
				'title outro outro';
			column-gap: clamp(2rem, 4vw, 4rem);
			row-gap: clamp(1rem, 2.2vw, 2rem);
		}

		&__title {
			align-self: stretch;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: rotate(180deg);
			font-size: clamp(5rem, 6.8vw, 7.2rem);
		}

		&__intro-text,
		&__outro-text {
			font-size: clamp(1.35rem, 1.8vw, 1.85rem);
		}

		&__photo-img {
			max-height: 22rem;
		}

		&__tools {
			padding: clamp(1rem, 2vw, 1.5rem);
		}

		&__tool-icon {
			width: clamp(2.25rem, 3vw, 3.25rem);
		}

		&__tool-name {
			font-size: clamp(0.95rem, 1.25vw, 1.2rem);
		}
	}
}

@media (max-width: 420px) {
	.about__tools-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}
</style>
