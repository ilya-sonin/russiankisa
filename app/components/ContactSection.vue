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
	padding: var(--section-space) 0 clamp(3rem, 6vw, 6rem);
	background:
		radial-gradient(circle at 80% 88%, rgba(color(primary), 0.055), transparent 28rem),
		color(background);
	overflow: clip;

	&__container {
		display: grid;
		gap: clamp(2.5rem, 6vw, 5rem);
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
		font-size: clamp(3.5rem, 11vw, 7.2rem);
	}

	&__title-accent {
		font-family: font-family(decorative);
		font-size: clamp(3.5rem, 11vw, 7.2rem);
		color: color(primary);
		transform: rotate(-3deg);
	}

	&__content {
		display: grid;
		gap: clamp(1.25rem, 4vw, 2.5rem);
	}

	&__call-to-action {
		max-width: 60rem;
		font-family: font-family(primary);
		font-size: clamp(1.2rem, 3.5vw, 1.8rem);
		line-height: 1.5;
		margin: 0;
	}

	&__quote,
	&__quote-author {
		font-family: font-family(decorative);
		font-size: clamp(1.7rem, 5vw, 3.15rem);
		line-height: 1.08;
		color: color(primary);
		text-align: center;
		font-style: normal;
		margin: 0;
	}

	&__quote {
		max-width: 70rem;
		justify-self: center;
	}

	&__quote-author {
		justify-self: end;
		font-size: clamp(1.65rem, 4vw, 2.75rem);
	}

	&__qr-codes {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(0.6rem, 2.5vw, 2rem);
		align-items: start;
	}

	&__qr-item {
		display: grid;
		justify-items: center;
		gap: clamp(0.5rem, 2vw, 1rem);
	}

	&__qr-image {
		width: min(100%, 18rem);
		aspect-ratio: 1;
		object-fit: cover;
		border: 1px solid rgba(color(primary), 0.09);
		border-radius: clamp(0.75rem, 2vw, 1.2rem);
		box-shadow: 0 0.75rem 2rem rgba(color(text-primary), 0.08);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	&__qr-item:hover &__qr-image {
		transform: translateY(-0.25rem) scale(1.02);
		box-shadow: 0 1rem 2.5rem rgba(color(text-primary), 0.12);
	}

	&__qr-label {
		font-family: font-family(primary);
		font-size: clamp(0.95rem, 3vw, 1.8rem);
		line-height: 1.15;
		color: color(primary);
		text-align: center;
	}
}

@media (min-width: 700px) {
	.contact-section {
		&__call-to-action {
			font-size: clamp(1.35rem, 2.5vw, 1.9rem);
		}

		&__quote,
		&__quote-author {
			text-align: right;
		}
	}
}

@media (min-width: 1100px) {
	.contact-section {
		min-height: 100svh;
		display: grid;
		align-items: center;

		&__container {
			grid-template-columns: clamp(6.5rem, 8vw, 8.5rem) minmax(0, 1fr);
			gap: clamp(2.5rem, 5vw, 5rem);
		}

		&__title {
			align-self: stretch;
			justify-items: start;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: rotate(180deg);
		}

		&__title-main,
		&__title-accent {
			font-size: clamp(4.5rem, 6.5vw, 7rem);
		}

		&__content {
			gap: clamp(1.25rem, 2vw, 2rem);
		}

		&__quote {
			font-size: clamp(2.15rem, 3.4vw, 3.25rem);
		}

		&__qr-image {
			width: min(100%, 17rem);
		}
	}
}

@media (max-width: 360px) {
	.contact-section__qr-label {
		font-size: 0.8rem;
	}
}
</style>
