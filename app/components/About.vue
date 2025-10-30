<template>
	<section id="about" class="about">
		<div class="container">
			<div class="about__content">
				<div class="about__intro trig-fade-in trig-stagger-1" data-trig>
					<p class="about__intro-text">
						Привет и добро пожаловать в мой творческий уголок! Меня зовут
						Екатерина,
						<span class="decorative-text">я - графический и веб-дизайнер</span>,
						превращаю визуальный код в искусство.
					</p>
				</div>

				<div class="about__title trig-slide-left trig-stagger-2" data-trig>
					<h2 class="about__title-text">
						КТО <span class="decorative-text">Я</span> ?
					</h2>
				</div>

				<div
					class="about__photo about-photo-animation trig-stagger-3"
					data-trig
				>
					<img
						src="/images/about-photo.png"
						alt="Екатерина - графический и веб-дизайнер"
						class="about__photo-img"
					/>
				</div>

				<div class="about__decorative about__decorative--print">
					<span class="about__decorative-text"
						>работа с визуальными образами для печатных медиа</span
					>
				</div>

				<div class="about__decorative about__decorative--digital">
					<span class="about__decorative-text"
						>создание удобных и красивых цифровых интерфейсов</span
					>
				</div>

				<div class="about__tools trig-fade-in trig-stagger-4" data-trig>
					<div class="about__tools-header">
						<h3 class="about__tools-title">
							РАБОЧИЙ ИНСТРУМЕНТ<span class="decorative-text">арий</span> :
						</h3>
					</div>

					<div class="about__tools-grid">
						<div
							class="about__tool about-tools-animation trig-stagger-1"
							data-trig
						>
							<img
								src="/images/tool-figma.svg"
								alt="Figma"
								class="about__tool-icon"
							/>
							<span class="about__tool-name">Figma</span>
						</div>

						<div
							class="about__tool about-tools-animation trig-stagger-2"
							data-trig
						>
							<img
								src="/images/tool-tilda.svg"
								alt="Tilda"
								class="about__tool-icon"
							/>
							<span class="about__tool-name">Tilda</span>
						</div>

						<div
							class="about__tool about__tool--multiline about-tools-animation trig-stagger-3"
							data-trig
						>
							<img
								src="/images/tool-slides.svg"
								alt="Google Slides"
								class="about__tool-icon"
							/>
							<span class="about__tool-name about__tool-name--center"
								>Google<br />Slides</span
							>
						</div>

						<div
							class="about__tool about-tools-animation trig-stagger-4"
							data-trig
						>
							<img
								src="/images/tool-picsart.svg"
								alt="PicsArt"
								class="about__tool-icon"
							/>
							<span class="about__tool-name">PicsArt</span>
						</div>

						<div
							class="about__tool about__tool--multiline about-tools-animation trig-stagger-5"
							data-trig
						>
							<img
								src="/images/tool-office.svg"
								alt="Microsoft Office"
								class="about__tool-icon"
							/>
							<span class="about__tool-name about__tool-name--center"
								>Microsoft<br />Office</span
							>
						</div>

						<div
							class="about__tool about-tools-animation trig-stagger-6"
							data-trig
						>
							<img
								src="/images/tool-recraft.svg"
								alt="Recraft AI"
								class="about__tool-icon"
							/>
							<span class="about__tool-name about__tool-name--center"
								>Recraft Al</span
							>
						</div>

						<div
							class="about__tool about-tools-animation trig-stagger-7"
							data-trig
						>
							<img
								src="/images/tool-midjourney.svg"
								alt="Midjourney"
								class="about__tool-icon"
							/>
							<span class="about__tool-name about__tool-name--center"
								>Midjourney</span
							>
						</div>
					</div>
				</div>

				<div class="about__outro">
					<p class="about__outro-text">
						Моя работа помогает не только создавать стиль и узнаваемость, но и
						упорядочивать визуальный хаос, делая сложное простым, а обычное —
						запоминающимся.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.about {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px;
		width: 100%;
	}

	&__intro {
		position: absolute;
		top: 28px;
		left: 17px;
		right: 17px;

		&-text {
			font-family: font-family(primary);
			font-size: font-size('3xl'); // 36px
			line-height: 1.778;
			color: color(text-primary);
			margin: 0;

			.decorative-text {
				font-family: font-family(decorative);
				font-size: font-size('5xl'); // 48px
				color: color(primary);
				line-height: 1.2;
			}
		}
	}

	&__title {
		position: absolute;
		top: 240px;
		right: 0;

		&-text {
			font-family: font-family(primary);
			font-size: 7.4rem; // 118px
			line-height: 1.155;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;

			.decorative-text {
				font-family: font-family(decorative);
				font-size: 7.4rem;
				color: color(primary);
				line-height: inherit;
			}
		}
	}

	&__photo {
		position: absolute;
		top: 249px;
		left: 640px;

		&-img {
			width: 468px;
			height: 335px;
			border-radius: 10px;
			object-fit: cover;
		}
	}

	&__decorative {
		position: absolute;
		width: 100%;
		text-align: center;

		&--print {
			top: 164px;
			left: 0;
		}

		&--digital {
			top: 618px;
			left: 0;
		}

		&-text {
			font-family: font-family(decorative);
			font-size: font-size('5xl'); // 48px как у decorative-text
			line-height: 1.143;
			color: color(primary);
			text-align: center;
		}
	}

	&__tools {
		position: absolute;
		top: 255px;
		left: 119px;
		width: 378px;

		&-header {
			margin-bottom: 32px;
		}

		&-title {
			font-family: font-family(primary);
			font-size: font-size('3xl'); // 30px как intro-text
			line-height: 1.389;
			color: color(text-primary);
			margin: 0;

			position: relative;
			left: 28px;

			.decorative-text {
				font-family: font-family(decorative);
				font-size: font-size('5xl');
				color: color(primary);
				line-height: inherit;
			}
		}

		&-grid {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: center;
			gap: spacing(4);
		}
	}

	&__tool {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		flex: 0 0 calc(25% - spacing(3));
		min-height: 100px;

		&--multiline {
			.about__tool-name {
				line-height: 1.2;
			}
		}

		&-icon {
			width: 60px;
			height: 60px;
			object-fit: contain;
			margin-bottom: spacing(1);
		}

		&-name {
			font-family: font-family(primary);
			font-size: font-size('xl'); // 24px
			line-height: 2.667;
			color: color(text-primary);

			&--center {
				text-align: center;
				line-height: 1.2;
			}
		}
	}

	&__outro {
		position: absolute;
		bottom: 36px;
		left: 17px;
		right: 17px;

		&-text {
			font-family: font-family(primary);
			font-size: font-size('3xl'); // 36px
			line-height: 1.778;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}
}

