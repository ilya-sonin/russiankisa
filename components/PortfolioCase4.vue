<template>
	<section id="portfolio-case4" class="portfolio-case4">
		<div class="container">
			<div class="portfolio-case4__content">
				<div class="portfolio-case4__title">
					<div class="portfolio-case4__title-decorative">МОИ</div>
					<div class="portfolio-case4__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case4__description">
					<p class="portfolio-case4__description-text">
						Второй интенсивный курс от Yudaev.School был посвящён работе с
						анимацией в Figma.
					</p>
				</div>

				<div class="portfolio-case4__case-label">
					<span class="portfolio-case4__case-text">Кейс</span>
					<span class="portfolio-case4__case-number">2</span>
				</div>

				<div class="portfolio-case4__case portfolio-case4__case--fourth">
					<div class="portfolio-case4__device portfolio-case4__device--tablet">
						<img
							src="/images/case4-tablet.png"
							alt="Galaxy Tab S8 Ultra - анимация в Figma"
							class="portfolio-case4__device-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case4 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 118px
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
			font-size: 7.4rem; // 118px
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

	&__description {
		position: absolute;
		top: 68px;
		left: 194px;
		width: 1070px;
		height: 42px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 27px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 27px;
		right: 10px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__case {
		position: relative;
		width: 100%;
		height: 100%;

		&--fourth {
			// Стили для четвертого кейса
		}
	}

	&__device {
		position: absolute;

		&--tablet {
			top: 120px;
			left: 76px;
			width: 1361px;
			height: 862px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case4 {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

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

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__case {
			position: static;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;
			max-width: 900px;

			&--tablet {
				// Стили для планшета в адаптиве
			}

			&-img {
				width: 100%;
				height: auto;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case4 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-text {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__device {
			max-width: 700px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case4 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}
</style>
