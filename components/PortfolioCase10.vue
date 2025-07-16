<template>
	<section class="portfolio-case10">
		<div class="portfolio-case10__container">
			<div class="portfolio-case10__title">
				<div class="portfolio-case10__title-decorative">МОИ</div>
				<div class="portfolio-case10__title-main">ПРОЕКТЫ</div>
			</div>

			<div class="portfolio-case10__content">
				<div class="portfolio-case10__case-label">
					<span class="portfolio-case10__case-text">Кейс</span>
					<span class="portfolio-case10__case-number">4</span>
				</div>

				<p class="portfolio-case10__description">
					Купоны желаний ко Дню святого Валентина — серия печатных материалов
					для романтических сюрпризов второй половинке. В проекте я создала
					дизайн открыток с тёплыми иллюстрациями и лаконичной типографикой,
					чтобы подарить любимым маленькое исполнение мечты.
				</p>

				<div class="portfolio-case10__cards-grid">
					<div
						v-for="(card, index) in cards"
						:key="index"
						class="portfolio-case10__card"
					>
						<img
							:src="card.src"
							:alt="card.alt"
							class="portfolio-case10__card-image"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const cards = [
	{ src: '/images/card-1.png', alt: 'Купон желаний 1' },
	{ src: '/images/card-2.png', alt: 'Купон желаний 2' },
	{ src: '/images/card-3.png', alt: 'Купон желаний 3' },
	{ src: '/images/card-4.png', alt: 'Купон желаний 4' },
	{ src: '/images/card-5.png', alt: 'Купон желаний 5' },
	{ src: '/images/card-6.png', alt: 'Купон желаний 6' },
	{ src: '/images/card-7.png', alt: 'Купон желаний 7' },
	{ src: '/images/card-8.png', alt: 'Купон желаний 8' },
]
</script>

<style lang="scss" scoped>
.portfolio-case10 {
	background-color: #fff6f4;
	padding: 0;
	width: 100%;
	height: 982px;
	position: relative;
	overflow: hidden;

	&__container {
		position: relative;
		width: 1512px;
		height: 100%;
		margin: 0 auto;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		left: 0;
		top: 93px;
		width: 146px;
		height: 796px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 8.75rem; // 140px
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
			font-size: 8.75rem; // 140px
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
		margin-left: 146px;
		padding-top: 32px;
		height: calc(100% - 32px);
		position: relative;
	}

	&__case-label {
		position: absolute;
		right: 43px;
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
		right: 20px;
		top: 48px;
		width: 1346px;
		height: 150px;
		font-family: 'Oranienbaum', serif;
		font-size: 32px;
		font-weight: 400;
		line-height: 1.5625;
		color: #000000;
		text-align: right;
		margin: 0;
	}

	&__cards-grid {
		position: absolute;
		left: 44.88px;
		top: 226px;
		width: 1301.12px;
		height: 631.97px;
		display: grid;
		grid-template-columns: repeat(4, 297.4px);
		grid-template-rows: repeat(2, 297.4px);
		gap: 37.17px 37.15px;
	}

	&__card {
		width: 297.4px;
		height: 297.4px;
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
	.portfolio-case10 {
		height: auto;
		min-height: 982px;

		&__container {
			width: 100%;
			max-width: 1512px;
			padding: 0 20px;
		}

		&__title {
			font-size: clamp(80px, 8vw, 140px);
			width: clamp(80px, 8vw, 146px);
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
			margin-left: clamp(100px, 10vw, 146px);
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
			font-size: clamp(18px, 2.5vw, 32px);
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
	.portfolio-case10 {
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
