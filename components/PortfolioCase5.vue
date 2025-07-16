<template>
	<section id="portfolio-case5" class="portfolio-case5">
		<div class="container">
			<div class="portfolio-case5__content">
				<div class="portfolio-case5__title">
					<div class="portfolio-case5__title-decorative">МОИ</div>
					<div class="portfolio-case5__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case5__description">
					<p class="portfolio-case5__description-text">
						Второй интенсивный курс от Yudaev.School был посвящён работе с
						анимацией в Figma.
					</p>
				</div>

				<div class="portfolio-case5__case-label">
					<span class="portfolio-case5__case-text">Кейс</span>
					<span class="portfolio-case5__case-number">2</span>
				</div>

				<div class="portfolio-case5__case portfolio-case5__case--fifth">
					<div
						class="portfolio-case5__device portfolio-case5__device--ipad-large"
					>
						<img
							src="/images/case5-ipad-large.png"
							alt="iPad Mini - крупный план анимации"
							class="portfolio-case5__device-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case5 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;
	overflow: hidden; // Скрываем выходящие за границы части iPad

	&__content {
		position: relative;
		height: 982px; // Высота из дизайна
		width: 100%;
		overflow: hidden; // Дополнительная защита от переполнения
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 93px;
		left: 0;
		width: 146px;
		height: 796px;
		z-index: 2; // Поверх большого iPad

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

	&__description {
		position: absolute;
		top: 80px;
		left: 229px;
		width: 1263px;
		height: 50px;
		z-index: 2;

		&-text {
			font-family: font-family(primary);
			font-size: 2rem; // 32px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
			width: 99%;
		}
	}

	&__case-label {
		position: absolute;
		top: 32px;
		right: 12px;
		display: flex;
		align-items: center;
		gap: spacing(2);
		z-index: 2; // Поверх большого iPad
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

		&--fifth {
			// Стили для пятого кейса
		}
	}

	&__device {
		position: absolute;

		&--ipad-large {
			top: -167px; // Отрицательное позиционирование из дизайна
			left: -64px; // Отрицательное позиционирование из дизайна
			width: 1639.39px;
			height: 1419.55px;
			z-index: 1; // Под текстом
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
	.portfolio-case5 {
		&__content {
			height: auto;
			min-height: 800px;
			overflow: visible; // В адаптиве показываем весь контент
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);
			z-index: auto;

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
			z-index: auto;

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
			z-index: auto;
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
			z-index: auto;

			&--ipad-large {
				// Стили для большого iPad в адаптиве
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
	.portfolio-case5 {
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
	.portfolio-case5 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}
</style>
