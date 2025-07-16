<template>
	<section id="portfolio-case7" class="portfolio-case7">
		<div class="container">
			<div class="portfolio-case7__content">
				<div class="portfolio-case7__title">
					<div class="portfolio-case7__title-decorative">МОИ</div>
					<div class="portfolio-case7__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case7__case-label">
					<span class="portfolio-case7__case-text">Кейс</span>
					<span class="portfolio-case7__case-number">3</span>
				</div>

				<div class="portfolio-case7__description">
					<p class="portfolio-case7__description-text">
						О проекте:<br />
						дизайн сайта выполнен в стиле 1990–2000-х годов<br />
						с использованием пиксельной графики — характерного<br />визуального
						языка той эпохи. Он отсылает ко времени<br />
						первых персональных компьютеров и ранних<br />
						веб-сайтов, когда изображения создавались<br />
						из ярких, чётких пикселей, а интерфейсы отличались<br />
						простой геометрией и насыщенными цветами.<br />
						Такой ретро-стиль создаёт атмосферу ностальгии<br />
						и подчёркивает уникальность проекта, объединяя<br />
						современный подход с духом цифрового прошлого.
					</p>
				</div>

				<div class="portfolio-case7__device portfolio-case7__device--iphone">
					<img
						src="/images/case7-iphone.png"
						alt="iPhone 16 Pro - ретро-проект"
						class="portfolio-case7__device-img"
					/>
				</div>

				<div class="portfolio-case7__timeline">
					<div class="portfolio-case7__timeline-line"></div>

					<div
						class="portfolio-case7__timeline-year portfolio-case7__timeline-year--start"
					>
						1990-е
					</div>
					<div
						class="portfolio-case7__timeline-year portfolio-case7__timeline-year--end"
					>
						2020-е
					</div>

					<div class="portfolio-case7__pixel-images">
						<img
							src="/images/pixel-image-3.svg"
							alt="Пиксельная графика 1"
							class="portfolio-case7__pixel-img portfolio-case7__pixel-img--1"
						/>
						<img
							src="/images/pixel-image-2.svg"
							alt="Пиксельная графика 2"
							class="portfolio-case7__pixel-img portfolio-case7__pixel-img--2"
						/>
						<img
							src="/images/pixel-image-1.svg"
							alt="Пиксельная графика 3"
							class="portfolio-case7__pixel-img portfolio-case7__pixel-img--3"
						/>
						<img
							src="/images/tool-figma.svg"
							alt="Пиксельная графика 4"
							class="portfolio-case7__pixel-img portfolio-case7__pixel-img--4"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case7 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px;
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
			-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
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

	&__description {
		position: absolute;
		top: 160px;
		left: 95px;
		width: 893px;
		height: 558px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 32px
			line-height: 1.563;
			color: color(text-primary);
			text-align: center;
			margin: 0;
		}
	}

	&__device {
		position: absolute;

		&--iphone {
			top: 81px;
			right: 0;
			width: 344px;
			height: 721px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}

	&__timeline {
		position: absolute;
		top: 806px;
		left: 140px;
		width: 1096px;
		height: 166px;
	}

	&__timeline-line {
		position: absolute;
		top: 85px;
		left: 49px;
		width: 994px;
		height: 1.7px;
		background-color: color(primary);
	}

	&__timeline-year {
		position: absolute;
		font-family: font-family(decorative);
		font-size: 4rem; // 64px
		line-height: 1;
		color: color(primary);
		text-align: center;
		z-index: 2;

		&--start {
			top: 102px;
			left: 0;
			width: 99px;
		}

		&--end {
			top: 102px;
			right: 0;
			width: 105px;
		}
	}

	&__pixel-images {
		position: relative;
		width: 100%;
		height: 100%;
	}

	&__pixel-img {
		position: absolute;
		object-fit: contain;

		&--1 {
			top: 5px;
			left: 23px;
			width: 58px;
			height: 60px;
		}

		&--2 {
			top: 4px;
			left: 354px;
			width: 61px;
			height: 62px;
		}

		&--3 {
			top: 0px;
			left: 690px;
			width: 67px;
			height: 68px;
		}

		&--4 {
			top: 5px;
			left: 1022px;
			width: 42px;
			height: 60px;
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case7 {
		&__content {
			height: auto;
			min-height: 1000px;
			padding-bottom: spacing(8);
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
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			right: auto !important;
			top: auto !important;
			max-width: 300px;
			margin: 0 auto spacing(8);
			display: block;

			&-img {
				width: 100%;
				height: auto;
			}
		}

		&__timeline {
			position: static;
			width: 100%;
			height: auto;
			margin-top: spacing(8);
		}

		&__timeline-line {
			position: static;
			width: 100%;
			height: 2px;
			margin: spacing(4) 0;
		}

		&__timeline-year {
			position: static;
			display: inline-block;
			font-size: font-size('3xl');
			margin: spacing(2) spacing(4);

			&--start,
			&--end {
				top: auto;
				left: auto;
				right: auto;
				width: auto;
			}
		}

		&__pixel-images {
			display: flex;
			justify-content: center;
			gap: spacing(4);
			flex-wrap: wrap;
			margin-top: spacing(4);
		}

		&__pixel-img {
			position: static !important;
			width: 60px !important;
			height: 60px !important;
			top: auto !important;
			left: auto !important;
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case7 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__timeline-year {
			font-size: font-size('2xl');
		}

		&__pixel-img {
			width: 50px !important;
			height: 50px !important;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case7 {
		&__pixel-images {
			gap: spacing(2);
		}

		&__pixel-img {
			width: 40px !important;
			height: 40px !important;
		}
	}
}
</style>
