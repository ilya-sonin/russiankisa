<template>
	<section id="portfolio" class="portfolio">
		<div class="container">
			<div class="portfolio__content">
				<div class="portfolio__title trig-slide-left trig-stagger-1" data-trig>
					<div class="portfolio__title-decorative">МОИ</div>
					<div class="portfolio__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio__description trig-fade-in trig-stagger-2" data-trig>
					<p class="portfolio__description-text">
						Свои первые работы я осуществила благодаря интенсиву Yudaev.School,
						где впервые познакомилась с Figma и её функционалом.
					</p>
				</div>

				<div class="portfolio__case-label trig-scale-up trig-stagger-3" data-trig>
					<span class="portfolio__case-text">Кейс</span>
					<span class="portfolio__case-number">1</span>
				</div>

				<div class="portfolio__case portfolio__case--first">
					<div class="portfolio__device portfolio__device--mac portfolio-device-animation trig-stagger-4" data-trig>
						<img
							src="/images/case1-mac.png"
							alt="Mac Studio - дизайн проект"
							class="portfolio__device-img"
						/>
					</div>

					<div class="portfolio__device portfolio__device--iphone portfolio-device-animation trig-stagger-5" data-trig>
						<img
							src="/images/case1-iphone.png"
							alt="iPhone - мобильная версия"
							class="portfolio__device-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio {
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

		&--first {
			// Стили для первого кейса
		}
	}

	&__device {
		position: absolute;

		&--mac {
			top: 166px;
			left: 124px;
			width: 800px;
			height: 623px;
		}

		&--iphone {
			top: 221px;
			left: 878px;
			width: 359px;
			height: 464px;
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
	.portfolio {
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
			display: grid;
			grid-template-columns: 1fr 300px;
			gap: spacing(6);
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;

			&--mac {
				grid-column: 1;
			}

			&--iphone {
				grid-column: 2;
				justify-self: center;
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
	.portfolio {
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

		&__case {
			grid-template-columns: 1fr;
			gap: spacing(4);
			text-align: center;
		}

		&__device {
			&--mac,
			&--iphone {
				grid-column: 1;
			}

			&--iphone {
				max-width: 300px;
				margin: 0 auto;
			}
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio {
		&__device {
			&--iphone {
				max-width: 250px;
			}
		}
	}
}
</style>
