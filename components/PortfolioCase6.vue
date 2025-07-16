<template>
	<section id="portfolio-case6" class="portfolio-case6">
		<div class="container">
			<div class="portfolio-case6__content">
				<div class="portfolio-case6__title trig-slide-left" data-trig>
					<div class="portfolio-case6__title-decorative">МОИ</div>
					<div class="portfolio-case6__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case6__description trig-fade-in trig-stagger-2" data-trig>
					<p class="portfolio-case6__description-text">
						На сегодняшний день моей гордостью и любимой работой является проект
						сайта, созданный мной<br />
						с нуля: начиная от визуала и заканчивая лого.
					</p>
				</div>

				<div class="portfolio-case6__case-label trig-scale-up trig-stagger-1" data-trig>
					<span class="portfolio-case6__case-text">Кейс</span>
					<span class="portfolio-case6__case-number">3</span>
				</div>

				<div class="portfolio-case6__case portfolio-case6__case--sixth">
					<div class="portfolio-case6__device portfolio-case6__device--mac portfolio-device-animation trig-stagger-3" data-trig>
						<img
							src="/images/case6-mac.png"
							alt="Mac Studio - проект сайта с нуля"
							class="portfolio-case6__device-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case6 {
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

	&__description {
		position: absolute;
		top: 80px;
		left: -100px;
		width: 1346px;
		height: 100px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 32px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 32px;
		right: 12px;
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

		&--sixth {
			// Стили для шестого кейса
		}
	}

	&__device {
		position: absolute;

		&--mac {
			top: 88px;
			left: 123px;
			width: 1267px;
			height: 950px;
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
	.portfolio-case6 {
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

			&--mac {
				// Стили для Mac в адаптиве
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
	.portfolio-case6 {
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
	.portfolio-case6 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}
</style>
