<template>
	<section id="portfolio-case3" class="portfolio-case3">
		<div class="container">
			<div class="portfolio-case3__content">
				<div class="portfolio-case3__title">
					<div class="portfolio-case3__title-decorative">МОИ</div>
					<div class="portfolio-case3__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case3__description">
					<p class="portfolio-case3__description-text">
						Моя первая самостоятельная разработка интерфейса сайта,<br />
						выполненная в рамках интенсива.
					</p>
				</div>

				<div class="portfolio-case3__case-label">
					<span class="portfolio-case3__case-text">Кейс</span>
					<span class="portfolio-case3__case-number">1</span>
				</div>

				<div class="portfolio-case3__case portfolio-case3__case--third">
					<div class="portfolio-case3__device portfolio-case3__device--iphone">
						<img
							src="/images/case3-iphone.png"
							alt="iPhone 13 Pro - мобильная версия"
							class="portfolio-case3__device-img"
						/>
					</div>

					<div class="portfolio-case3__device portfolio-case3__device--ipad">
						<img
							src="/images/case3-ipad.png"
							alt="iPad Mini - планшетная версия"
							class="portfolio-case3__device-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case3 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 982px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 93px;
		left: 0;
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

	&__description {
		position: absolute;
		top: 80px;
		left: 694px;
		width: 798px;
		height: 100px;

		&-text {
			font-family: font-family(primary);
			font-size: 2rem; // 32px
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

		&--third {
			// Стили для третьего кейса
		}
	}

	&__device {
		position: absolute;

		&--iphone {
			top: 224px;
			left: 196px; // 181px + 15px (позиция группы + позиция внутри группы)
			width: 320px;
			height: 585px;
		}

		&--ipad {
			top: 123px;
			left: 517px;
			width: 969px;
			height: 736px;
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
	.portfolio-case3 {
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
			grid-template-columns: 1fr 2fr;
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

			&--iphone {
				grid-column: 1;
				max-width: 300px;
				justify-self: center;
			}

			&--ipad {
				grid-column: 2;
				max-width: 100%;
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
	.portfolio-case3 {
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
			&--iphone,
			&--ipad {
				grid-column: 1;
				max-width: 100%;
				margin: 0 auto;
			}

			&--iphone {
				max-width: 280px;
			}

			&--ipad {
				max-width: 500px;
			}
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case3 {
		&__device {
			&--iphone {
				max-width: 220px;
			}

			&--ipad {
				max-width: 100%;
				padding: 0 spacing(2);
			}
		}
	}
}
</style>
