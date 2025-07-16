<template>
	<section id="workflow" class="workflow">
		<div class="container">
			<div class="workflow__content">
				<div class="workflow__title">
					<div class="workflow__title-decorative">РАБОТЫ</div>
					<div class="workflow__title-vertical">ЭТАПЫ</div>
				</div>

				<div class="workflow__diagram">
					<div class="workflow__path">
						<img
							src="/images/workflow-path.svg"
							alt="Путь этапов работы"
							class="workflow__path-svg"
						/>
					</div>

					<div class="workflow__markers">
						<div class="workflow__marker workflow__marker--step1"></div>
						<div class="workflow__marker workflow__marker--step2"></div>
						<div class="workflow__marker workflow__marker--step3"></div>
						<div class="workflow__marker workflow__marker--step4"></div>
						<div class="workflow__marker workflow__marker--step5"></div>
						<div class="workflow__marker workflow__marker--step6"></div>
						<div class="workflow__marker workflow__marker--step7"></div>
						<div class="workflow__marker workflow__marker--step8"></div>
					</div>

					<div class="workflow__steps">
						<div class="workflow__step workflow__step--knowledge">
							<h3 class="workflow__step-title">ЗНАКОМСТВО</h3>
							<p class="workflow__step-description">установление контакта</p>
						</div>

						<div class="workflow__step workflow__step--briefing">
							<h3 class="workflow__step-title">БРИФИНГ</h3>
							<p class="workflow__step-description">выявление потребностей</p>
						</div>

						<div class="workflow__step workflow__step--prepayment">
							<h3 class="workflow__step-title">ПРЕДОПЛАПЛАТА</h3>
							<p class="workflow__step-description">
								финансовое подтверждение сотрудничества
							</p>
						</div>

						<div class="workflow__step workflow__step--contract">
							<h3 class="workflow__step-title">ПОДПИСАНИЕ ДОГОВОРА</h3>
							<p class="workflow__step-description">
								юридическое оформление согласованных условий
							</p>
						</div>

						<div class="workflow__step workflow__step--approval">
							<h3 class="workflow__step-title">УТВЕРЖДЕНИЕ МАКЕТА</h3>
							<p class="workflow__step-description">
								внесение правок, согласование
							</p>
						</div>

						<div class="workflow__step workflow__step--layout">
							<h3 class="workflow__step-title workflow__step-title--multiline">
								УТВЕРЖДЕНИЕ<br />СВЁРСТАННОГО МАКЕТА
							</h3>
							<p class="workflow__step-description">
								финальная проверка, допуск к разработке
							</p>
						</div>

						<div class="workflow__step workflow__step--delivery">
							<h3 class="workflow__step-title workflow__step-title--multiline">
								СДАЧА<br />ПРОЕКТА
							</h3>
							<p class="workflow__step-description">передача работы</p>
						</div>

						<div class="workflow__step workflow__step--payment">
							<h3 class="workflow__step-title">ОПЛАТА</h3>
							<p class="workflow__step-description">
								расчёт за оказанную услугу
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.workflow {
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
		top: 112px;
		left: 0;
		width: 146px;
		height: 758px;

		&-vertical {
			font-family: font-family(primary);
			font-size: 8.75rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			transform: rotate(180deg);
			position: absolute;
			bottom: 0;
			left: 0;
		}

		&-decorative {
			font-family: font-family(decorative);
			font-size: 8.75rem; // 48px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: rotate(180deg);
			color: color(primary);
		}
	}

	&__diagram {
		position: absolute;
		top: 130px;
		left: 248px;
		width: 1244px;
		height: 722px;
	}

	&__path {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		&-svg {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	&__markers {
		position: absolute;
		top: -12px;
		left: -3px;
		width: 1073px;
		height: 745px;
	}

	&__marker {
		position: absolute;
		width: 22.52px;
		height: 22.52px;
		background-color: color(primary);
		border-radius: 50%;

		&--step1 {
			top: 0;
			left: 0;
		}

		&--step2 {
			top: 0;
			left: 700px;
		}

		&--step3 {
			top: 241px;
			left: 350px;
		}

		&--step4 {
			top: 241px;
			left: 1050px;
		}

		&--step5 {
			top: 481px;
			left: 350px;
		}

		&--step6 {
			top: 481px;
			left: 1050px;
		}

		&--step7 {
			top: 723px;
			left: 0;
		}

		&--step8 {
			top: 723px;
			left: 700px;
		}
	}

	&__steps {
		position: relative;
		width: 100%;
		height: 100%;
	}

	&__step {
		position: absolute;

		&--knowledge {
			top: -58px;
			left: -28px;
			width: 220px;
			text-align: center;
		}

		&--briefing {
			top: -58px;
			left: 602px;
			width: 214px;
			text-align: center;
		}

		&--prepayment {
			top: 182px;
			left: 165px;
			width: 386px;
			text-align: center;
		}

		&--contract {
			top: 182px;
			left: 782px;
			width: 421px;
			text-align: center;
		}

		&--approval {
			top: 422px;
			left: 187px;
			width: 343px;
			text-align: center;
		}

		&--layout {
			top: 404px;
			left: 720px;
			width: 572px;
			text-align: center;
		}

		&--delivery {
			top: 646px;
			left: -30px;
			width: 156px;
			text-align: center;
		}

		&--payment {
			top: 665px;
			left: 586px;
			width: 247px;
			text-align: center;
		}

		&-title {
			font-family: font-family(primary);
			font-size: font-size('3xl'); // 36px
			line-height: 1.778;
			color: color(text-primary);
			margin: 0 0 0.3rem 0;

			&--multiline {
				line-height: 1;
				text-align: center;
				margin: 0 0 0.8rem 0 !important;
			}
		}

		&-description {
			font-family: font-family(decorative);
			font-size: font-size('3xl'); // 36px
			line-height: 1.778;
			color: color(text-primary);
			margin: 0;
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.workflow {
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

			&-vertical {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				transform: none;
			}

			&-decorative {
				position: static;
				font-size: font-size('5xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				transform: none;
			}
		}

		&__diagram {
			position: static;
			width: 100%;
			height: auto;
			min-height: 600px;
			margin: 0 auto;
		}

		&__path {
			display: none; // Скрыть сложный путь на мобильных
		}

		&__markers {
			display: none; // Скрыть маркеры на мобильных
		}

		&__steps {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: spacing(8);
			padding: spacing(4);
		}

		&__step {
			position: static !important;
			width: auto !important;
			text-align: center !important;
			padding: spacing(6);
			background-color: color(white);
			border-radius: border-radius(lg);
			box-shadow: shadow(md);

			&-title {
				font-size: font-size('xl');
				margin-bottom: spacing(3);

				&--multiline {
					line-height: 1.2;
				}
			}

			&-description {
				font-size: font-size('lg');
				line-height: 1.4;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.workflow {
		padding: spacing(8) 0;

		&__title {
			&-vertical {
				font-size: font-size('5xl');
				transform: none;
			}

			&-decorative {
				font-size: font-size('4xl');
				transform: none;
			}
		}

		&__steps {
			grid-template-columns: 1fr;
			gap: spacing(6);
		}

		&__step {
			padding: spacing(4);

			&-title {
				font-size: font-size('lg');
			}

			&-description {
				font-size: font-size('base');
			}
		}
	}
}
</style>
