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

				<div class="about__photo about-photo-animation trig-stagger-3" data-trig>
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
						<div class="about__tool about-tools-animation trig-stagger-1" data-trig>
							<img
								src="/images/tool-figma.svg"
								alt="Figma"
								class="about__tool-icon"
							/>
							<span class="about__tool-name">Figma</span>
						</div>

						<div class="about__tool about-tools-animation trig-stagger-2" data-trig>
							<img
								src="/images/tool-tilda.svg"
								alt="Tilda"
								class="about__tool-icon"
							/>
							<span class="about__tool-name">Tilda</span>
						</div>

						<div class="about__tool about__tool--multiline about-tools-animation trig-stagger-3" data-trig>
							<img
								src="/images/tool-slides.svg"
								alt="Google Slides"
								class="about__tool-icon"
							/>
							<span class="about__tool-name about__tool-name--center"
								>Google<br />Slides</span
							>
						</div>

						<div class="about__tool about-tools-animation trig-stagger-4" data-trig>
							<img
								src="/images/tool-picsart.svg"
								alt="PicsArt"
								class="about__tool-icon"
							/>
							<span class="about__tool-name">PicsArt</span>
						</div>

						<div class="about__tool about__tool--multiline about-tools-animation trig-stagger-5" data-trig>
							<img
								src="/images/tool-office.svg"
								alt="Microsoft Office"
								class="about__tool-icon"
							/>
							<span class="about__tool-name about__tool-name--center"
								>Microsoft<br />Office</span
							>
						</div>

						<div class="about__tool about-tools-animation trig-stagger-6" data-trig>
							<img
								src="/images/tool-recraft.svg"
								alt="Recraft AI"
								class="about__tool-icon"
							/>
							<span class="about__tool-name about__tool-name--center"
								>Recraft Al</span
							>
						</div>

						<div class="about__tool about-tools-animation trig-stagger-7" data-trig>
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

@media (max-width: breakpoint(lg)) {
	.about {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__intro {
			position: static;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('2xl');
				text-align: center;

				.decorative-text {
					font-size: font-size('4xl'); // 32px на планшетах
				}
			}
		}

		&__title {
			position: static;
			text-align: center;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
			}
		}

		&__photo {
			position: static;
			text-align: center;
			margin-bottom: spacing(8);

			&-img {
				width: 400px;
				height: 285px;
				margin: 0 auto;
			}
		}

		&__decorative {
			position: static;
			text-align: center;
			margin: spacing(6) 0;

			&-text {
				font-size: font-size('4xl'); // соответствует decorative-text
			}
		}

		&__tools {
			position: static;
			width: 100%;
			margin: spacing(8) 0;

			&-title {
				.decorative-text {
					font-size: inherit;
				}
			}

			&-grid {
				justify-content: space-around;
			}
		}

		&__tool {
			flex: 0 0 calc(33.333% - spacing(4));
		}

		&__outro {
			position: static;
			margin-top: spacing(8);

			&-text {
				font-size: font-size('2xl');
				text-align: center;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.about {
		padding: spacing(8) 0;

		&__intro,
		&__outro {
			&-text {
				font-size: font-size('lg');
				line-height: 1.6;

				.decorative-text {
					font-size: font-size('2xl'); // 24px на мобильных
				}
			}
		}

		&__title {
			&-text {
				font-size: font-size('5xl');
			}
		}

		&__photo {
			&-img {
				width: 300px;
				height: 214px;
			}
		}

		&__decorative {
			&-text {
				font-size: font-size(
					'2xl'
				); // соответствует decorative-text на мобильных
			}
		}

		&__tools {
			&-title {
				font-size: font-size('xl');

				.decorative-text {
					font-size: inherit;
				}
			}

			&-grid {
				justify-content: space-around;
			}
		}

		&__tool {
			flex: 0 0 calc(50% - spacing(2));

			&-icon {
				width: 40px;
				height: 40px;
			}

			&-name {
				font-size: font-size('base');
			}
		}
	}
}
</style>
