<template>
	<section class="portfolio-case11">
		<div class="portfolio-case11__container">
			<div class="portfolio-case11__title trig-slide-left" data-trig>
				<div class="portfolio-case11__title-decorative">МОИ</div>
				<div class="portfolio-case11__title-main">ПРОЕКТЫ</div>
			</div>

			<div class="portfolio-case11__content">
				<div class="portfolio-case11__case-label trig-scale-up trig-stagger-1" data-trig>
					<span class="portfolio-case11__case-text">Кейс</span>
					<span class="portfolio-case11__case-number">4</span>
				</div>

				<p class="portfolio-case11__description trig-fade-in trig-stagger-2" data-trig>
					Купоны желаний ко Дню святого Валентина — серия печатных материалов
					для романтических сюрпризов второй половинке. В проекте я создала
					дизайн открыток с тёплыми иллюстрациями<br />и лаконичной
					типографикой, чтобы подарить любимым маленькое исполнение мечты.
				</p>

				<div class="portfolio-case11__cards-grid trig-fade-in trig-stagger-3" data-trig>
					<div
						v-for="(card, index) in cardsBack"
						:key="index"
						class="portfolio-case11__card trig-scale-up"
						:class="`trig-stagger-${Math.min(index + 4, 8)}`"
						data-trig
					>
						<img
							:src="card.src"
							:alt="card.alt"
							class="portfolio-case11__card-image"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const cardsBack = [
	{ src: '/images/card-back-1.png', alt: 'Купон желаний - обратная сторона 1' },
	{ src: '/images/card-back-2.png', alt: 'Купон желаний - обратная сторона 2' },
	{ src: '/images/card-back-3.png', alt: 'Купон желаний - обратная сторона 3' },
	{ src: '/images/card-back-4.png', alt: 'Купон желаний - обратная сторона 4' },
	{ src: '/images/card-back-5.png', alt: 'Купон желаний - обратная сторона 5' },
	{ src: '/images/card-back-6.png', alt: 'Купон желаний - обратная сторона 6' },
	{ src: '/images/card-back-7.png', alt: 'Купон желаний - обратная сторона 7' },
	{ src: '/images/card-back-8.png', alt: 'Купон желаний - обратная сторона 8' },
]
</script>

<style lang="scss" scoped>
.portfolio-case11 {
	background-color: #fff6f4;
	padding: 0;
	width: 100%;
	height: 832px;
	position: relative;
	overflow: hidden;

	&__container {
		position: relative;
		width: 1280px;
		height: 100%;
		margin: 0 auto;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		left: 0;
		top: 79px;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__content {
		margin-left: 124px;
		padding-top: 27px;
		height: calc(100% - 27px);
		position: relative;
	}

	&__case-label {
		position: absolute;
		right: 36px;
		top: 0;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	&__case-text {
		font-family: 'Oranienbaum', serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 1.8;
		color: #000000;
	}

	&__case-number {
		font-family: 'Disruptors Script', cursive;
		font-size: 36px;
		font-weight: 400;
		line-height: 1;
		color: #db2e28;
	}

	&__description {
		position: absolute;
		right: 17px;
		top: 41px;
		width: 1140px;
		height: 127px;
		font-family: 'Oranienbaum', serif;
		font-size: 27px;
		font-weight: 400;
		line-height: 1.5625;
		color: #000000;
		text-align: right;
		margin: 0;
	}

	&__cards-grid {
		position: absolute;
		left: 38px;
		top: 191px;
		width: 1102px;
		height: 535px;
		display: grid;
		grid-template-columns: repeat(4, 252px);
		grid-template-rows: repeat(2, 252px);
		gap: 31px;
	}

	&__card {
		width: 252px;
		height: 252px;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-4px);
		}
	}

	&__card-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
}

// Адаптивность
@media (max-width: 1600px) {
	.portfolio-case11 {
		height: auto;
		min-height: 832px;

		&__container {
			width: 100%;
			max-width: 1280px;
			padding: 0 20px;
		}

		&__title {
			font-size: clamp(68px, 8vw, 118px);
			width: clamp(68px, 8vw, 124px);
			left: 20px;

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__content {
			margin-left: clamp(100px, 10vw, 124px);
			padding: 20px;
		}

		&__cards-grid {
			position: relative;
			left: 0;
			top: 200px;
			width: 100%;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: 20px;
			max-width: 1200px;
		}

		&__card {
			width: 100%;
			height: auto;
			aspect-ratio: 1;
		}

		&__description {
			position: relative;
			right: 0;
			top: 0;
			width: 100%;
			text-align: left;
			font-size: clamp(18px, 2.5vw, 27px);
			margin-bottom: 40px;
		}

		&__case-label {
			position: relative;
			right: 0;
			top: 0;
			margin-bottom: 20px;
			justify-content: flex-start;
		}
	}
}

@media (max-width: 768px) {
	.portfolio-case11 {
		&__title {
			writing-mode: horizontal-tb;
			text-orientation: unset;
			position: relative;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: 30px;
			top: 0;
			left: 0;

			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__content {
			margin-left: 0;
			padding: 20px;
		}

		&__cards-grid {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			top: 50px;
		}
	}
}
</style>
