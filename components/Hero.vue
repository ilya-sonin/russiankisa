<template>
	<section class="hero">
		<div class="container">
			<div class="hero__content">
				<div class="hero__decorative hero-decorative-animation trig-stagger-1" data-trig>
					<span class="decorative-text">Творческое</span>
				</div>

				<div class="hero__title hero-title-animation trig-stagger-2" data-trig>
					<h1 class="hero-title">ПОРТФОЛИО</h1>
				</div>

				<div class="hero__image hero-image-animation trig-stagger-3" data-trig>
					<img
						src="/images/hero-image.png"
						alt="Creative Portfolio"
						class="hero__image-img"
					/>
				</div>

				<div class="hero__action trig-fade-in trig-stagger-4" data-trig>
					<a href="#portfolio" class="btn"> СМОТРЕТЬ РАБОТЫ </a>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero {
	min-height: 100vh;
	padding-top: 120px;
	position: relative;
	overflow: hidden;

	&__content {
		position: relative;
		height: calc(100vh - 120px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	&__decorative {
		position: absolute;
		top: 95px;
		left: 180px;
		z-index: 1;
	}

	&__title {
		position: absolute;
		top: 245px;
		left: 47px;
		z-index: 2;
		max-width: 1185px;
		height: 264px;
	}

	&__image {
		position: absolute;
		top: -150px;
		right: 0;
		z-index: 0;

		&-img {
			width: 596px;
			height: 608px;
			object-fit: cover;
		}
	}

	&__action {
		position: absolute;
		bottom: 100px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;

		.btn {
			background-color: color(primary) !important;
			color: color(background) !important;
			border: none;
			box-shadow: shadow(base);
		}
	}
}

@media (max-width: breakpoint(lg)) {
	.hero {
		&__decorative {
			left: spacing(8);
			top: 80px;
		}

		&__title {
			left: spacing(4);
			top: 220px;
		}

		&__image {
			right: -100px;
			top: -100px;

			&-img {
				width: 500px;
				height: 512px;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.hero {
		padding-top: 160px;

		&__content {
			height: auto;
			min-height: calc(100vh - 160px);
			gap: spacing(8);
			align-items: center;
			text-align: center;
		}

		&__decorative,
		&__title,
		&__image,
		&__action {
			position: static;
			transform: none;
		}

		&__decorative {
			order: 1;
		}

		&__title {
			order: 2;
		}

		&__image {
			order: 3;
			margin: spacing(8) 0;

			&-img {
				width: 300px;
				height: 307px;
				margin: 0 auto;
			}
		}

		&__action {
			order: 4;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.hero {
		&__image {
			&-img {
				width: 250px;
				height: 256px;
			}
		}
	}
}
</style>
