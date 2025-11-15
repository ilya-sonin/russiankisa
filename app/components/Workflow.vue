<template>
	<section id="workflow" class="workflow">
		<div class="container">
			<div class="workflow__content">
				<div class="workflow__title trig-slide-left trig-stagger-1" data-trig>
					<div class="workflow__title-decorative">РАБОТЫ</div>
					<div class="workflow__title-vertical">ЭТАПЫ</div>
				</div>

				<div class="workflow__diagram">
					<div class="workflow__path trig-fade-in trig-stagger-2" data-trig>
						<picture>
							<source
								media="(min-width: 1024px)"
								srcset="/images/workflow-path-desktop.svg"
							/>
							<source
								media="(min-width: 768px)"
								srcset="/images/workflow-path-tablet.svg"
							/>
							<img
								src="/images/workflow-path-mobile.svg"
								alt="Путь этапов работы"
								class="workflow__path-svg"
							/>
						</picture>
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
						<div
							class="workflow__step workflow__step--knowledge workflow-step-animation trig-stagger-3"
							data-trig
						>
							<h3 class="workflow__step-title">ЗНАКОМСТВО</h3>
							<p class="workflow__step-description">установление контакта</p>
						</div>

						<div
							class="workflow__step workflow__step--briefing workflow-step-animation trig-stagger-4"
							data-trig
						>
							<h3 class="workflow__step-title">БРИФИНГ</h3>
							<p class="workflow__step-description">выявление потребностей</p>
						</div>

						<div
							class="workflow__step workflow__step--prepayment workflow-step-animation trig-stagger-5"
							data-trig
						>
							<h3 class="workflow__step-title">ПРЕДОПЛАПЛАТА</h3>
							<p class="workflow__step-description">
								финансовое подтверждение сотрудничества
							</p>
						</div>

						<div
							class="workflow__step workflow__step--contract workflow-step-animation trig-stagger-6"
							data-trig
						>
							<h3 class="workflow__step-title">ПОДПИСАНИЕ ДОГОВОРА</h3>
							<p class="workflow__step-description">
								юридическое оформление согласованных условий
							</p>
						</div>

						<div
							class="workflow__step workflow__step--approval workflow-step-animation trig-stagger-7"
							data-trig
						>
							<h3 class="workflow__step-title">УТВЕРЖДЕНИЕ МАКЕТА</h3>
							<p class="workflow__step-description">
								внесение правок, согласование
							</p>
						</div>

						<div
							class="workflow__step workflow__step--layout workflow-step-animation trig-stagger-8"
							data-trig
						>
							<h3 class="workflow__step-title workflow__step-title--multiline">
								УТВЕРЖДЕНИЕ<br />СВЁРСТАННОГО МАКЕТА
							</h3>
							<p class="workflow__step-description">
								финальная проверка, допуск к разработке
							</p>
						</div>

						<div
							class="workflow__step workflow__step--delivery workflow-step-animation trig-stagger-1"
							data-trig
						>
							<h3 class="workflow__step-title workflow__step-title--multiline">
								СДАЧА<br />ПРОЕКТА
							</h3>
							<p class="workflow__step-description">передача работы</p>
						</div>

						<div
							class="workflow__step workflow__step--payment workflow-step-animation trig-stagger-2"
							data-trig
						>
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
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		position: absolute;
		top: 95px;
		left: 0;
		width: 124px;
		height: 642px;

		&-vertical {
			font-family: font-family(primary);
			font-size: 7.4rem; // 118px
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
			top: -25px;
			left: -25px;
			font-family: font-family(decorative);
			font-size: 8.75rem; // 48px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: rotate(180deg);
			color: color(primary);
		}
	}

	&__diagram {
		position: absolute;
		top: 110px;
		left: 210px;
		width: 1054px;
		height: 612px;
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
			left: 600px;
		}

		&--step3 {
			top: 204px;
			left: 350px;
		}

		&--step4 {
			top: 204px;
			left: 900px;
		}

		&--step5 {
			top: 408px;
			left: 350px;
		}

		&--step6 {
			top: 408px;
			left: 900px;
		}

		&--step7 {
			top: 611px;
			left: 0;
		}

		&--step8 {
			top: 611px;
			left: 600px;
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
			left: 503px;
			width: 214px;
			text-align: center;
		}

		&--prepayment {
			top: 147px;
			left: 165px;
			width: 386px;
			text-align: center;
		}

		&--contract {
			top: 147px;
			left: 655px;
			width: 421px;
			text-align: center;
		}

		&--approval {
			top: 350px;
			left: 187px;
			width: 343px;
			text-align: center;
		}

		&--layout {
			top: 335px;
			left: 587px;
			width: 572px;
			text-align: center;
		}

		&--delivery {
			top: 537px;
			left: -30px;
			width: 156px;
			text-align: center;
		}

		&--payment {
			top: 555px;
			left: 485px;
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

// Mobile: < 768px - вертикальная раскладка
@media (max-width: calc(breakpoint('md') - 1px)) {
	.workflow {
		padding: spacing(8) 0;

		&__content {
			display: flex;
			flex-direction: column;
			height: auto;
			padding: spacing(4) 0;
		}

		&__title {
			position: static;
			order: 1;
			width: 100%;
			height: auto;
			margin-bottom: spacing(6);
			text-align: center;

			&-vertical {
				font-size: font-size('4xl'); // 32px
				writing-mode: horizontal-tb;
				text-orientation: initial;
				transform: none;
				position: static;
				text-align: center;
			}

			&-decorative {
				font-size: font-size('5xl'); // 40px
				writing-mode: horizontal-tb;
				text-orientation: initial;
				transform: none;
				position: static;
				text-align: center;
				top: 0;
				left: 0;
			}
		}

		&__diagram {
			position: static;
			order: 2;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: spacing(6);
		}

		&__path {
			position: static;
			width: 100%;
			max-width: 320px;
			height: auto;
			order: 2;

			&-svg {
				width: 100%;
				height: auto;
			}
		}

		&__markers {
			display: none; // Скрываем маркеры на мобильных
		}

		&__steps {
			position: static;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			gap: spacing(8);
			order: 1;
		}

		&__step {
			position: static !important;
			width: 100% !important;
			text-align: center !important;
			padding: spacing(4);
			background-color: rgba(color(primary), 0.05);
			border-radius: 10px;

			&-title {
				font-size: font-size('2xl'); // 24px
				line-height: 1.3;
				margin-bottom: spacing(2);

				&--multiline {
					br {
						display: none;
					}
				}
			}

			&-description {
				font-size: font-size('lg'); // 18px
			}
		}
	}
}

// Tablet: 768px - 899px
@media (min-width: breakpoint('md')) and (max-width: calc(breakpoint('tablet') - 1px)) {
	.workflow {
		&__content {
			height: 700px;
		}

		&__title {
			top: 50px;
			width: 80px;
			height: 520px;

			&-vertical {
				font-size: font-size('6xl'); // 54px
			}

			&-decorative {
				font-size: font-size('7xl'); // 68px
				top: -15px;
				left: -15px;
			}
		}

		&__diagram {
			top: 60px;
			left: 120px;
			width: 600px;
			height: 580px;
		}

		&__markers {
			top: -10px;
			left: -5px;
			width: 620px;
			height: 600px;
		}

		&__marker {
			width: 16px;
			height: 16px;

			&--step1 {
				top: 0;
				left: 0;
			}

			&--step2 {
				top: 0;
				left: 420px;
			}

			&--step3 {
				top: 155px;
				left: 240px;
			}

			&--step4 {
				top: 155px;
				left: 580px;
			}

			&--step5 {
				top: 310px;
				left: 240px;
			}

			&--step6 {
				top: 310px;
				left: 580px;
			}

			&--step7 {
				top: 465px;
				left: 0;
			}

			&--step8 {
				top: 465px;
				left: 420px;
			}
		}

		&__step {
			&--knowledge {
				top: -50px;
				left: -25px;
				width: 160px;
			}

			&--briefing {
				top: -50px;
				left: 350px;
				width: 150px;
			}

			&--prepayment {
				top: 105px;
				left: 110px;
				width: 280px;
			}

			&--contract {
				top: 105px;
				left: 440px;
				width: 300px;
			}

			&--approval {
				top: 260px;
				left: 130px;
				width: 250px;
			}

			&--layout {
				top: 250px;
				left: 390px;
				width: 400px;
			}

			&--delivery {
				top: 410px;
				left: -25px;
				width: 120px;
			}

			&--payment {
				top: 425px;
				left: 330px;
				width: 180px;
			}

			&-title {
				font-size: font-size('xl'); // 20px
				line-height: 1.4;

				&--multiline {
					line-height: 1.1;
				}
			}

			&-description {
				font-size: font-size('lg'); // 18px
			}
		}
	}
}

// Tablet Large: 900px - 1023px
@media (min-width: breakpoint('tablet')) and (max-width: calc(breakpoint('lg') - 1px)) {
	.workflow {
		&__content {
			height: 750px;
		}

		&__title {
			top: 70px;
			width: 100px;
			height: 580px;

			&-vertical {
				font-size: font-size('7xl'); // 68px
			}

			&-decorative {
				font-size: font-size('8xl'); // 80px
				top: -20px;
				left: -20px;
			}
		}

		&__diagram {
			top: 80px;
			left: 150px;
			width: 700px;
			height: 600px;
		}

		&__markers {
			top: -10px;
			left: -3px;
			width: 720px;
			height: 620px;
		}

		&__marker {
			width: 18px;
			height: 18px;

			&--step1 {
				top: 0;
				left: 0;
			}

			&--step2 {
				top: 0;
				left: 480px;
			}

			&--step3 {
				top: 170px;
				left: 280px;
			}

			&--step4 {
				top: 170px;
				left: 680px;
			}

			&--step5 {
				top: 340px;
				left: 280px;
			}

			&--step6 {
				top: 340px;
				left: 680px;
			}

			&--step7 {
				top: 510px;
				left: 0;
			}

			&--step8 {
				top: 510px;
				left: 480px;
			}
		}

		&__step {
			&--knowledge {
				top: -55px;
				left: -28px;
				width: 180px;
			}

			&--briefing {
				top: -55px;
				left: 400px;
				width: 170px;
			}

			&--prepayment {
				top: 115px;
				left: 130px;
				width: 320px;
			}

			&--contract {
				top: 115px;
				left: 500px;
				width: 350px;
			}

			&--approval {
				top: 285px;
				left: 150px;
				width: 280px;
			}

			&--layout {
				top: 275px;
				left: 460px;
				width: 450px;
			}

			&--delivery {
				top: 450px;
				left: -28px;
				width: 130px;
			}

			&--payment {
				top: 465px;
				left: 380px;
				width: 200px;
			}

			&-title {
				font-size: font-size('2xl'); // 24px
				line-height: 1.5;

				&--multiline {
					line-height: 1.2;
				}
			}

			&-description {
				font-size: font-size('xl'); // 20px
			}
		}
	}
}

// Desktop: 1024px - 1279px
@media (min-width: breakpoint('lg')) and (max-width: calc(breakpoint('xl') - 1px)) {
	.workflow {
		&__content {
			height: 780px;
		}

		&__title {
			top: 85px;
			width: 110px;
			height: 610px;

			&-vertical {
				font-size: font-size('8xl'); // 80px
			}

			&-decorative {
				font-size: font-size('9xl'); // 108px
			}
		}

		&__diagram {
			top: 95px;
			left: 180px;
			width: 850px;
			height: 590px;
		}

		&__markers {
			top: -11px;
			left: -3px;
			width: 870px;
			height: 610px;
		}

		&__marker {
			width: 20px;
			height: 20px;

			&--step1 {
				top: 0;
				left: 0;
			}

			&--step2 {
				top: 0;
				left: 500px;
			}

			&--step3 {
				top: 185px;
				left: 300px;
			}

			&--step4 {
				top: 185px;
				left: 750px;
			}

			&--step5 {
				top: 370px;
				left: 300px;
			}

			&--step6 {
				top: 370px;
				left: 750px;
			}

			&--step7 {
				top: 555px;
				left: 0;
			}

			&--step8 {
				top: 555px;
				left: 500px;
			}
		}

		&__step {
			&--knowledge {
				top: -56px;
				left: -28px;
				width: 200px;
			}

			&--briefing {
				top: -56px;
				left: 420px;
				width: 190px;
			}

			&--prepayment {
				top: 130px;
				left: 140px;
				width: 340px;
			}

			&--contract {
				top: 130px;
				left: 540px;
				width: 380px;
			}

			&--approval {
				top: 315px;
				left: 160px;
				width: 300px;
			}

			&--layout {
				top: 305px;
				left: 480px;
				width: 500px;
			}

			&--delivery {
				top: 495px;
				left: -28px;
				width: 140px;
			}

			&--payment {
				top: 510px;
				left: 400px;
				width: 220px;
			}

			&-title {
				font-size: font-size('2xl'); // 24px
				line-height: 1.6;

				&--multiline {
					line-height: 1.1;
					margin-bottom: spacing(2);
				}
			}

			&-description {
				font-size: font-size('2xl'); // 24px
			}
		}
	}
}
</style>