// Адаптив для мобильных устройств (xs): до 550px
@media (max-width: calc(breakpoint('sm') - 1px)) {
	.about {
		&__content {
			display: flex;
			flex-direction: column;
			height: auto;
			gap: spacing(6);
			padding: spacing(4) 0;
		}

		&__title {
			position: static;
			order: 1;
			margin-bottom: spacing(4);

			&-text {
				font-size: font-size('xl'); // 20px
				writing-mode: horizontal-tb;
				text-orientation: initial;
				line-height: 1.2;

				.decorative-text {
					font-size: font-size('xl');
				}
			}
		}

		&__intro {
			position: static;
			order: 2;
			background-color: color(base);
			padding: spacing(4);
			border-radius: 10px;

			&-text {
				font-size: font-size('lg'); // 18px
				line-height: 1.5;

				.decorative-text {
					font-size: font-size('xl'); // 20px
				}
			}
		}

		&__decorative {
			position: static;

			&--print {
				order: 3;
				padding: spacing(4) 0;
			}

			&--digital {
				order: 6;
				padding: spacing(4) 0;
			}

			&-text {
				font-size: font-size('5xl'); // 48px
			}
		}

		&__photo {
			position: static;
			order: 4;
			display: flex;
			justify-content: center;

			&-img {
				width: 100%;
				height: auto;
				border-radius: 10px;
			}
		}

		&__tools {
			position: static;
			order: 5;
			width: 100%;
			padding: spacing(4) 0;

			&-header {
				margin-bottom: spacing(4);
			}

			&-title {
				font-size: font-size('lg'); // 18px
				left: 0;

				.decorative-text {
					font-size: font-size('xl'); // 20px
				}
			}

			&-grid {
				flex-wrap: wrap;
				gap: spacing(3);
			}
		}

		&__tool {
			flex: 0 0 calc(33.333% - spacing(2));

			&-icon {
				width: 30px;
				height: 30px;
			}

			&-name {
				font-size: font-size('sm'); // 14px
			}
		}

		&__outro {
			position: static;
			order: 7;
			background-color: color(base);
			padding: spacing(4);
			border-radius: 10px;

			&-text {
				font-size: font-size('lg'); // 18px
				text-align: left;
				line-height: 1.5;
			}
		}
	}
}

