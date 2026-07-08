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

				<div class="about__tools trig-fade-in trig-stagger-4" data-trig>
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
	padding: clamp(4rem, 9vw, 7rem) 0;
	background-color: color(background);

	&__layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-areas:
			'intro'
			'title'
			'print'
			'photo'
			'tools'
			'digital'
			'outro';
		gap: clamp(1.5rem, 4vw, 3rem);
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
		font-size: clamp(1.125rem, 3vw, 2.25rem);
		line-height: 1.6;
		margin: 0;
	}

	&__outro-text {
		text-align: right;
	}

	&__title {
		font-family: font-family(primary);
		font-size: clamp(3rem, 10vw, 7.4rem);
		font-weight: font-weight(normal);
		line-height: 1;
		margin: 0;
		text-align: center;
	}

	&__photo {
		margin: 0;

		&-img {
			width: 100%;
			aspect-ratio: 468 / 335;
			object-fit: cover;
			border-radius: border-radius(xl);
		}
	}

	&__decorative-text {
		font-family: font-family(decorative);
		font-size: clamp(2rem, 5vw, 3.75rem);
		line-height: 1.1;
		color: color(primary);
		text-align: center;
		margin: 0;

		&--1 { grid-area: print; }
		&--2 { grid-area: digital; }
	}

	&__tools-title {
		font-family: font-family(primary);
		font-size: clamp(1.5rem, 3vw, 2.25rem);
		font-weight: font-weight(normal);
		line-height: 1.2;
		text-align: center;
		margin: 0 0 spacing(6);
	}

	&__tools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(4.5rem, 1fr));
		gap: spacing(4);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	&__tool {
		display: grid;
		justify-items: center;
		gap: spacing(2);
		text-align: center;
	}

	&__tool-icon {
		width: clamp(2.5rem, 5vw, 3.75rem);
		aspect-ratio: 1;
		object-fit: contain;
	}

	&__tool-name {
		font-family: font-family(primary);
		font-size: clamp(1rem, 2vw, 1.5rem);
		line-height: 1.2;
	}
}

@media (min-width: breakpoint(md)) {
	.about {
		&__layout {
			grid-template-columns: minmax(16rem, 0.9fr) minmax(20rem, 1.1fr) auto;
			grid-template-areas:
				'intro intro title'
				'print print title'
				'tools photo title'
				'digital digital title'
				'outro outro outro';
		}

		&__title {
			writing-mode: vertical-rl;
			text-orientation: mixed;
		}
	}
}
</style>
