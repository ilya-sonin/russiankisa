<template>
	<section class="hero">
		<div class="container">
			<div class="hero__content">
				<div class="hero__decorative">
					<span class="decorative-text">Творческое</span>
				</div>

				<div class="hero__title">
					<h1 class="hero-title">ПОРТФОЛИО</h1>
				</div>

				<div class="hero__image">
					<img
						src="/images/hero-image.png"
						alt="Creative Portfolio"
						class="hero__image-img"
					/>
				</div>

				<div class="hero__action">
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
		top: 120px;
		left: 213px;
		z-index: 1;
	}

	&__title {
		position: absolute;
		top: 290px;
		left: 56px;
		z-index: 2;
		max-width: 1399px;
		height: 312px;
	}

	&__image {
		position: absolute;
		top: -180px;
		right: 0;
		z-index: 0;

		&-img {
			width: 704px;
			height: 719px;
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
