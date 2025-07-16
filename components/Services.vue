<template>
	<section id="services" class="services">
		<div class="container">
			<div class="services__content">
				<div class="services__title">
					<div class="services__title-main">СПЕКТР</div>
					<div class="services__title-decorative">УСЛУГ</div>
				</div>

				<div class="services__stars">
					<img
						src="/images/star-icon.svg"
						alt=""
						class="services__star services__star--1"
					/>
					<img
						src="/images/star-icon.svg"
						alt=""
						class="services__star services__star--2"
					/>
					<img
						src="/images/star-icon.svg"
						alt=""
						class="services__star services__star--3"
					/>
					<img
						src="/images/star-icon.svg"
						alt=""
						class="services__star services__star--4"
					/>
					<img
						src="/images/star-icon.svg"
						alt=""
						class="services__star services__star--5"
					/>
					<img
						src="/images/star-icon.svg"
						alt=""
						class="services__star services__star--6"
					/>
				</div>

				<div class="services__list">
					<div class="services__item services__item--web">
						<h3 class="services__item-title">ВЕБ-ДИЗАЙН</h3>
						<p class="services__item-description">
							создание лэндингов и многостраничных сайтов, ориентированных на
							удобство пользователя и визуальную привлекательность
						</p>
					</div>

					<div class="services__item services__item--print">
						<h3 class="services__item-title services__item-title--multiline">
							ДИЗАЙН<br />ПОЛИГРАФИИ
						</h3>
						<p class="services__item-description">
							разработка запоминающихся макетов для печатных и цифровых
							материалов: постеров, афиш, флаеров, визиткок, пригласительных
						</p>
					</div>

					<div class="services__item services__item--presentations">
						<h3 class="services__item-title">ПРЕЗЕНТАЦИИ</h3>
						<p class="services__item-description">
							оформление презентаций для бизнеса, обучения и личных проектов,
							грамотное структурирование информации, акцент на визуализации
						</p>
					</div>

					<div class="services__item services__item--banners">
						<h3 class="services__item-title services__item-title--multiline">
							ДИЗАЙН<br />БАННЕРОВ
						</h3>
						<p class="services__item-description">
							разработка рекламных и информационных баннеров для сайтов и
							социальных сетей под любые задачи и форматы
						</p>
					</div>

					<div class="services__item services__item--guides">
						<h3 class="services__item-title services__item-title--multiline">
							ЧЕК-ЛИСТЫ<br />И ГАЙДЫ
						</h3>
						<p class="services__item-description">
							создание наглядных чек-листов, памяток, инструкций и мини-гайдов,
							которые удобно использовать в работе и делиться с аудиторией
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.services {
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
		position: absolute;
		top: 108px;
		right: 31px;
		width: 146px;
		height: 730px;

		&-main {
			font-family: font-family(primary);
			font-size: 8.75rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: center;
			position: absolute;
			top: 0;
			right: 0;
		}

		&-decorative {
			font-family: font-family(decorative);
			font-size: 8.75rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			bottom: 0;
			right: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}
	}

	&__stars {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		pointer-events: none;
	}

	&__star {
		position: absolute;
		width: 45px;
		height: 42px;

		// Позиции звездочек согласно дизайну
		&--1 {
			top: 30px;
			left: 734px;
		}

		&--2 {
			top: 206px;
			left: 734px;
		}

		&--3 {
			top: 382px;
			left: 734px;
		}

		&--4 {
			top: 558px;
			left: 734px;
		}

		&--5 {
			top: 734px;
			left: 734px;
		}

		&--6 {
			top: 910px;
			left: 734px;
		}
	}

	&__list {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	&__item {
		position: absolute;
		width: 1280px; // Уменьшил с 1459px, чтобы не наезжать на заголовок
		height: 128px;
		left: 21px;

		&--web {
			top: 75px;
		}

		&--print {
			top: 251px;
		}

		&--presentations {
			top: 427px;
		}

		&--banners {
			top: 603px;
		}

		&--guides {
			top: 779px;
		}

		&-title {
			font-family: font-family(primary);
			font-size: 2.5rem; // 40px
			line-height: 1.15;
			color: color(primary);
			margin: 0 0 spacing(2) 0;
			position: absolute;
			top: 41px;
			left: 0;
			width: 248px;

			&--multiline {
				line-height: 0.875;
				top: 25px;
				height: 78px;
			}
		}

		&-description {
			font-family: font-family(primary);
			font-size: font-size('3xl'); // 36px
			line-height: 1.778;
			color: color(text-primary);
			margin: 0;
			position: absolute;
			top: 0;
			left: 248px;
			width: 1032px; // Уменьшил с 1211px соответственно новой ширине элемента (1280-248=1032)
			height: 128px;
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.services {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(8);

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__stars {
			display: none; // Скрыть звездочки на мобильных
		}

		&__list {
			position: static;
			display: flex;
			flex-direction: column;
			gap: spacing(8);
			padding: spacing(4) 0;
		}

		&__item {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;
			padding: spacing(6);
			background-color: color(white);
			border-radius: border-radius(lg);
			box-shadow: shadow(md);

			&-title {
				position: static !important;
				width: 100% !important;
				font-size: font-size('2xl');
				margin-bottom: spacing(4);
				text-align: center;

				&--multiline {
					line-height: 1.2;
					top: auto !important;
					height: auto !important;
				}
			}

			&-description {
				position: static !important;
				width: 100% !important;
				left: auto !important;
				top: auto !important;
				height: auto !important;
				font-size: font-size('lg');
				line-height: 1.6;
				text-align: center;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.services {
		padding: spacing(8) 0;

		&__title {
			&-main {
				font-size: font-size('5xl');
			}

			&-decorative {
				font-size: font-size('5xl');
			}
		}

		&__list {
			gap: spacing(6);
		}

		&__item {
			padding: spacing(4);

			&-title {
				font-size: font-size('xl');
				margin-bottom: spacing(3);
			}

			&-description {
				font-size: font-size('base');
			}
		}
	}
}
</style>
