<template>
	<section id="contacts" class="contact-section" data-testid="section-contact">
		<div class="container contact-section__container">
			<div class="contact-section__title trig-slide-left trig-stagger-1" data-trig>
				<h2 class="contact-section__title-main">{{ content.title }}</h2>
				<span class="contact-section__title-accent">{{ content.titleAccent }}</span>
			</div>

			<div class="contact-section__content">
				<p class="contact-section__call-to-action trig-fade-in trig-stagger-2" data-trig>
					{{ content.callToAction }}
				</p>
				<blockquote class="contact-section__quote trig-fade-in trig-stagger-3" data-trig>
					{{ content.quote }}
				</blockquote>
				<cite class="contact-section__quote-author trig-fade-in trig-stagger-4" data-trig>
					{{ content.quoteAuthor }}
				</cite>

				<div class="contact-section__qr-codes">
					<a
						v-for="(social, index) in content.socials"
						:key="social.id"
						class="contact-section__qr-item contact-qr-animation"
						:class="`trig-stagger-${index + 1}`"
						data-trig
						:href="social.url"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img :src="social.qrCode.src" :alt="social.qrCode.alt" class="contact-section__qr-image" />
						<span class="contact-section__qr-label">{{ social.label }}</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { ContactContent } from '~/types/site-content'

defineProps<{ content: ContactContent }>()
</script>

<style lang="scss" scoped>
.contact-section {
	padding: clamp(4rem, 9vw, 7rem) 0;
	background-color: color(background);
	overflow: hidden;

	&__container {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(2rem, 6vw, 5rem);
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

	&__content {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	&__call-to-action {
		max-width: 46rem;
		font-family: font-family(primary);
		font-size: clamp(1.25rem, 3vw, 1.875rem);
		line-height: 1.6;
		margin: 0;
	}

	&__quote,
	&__quote-author {
		font-family: font-family(decorative);
		font-size: clamp(2rem, 5vw, 3.375rem);
		line-height: 1;
		color: color(primary);
		text-align: center;
		font-style: normal;
		margin: 0;
	}

	&__quote-author {
		justify-self: center;
	}

	&__qr-codes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	&__qr-item {
		display: grid;
		justify-items: center;
		gap: spacing(3);
	}

	&__qr-image {
		width: min(100%, 20.5rem);
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: border-radius(xl);
		box-shadow: shadow(md);
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.04);
		}
	}

	&__qr-label {
		font-family: font-family(primary);
		font-size: clamp(1.5rem, 3vw, 2.125rem);
		line-height: 1.15;
		color: color(primary);
		text-align: center;
	}
}

@media (min-width: breakpoint(lg)) {
	.contact-section {
		&__container {
			grid-template-columns: minmax(0, 1fr) auto;
		}

		&__title {
			order: 2;
			writing-mode: vertical-rl;
			text-orientation: mixed;
		}

		&__quote,
		&__quote-author {
			text-align: right;
		}

		&__quote-author {
			justify-self: end;
		}
	}
}
</style>
