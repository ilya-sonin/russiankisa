<template>
	<section id="portfolio-case9" class="portfolio-case9">
		<div class="container">
			<div class="portfolio-case9__content">
				<div class="portfolio-case9__title">
					<div class="portfolio-case9__title-decorative">МОИ</div>
					<div class="portfolio-case9__title-main">ПРОЕКТЫ</div>
				</div>

				<div class="portfolio-case9__case-label">
					<span class="portfolio-case9__case-text">Кейс</span>
					<span class="portfolio-case9__case-number">3</span>
				</div>

				<div class="portfolio-case9__description">
					<p class="portfolio-case9__description-text">
						Особое внимание уделено визуальному программированию и творческому
						контенту, что делает сайт не просто визиткой, а живой платформой для
						демонстрации идей и проектов.
					</p>
				</div>

				<div
					class="portfolio-case9__device portfolio-case9__device--ipad-large"
				>
					<img
						src="/images/case9-ipad-large.png"
						alt="iPad Mini - визуальное программирование"
						class="portfolio-case9__device-img"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.portfolio-case9 {
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
		left: 146px;
		width: 1346px;
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

	&__device {
		position: absolute;

		&--ipad-large {
			top: 32px;
			left: 160px;
			width: 1318.16px;
			height: 1071.84px;
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
	.portfolio-case9 {
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
			max-width: 900px;
			margin: 0 auto;
			display: block;

			&-img {
				width: 100%;
				height: auto;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case9 {
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
			max-width: 700px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case9 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}
</style>