// Адаптив для sm до md: 550px - 768px
@media (min-width: breakpoint('sm')) and (max-width: calc(breakpoint('md') - 1px)) {
	.about {
		&__content {
			display: flex;
			flex-direction: column;
			height: auto;
			gap: spacing(6);
			padding: spacing(4) 0;
		}

		&__title {
			position: static;
			order: 1;
			margin-bottom: spacing(4);

			&-text {
				font-size: font-size('xl'); // 20px
				writing-mode: horizontal-tb;
				text-orientation: initial;
				line-height: 1.2;

				.decorative-text {
					font-size: font-size('xl');
				}
			}
		}

		&__intro {
			position: static;
			order: 2;
			background-color: color(base);
			padding: spacing(4);
			border-radius: 10px;

			&-text {
				font-size: font-size('lg'); // 18px
				line-height: 1.5;

				.decorative-text {
					font-size: font-size('xl'); // 20px
				}
			}
		}

		&__decorative {
			position: static;

			&--print {
				order: 3;
				padding: spacing(4) 0;
			}

			&--digital {
				order: 6;
				padding: spacing(4) 0;
			}

			&-text {
				font-size: font-size('5xl'); // 48px
			}
		}

		&__photo {
			position: static;
			order: 4;
			display: flex;
			justify-content: center;

			&-img {
				width: 380px;
				height: auto;
				border-radius: 10px;
			}
		}

		&__tools {
			position: static;
			order: 5;
			width: 100%;
			padding: spacing(4) 0;

			&-header {
				margin-bottom: spacing(4);
			}

			&-title {
				font-size: font-size('lg'); // 18px
				left: 0;

				.decorative-text {
					font-size: font-size('xl'); // 20px
				}
			}

			&-grid {
				flex-wrap: wrap;
				gap: spacing(3);
			}
		}

		&__tool {
			flex: 0 0 calc(33.333% - spacing(2));

			&-icon {
				width: 30px;
				height: 30px;
			}

			&-name {
				font-size: font-size('sm'); // 14px
			}
		}

		&__outro {
			position: static;
			order: 7;
			background-color: color(base);
			padding: spacing(4);
			border-radius: 10px;

			&-text {
				font-size: font-size('lg'); // 18px
				text-align: left;
				line-height: 1.5;
			}
		}
	}
}

@media (min-width: breakpoint('md')) and (max-width: calc(breakpoint('tablet') - 1px)) {
	.about {
		&__content {
			height: 680px;
		}

		&__intro {
			&-text {
				font-size: font-size('xl'); // 20px вместо 36px

				.decorative-text {
					font-size: font-size('2xl'); // 24px вместо 48px
				}
			}
		}

		&__decorative--print {
			top: 120px;
		}

		&__decorative--digital {
			top: 500px;
		}

		&__tools {
			left: 10px;
			top: 180px;

			&-title {
				font-size: font-size('xl'); // 20px
			}

			&-header {
				margin-bottom: 16px;
			}

			&-grid {
				.about__tool {
					&-icon {
						width: 30px;
						height: 30px;
					}

					&-name {
						font-size: font-size('base');
					}
				}
			}
		}

		&__photo {
			top: 240px;
			left: 410px;

			&-img {
				width: 250px;
				height: auto;
			}
		}

		&__title {
			top: 220px;

			&-text {
				font-size: font-size('8xl'); // 80px

				.decorative-text {
					font-size: font-size('8xl');
				}
			}
		}

		&__outro {
			&-text {
				font-size: font-size('xl'); // 20px вместо 36px
			}
		}
	}
}

@media (min-width: breakpoint('tablet')) and (max-width: calc(breakpoint('lg') - 1px)) {
	.about {
		&__content {
			height: 732px;
		}

		&__intro {
			&-text {
				font-size: font-size('xl'); // 20px вместо 36px

				.decorative-text {
					font-size: font-size('2xl'); // 24px вместо 48px
				}
			}
		}

		&__decorative--print {
			top: 130px;
		}

		&__decorative--digital {
			top: 550px;
		}

		&__tools {
			left: 20px;
			top: 180px;

			&-title {
				font-size: font-size('xl'); // 20px
			}
		}

		&__photo {
			top: 250px;
			left: 450px;

			&-img {
				width: 280px;
				height: auto;
			}
		}

		&__title {
			top: 220px;

			&-text {
				font-size: font-size('8xl'); // 80px

				.decorative-text {
					font-size: font-size('8xl');
				}
			}
		}

		&__outro {
			&-text {
				font-size: font-size('xl'); // 20px вместо 36px
			}
		}
	}
}

@media (min-width: breakpoint('lg')) and (max-width: calc(breakpoint('xl') - 1px)) {
	.about {
		&__intro {
			&-text {
				font-size: font-size('2xl'); // 24px вместо 36px

				.decorative-text {
					font-size: font-size('3xl'); // 30px вместо 48px
				}
			}
		}

		&__photo {
			top: 265px;
			left: 550px;

			&-img {
				width: 350px;
				height: auto;
			}
		}

		&__title {
			top: 265px;

			&-text {
				font-size: font-size('8xl'); // 80px вместо 118px

				.decorative-text {
					font-size: font-size('8xl');
				}
			}
		}

		&__outro {
			&-text {
				font-size: font-size('2xl'); // 24px вместо 36px
			}
		}
	}
}
</style>
