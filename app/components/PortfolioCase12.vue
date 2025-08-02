<template>
	<section class="portfolio-case12">
		<div class="portfolio-case12__container">
			<div class="portfolio-case12__title trig-slide-left" data-trig>
				<div class="portfolio-case12__title-decorative">МОИ</div>
				<div class="portfolio-case12__title-main">ПРОЕКТЫ</div>
			</div>

			<div class="portfolio-case12__content">
				<div class="portfolio-case12__case-label trig-scale-up trig-stagger-1" data-trig>
					<span class="portfolio-case12__case-text">Кейс</span>
					<span class="portfolio-case12__case-number">5</span>
				</div>

				<p class="portfolio-case12__description trig-fade-in trig-stagger-2" data-trig>
					Мудборд и визитная карточка компании - проект,<br />
					выполненный в рамках обучения в центре АЗы.
				</p>

				<div class="portfolio-case12__images-layout trig-fade-in trig-stagger-3" data-trig>
					<div class="portfolio-case12__main-image portfolio-device-animation trig-stagger-4" data-trig>
						<img
							src="/images/moodboard-main.png"
							alt="Мудборд компании"
							class="portfolio-case12__image"
						/>
					</div>

					<div class="portfolio-case12__side-images">
						<div
							class="portfolio-case12__side-image portfolio-case12__side-image--top portfolio-device-animation trig-stagger-5"
							data-trig
						>
							<img
								src="/images/business-card-2.png"
								alt="Визитная карточка - вариант 1"
								class="portfolio-case12__image"
							/>
						</div>
						<div
							class="portfolio-case12__side-image portfolio-case12__side-image--bottom portfolio-device-animation trig-stagger-6"
							data-trig
						>
							<img
								src="/images/business-card-1.png"
								alt="Визитная карточка - вариант 2"
								class="portfolio-case12__image"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
// Компонент не требует дополнительной логики
</script>

<style lang="scss" scoped>
.portfolio-case12 {
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
		height: 85px;
		font-family: 'Oranienbaum', serif;
		font-size: 27px;
		font-weight: 400;
		line-height: 1.5625;
		color: #000000;
		text-align: right;
		margin: 0;
	}

	&__images-layout {
		position: absolute;
		left: 54px;
		top: 41px;
		width: 1049px;
		height: 696px;
		display: flex;
		gap: 158px;
	}

	&__main-image {
		width: 452px;
		height: 696px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-8px);
		}
	}

	&__side-images {
		width: 439px;
		height: 696px;
		display: flex;
		flex-direction: column;
		gap: 35px;
		margin-top: 148px;
	}

	&__side-image {
		width: 439px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-6px);
		}

		&--top {
			height: 245px;
		}

		&--bottom {
			height: 244px;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
}

// Адаптивность
@media (max-width: 1600px) {
	.portfolio-case12 {
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

		&__images-layout {
			position: relative;
			left: 0;
			top: 180px;
			width: 100%;
			max-width: 1200px;
			flex-direction: column;
			gap: 30px;
			height: auto;
		}

		&__main-image {
			width: 100%;
			height: auto;
			aspect-ratio: 534 / 822;
			max-width: 500px;
			align-self: center;
		}

		&__side-images {
			width: 100%;
			height: auto;
			flex-direction: row;
			gap: 20px;
			margin-top: 0;
			justify-content: center;
		}

		&__side-image {
			width: calc(50% - 10px);
			height: auto;
			aspect-ratio: 518 / 289;
			max-width: 300px;

			&--top,
			&--bottom {
				height: auto;
			}
		}

		&__description {
			position: relative;
			right: 0;
			top: 0;
			width: 100%;
			text-align: left;
			font-size: clamp(18px, 2.5vw, 27px);
			margin-bottom: 40px;
			height: auto;
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
	.portfolio-case12 {
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

		&__images-layout {
			top: 50px;
		}

		&__side-images {
			flex-direction: column;
			gap: 20px;
		}

		&__side-image {
			width: 100%;
			max-width: none;
		}
	}
}
</style>
