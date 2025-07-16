<template>
	<section class="portfolio-case12">
		<div class="portfolio-case12__container">
			<div class="portfolio-case12__title">
				<div class="portfolio-case12__title-decorative">МОИ</div>
				<div class="portfolio-case12__title-main">ПРОЕКТЫ</div>
			</div>

			<div class="portfolio-case12__content">
				<div class="portfolio-case12__case-label">
					<span class="portfolio-case12__case-text">Кейс</span>
					<span class="portfolio-case12__case-number">5</span>
				</div>

				<p class="portfolio-case12__description">
					Мудборд и визитная карточка компании - проект,<br />
					выполненный в рамках обучения в центре АЗы.
				</p>

				<div class="portfolio-case12__images-layout">
					<div class="portfolio-case12__main-image">
						<img
							src="/images/moodboard-main.png"
							alt="Мудборд компании"
							class="portfolio-case12__image"
						/>
					</div>

					<div class="portfolio-case12__side-images">
						<div
							class="portfolio-case12__side-image portfolio-case12__side-image--top"
						>
							<img
								src="/images/business-card-2.png"
								alt="Визитная карточка - вариант 1"
								class="portfolio-case12__image"
							/>
						</div>
						<div
							class="portfolio-case12__side-image portfolio-case12__side-image--bottom"
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
		height: 100px;
		font-family: 'Oranienbaum', serif;
		font-size: 32px;
		font-weight: 400;
		line-height: 1.5625;
		color: #000000;
		text-align: right;
		margin: 0;
	}

	&__images-layout {
		position: absolute;
		left: 64px;
		top: 48px;
		width: 1239px;
		height: 822px;
		display: flex;
		gap: 187px;
	}

	&__main-image {
		width: 534px;
		height: 822px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-8px);
		}
	}

	&__side-images {
		width: 518px;
		height: 822px;
		display: flex;
		flex-direction: column;
		gap: 41px;
		margin-top: 175px;
	}

	&__side-image {
		width: 518px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-6px);
		}

		&--top {
			height: 289px;
		}

		&--bottom {
			height: 288px;
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
			font-size: clamp(18px, 2.5vw, 32px);
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
