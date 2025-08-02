<template>
	<section class="contact-section">
		<div class="contact-section__container">
			<div class="contact-section__title trig-slide-left trig-stagger-1" data-trig>
				<div class="contact-section__title-main">СВЯЗЬ СО</div>
				<div class="contact-section__title-decorative">МНОЙ</div>
			</div>

			<div class="contact-section__content">
				<p class="contact-section__call-to-action trig-fade-in trig-stagger-2" data-trig>
					Каждый проект — это возможность рассказать новую историю. Хотите
					рассказать свою? Напишите мне!
				</p>

				<blockquote class="contact-section__quote trig-fade-in trig-stagger-3" data-trig>
					«Дизайн — это не просто внешний вид и ощущения. Дизайн — это то, как
					это работает. И настоящая простота приходит не тогда, когда больше
					нечего добавить, а когда нечего убрать».
				</blockquote>

				<cite class="contact-section__quote-author trig-fade-in trig-stagger-4" data-trig>Стив Джобс</cite>

				<div class="contact-section__qr-codes">
					<a
						class="contact-section__qr-item contact-qr-animation trig-stagger-1"
						data-trig
						href="https://vk.com/russiankisa"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="contact-section__qr-image">
							<img src="/images/qr-vk.png" alt="QR-код ВКонтакте" />
						</div>
						<span class="contact-section__qr-label">ВКонтакте</span>
					</a>

					<a
						class="contact-section__qr-item contact-qr-animation trig-stagger-2"
						data-trig
						href="https://t.me/kt_mch"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="contact-section__qr-image">
							<img src="/images/qr-telegram.png" alt="QR-код Telegram" />
						</div>
						<span class="contact-section__qr-label">Telegram</span>
					</a>

					<a
						class="contact-section__qr-item contact-qr-animation trig-stagger-3"
						data-trig
						href="https://www.instagram.com/kt.mch/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="contact-section__qr-image">
							<img src="/images/qr-instagram.png" alt="QR-код Instagram" />
						</div>
						<span class="contact-section__qr-label">Instagram</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
// Компонент не требует дополнительной логики
</script>

<style lang="scss" scoped>
.contact-section {
	background-color: #fff6f4;
	padding: 0;
	width: 100%;
	height: 832px;
	position: relative;
	overflow: hidden;

	&__container {
		position: relative;
		width: 1280px;
		height: 100%;
		margin: 0 auto;
	}

	&__title {
		position: absolute;
		right: 26px;
		top: 63px;
		width: 124px;
		height: 706px;

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 118px
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
			font-size: 7.4rem; // 118px
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

	&__content {
		padding-right: 150px;
		height: 100%;
		position: relative;
	}

	&__call-to-action {
		position: absolute;
		left: 14px;
		top: 64px;
		width: 793px;
		height: 108px;
		font-family: 'Oranienbaum', serif;
		font-size: 30px;
		font-weight: 400;
		line-height: 1.7777777777777777;
		color: #000000;
		margin: 0;
	}

	&__quote {
		position: absolute;
		left: 26px;
		top: 200px;
		width: 1040px;
		height: 132px;
		font-family: 'Disruptors Script', cursive;
		font-size: 54px;
		font-weight: 400;
		line-height: 0.8125;
		color: #db2e28;
		text-align: right;
		margin: 0;
		font-style: normal;
	}

	&__quote-author {
		position: absolute;
		right: 214px;
		top: 352px;
		width: 202px;
		height: 41px;
		font-family: 'Disruptors Script', cursive;
		font-size: 54px;
		font-weight: 400;
		line-height: 0.75;
		color: #db2e28;
		text-align: right;
		font-style: normal;
	}

	&__qr-codes {
		position: absolute;
		left: -1px;
		top: 417px;
		width: 1280px;
		height: 377px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 46px;
	}

	&__qr-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		&:nth-child(1) {
			margin-top: 0;
		}

		&:nth-child(2) {
			margin-top: 0;
		}

		&:nth-child(3) {
			margin-top: 6px;
		}
	}

	&__qr-image {
		width: 328px;
		height: 328px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
		margin-bottom: 5px;

		&:hover {
			transform: scale(1.05);
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
	}

	&__qr-label {
		font-family: 'Oranienbaum', serif;
		font-size: 34px;
		font-weight: 400;
		line-height: 1.15;
		color: #db2e28;
		text-align: center;
		margin-top: 6px;
	}
}

// Адаптивность
@media (max-width: 1600px) {
	.contact-section {
		height: auto;
		min-height: 832px;

		&__container {
			width: 100%;
			max-width: 1280px;
			padding: 0 20px;
		}

		&__title {
			font-size: clamp(68px, 8vw, 118px);
			width: clamp(68px, 8vw, 124px);
			right: 20px;

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

		&__content {
			padding-right: clamp(100px, 10vw, 150px);
			padding: 20px;
		}

		&__call-to-action {
			position: relative;
			left: 0;
			top: 0;
			width: 100%;
			height: auto;
			font-size: clamp(20px, 3vw, 30px);
			margin-bottom: 40px;
		}

		&__quote {
			position: relative;
			left: 0;
			top: 0;
			width: 100%;
			height: auto;
			font-size: clamp(24px, 4vw, 54px);
			text-align: center;
			margin-bottom: 20px;
		}

		&__quote-author {
			position: relative;
			right: 0;
			top: 0;
			width: 100%;
			height: auto;
			font-size: clamp(20px, 3vw, 54px);
			text-align: center;
			margin-bottom: 60px;
		}

		&__qr-codes {
			position: relative;
			left: 0;
			top: 0;
			width: 100%;
			height: auto;
			flex-direction: column;
			gap: 40px;
			align-items: center;
		}

		&__qr-item {
			&:nth-child(1),
			&:nth-child(2),
			&:nth-child(3) {
				margin-top: 0;
			}
		}

		&__qr-image {
			width: clamp(200px, 30vw, 328px);
			height: clamp(200px, 30vw, 328px);
		}

		&__qr-label {
			font-size: clamp(24px, 3vw, 34px);
		}
	}
}

@media (max-width: 768px) {
	.contact-section {
		&__title {
			writing-mode: horizontal-tb;
			text-orientation: unset;
			position: relative;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: 30px;
			top: 0;
			right: 0;

			&-main {
				font-size: font-size('5xl');
			}

			&-decorative {
				font-size: font-size('5xl');
			}
		}

		&__content {
			padding: 20px;
		}

		&__qr-codes {
			flex-direction: column;
			gap: 30px;
		}

		&__qr-image {
			width: 250px;
			height: 250px;
		}
	}
}
</style>
