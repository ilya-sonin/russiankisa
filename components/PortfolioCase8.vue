<template>
	<section id="portfolio-case8" class="portfolio-case8">
		<div class="container">
			<div class="portfolio-case8__content">
				<div class="portfolio-case8__title trig-slide-left" data-trig>
					<div class="portfolio-case8__title-decorative">МОИ</div>
					<div class="portfolio-case8__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case8__case-label trig-scale-up trig-stagger-1" data-trig>
					<span class="portfolio-case8__case-text">Кейс</span>
					<span class="portfolio-case8__case-number">3</span>
				</div>

				<div class="portfolio-case8__description trig-fade-in trig-stagger-2" data-trig>
					<p class="portfolio-case8__description-text">
						В проекте уделено особое внимание удобству и интуитивной навигации,
						чтобы пользователь легко ориентировался и получал удовольствие от
						взаимодействия с сайтом.
					</p>
				</div>

				<div
					class="portfolio-case8__device portfolio-case8__device--tablet-left portfolio-device-animation trig-stagger-3"
					data-trig
				>
					<img
						src="/images/case8-tablet-left.png"
						alt="Galaxy Tab S8 Ultra - левая часть интерфейса"
						class="portfolio-case8__device-img"
					/>
				</div>

				<div class="portfolio-case8__tablet-group trig-fade-in trig-stagger-4" data-trig>
					<div
						class="portfolio-case8__device portfolio-case8__device--tablet-right portfolio-device-animation trig-stagger-5"
						data-trig
					>
						<img
							src="/images/case8-tablet-right.png"
							alt="Планшет - правая часть интерфейса"
							class="portfolio-case8__device-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case8 {
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
		top: 80px;
		left: 24px;
		width: 1223px;
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

	&__device {
		position: absolute;

		&--tablet-left {
			top: 150px;
			left: 117px;
			width: 581px;
			height: 511px;
		}

		&--tablet-right {
			width: 586px;
			height: 559px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}

	&__tablet-group {
		position: absolute;
		top: 379px;
		left: 728px;
		width: 736px;
		height: 559px;
	}

	&__vector {
		position: absolute;
		top: 100px; // 479px - 379px = 100px (относительно группы)
		left: 11px;
		width: 617px;
		height: 70px;

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case8 {
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
			top: auto !important;
			left: auto !important;
			max-width: 600px;
			margin: 0 auto spacing(6);
			display: block;

			&-img {
				width: 100%;
				height: auto;
			}
		}

		&__tablet-group {
			position: static;
			width: 100%;
			height: auto;
			max-width: 600px;
			margin: 0 auto;
			display: block;
		}

		&__vector {
			position: static;
			width: 100%;
			height: auto;
			max-width: 500px;
			margin: spacing(4) auto 0;

			&-img {
				width: 100%;
				height: auto;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case8 {
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

		&__device {
			max-width: 500px;
		}

		&__tablet-group {
			max-width: 500px;
		}

		&__vector {
			max-width: 400px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case8 {
		&__device,
		&__tablet-group {
			max-width: 100%;
			padding: 0 spacing(4);
		}

		&__vector {
			max-width: 100%;
			padding: 0 spacing(6);
		}
	}
}
</style>
