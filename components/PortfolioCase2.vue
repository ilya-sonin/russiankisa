<template>
	<section id="portfolio-case2" class="portfolio-case2">
		<div class="container">
			<div class="portfolio-case2__content">
				<div class="portfolio-case2__title">
					<div class="portfolio-case2__title-decorative">МОИ</div>
					<div class="portfolio-case2__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case2__description">
					<p class="portfolio-case2__description-text">
						Свои первые работы я осуществила благодаря интенсиву Yudaev.School,
						где впервые познакомилась с Figma и её функционалом.
					</p>
				</div>

				<div class="portfolio-case2__case-label">
					<span class="portfolio-case2__case-text">Кейс</span>
					<span class="portfolio-case2__case-number">1</span>
				</div>

				<div class="portfolio-case2__case portfolio-case2__case--second">
					<div class="portfolio-case2__device portfolio-case2__device--tablet">
						<img
							src="/images/case2-tablet.png"
							alt="Galaxy Tab S8 Ultra - дизайн проект"
							class="portfolio-case2__device-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case2 {
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
		height: 85px;

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

		&--second {
			// Стили для второго кейса
		}
	}

	&__device {
		position: absolute;

		&--tablet {
			top: 170px;
			left: 229px;
			width: 905px;
			height: 624px;
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
	.portfolio-case2 {
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
			max-width: 800px;

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
	.portfolio-case2 {
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
			max-width: 600px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case2 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}
</style>
