<template>
	<section
		class="hero min-h-screen relative overflow-hidden md:-mt-8 flex items-center justify-center px-4 py-8 sm:py-0"
		data-testid="section-hero"
	>
		<div class="container h-full">
			<div class="hero__layout">
				<!-- Птичка для xs - над заголовком -->
				<div class="hero__mobile-image hero-image-animation trig-stagger-1" data-trig>
					<img
						src="/images/hero-image.png"
						alt="Creative Portfolio"
						class="w-[150px] h-[153px] object-cover"
					/>
				</div>

				<div class="hero__title-wrap hero-title-animation trig-stagger-2" data-trig>
					<h1 class="hero-title text-center sm:text-left">
						<span class="decorative-text hero__decorative">Творческое</span><br />
						<span>ПОРТФОЛИО</span>
					</h1>
				</div>

				<div class="hero__actions trig-fade-in trig-stagger-3" data-trig>
					<a href="#portfolio" class="btn"> СМОТРЕТЬ РАБОТЫ </a>
				</div>

				<!-- Птичка для sm и выше -->
				<div class="hero__desktop-image hero-image-animation trig-stagger-1" data-trig>
					<img
						src="/images/hero-image.png"
						alt="Creative Portfolio"
						class="w-[250px] h-[256px] md:w-[300px] md:h-[307px] lg:w-[400px] lg:h-[410px] xl:w-[450px] xl:h-[461px] 2xl:w-[500px] 2xl:h-[512px] object-cover md:mx-auto"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;

	&__layout {
		position: relative;
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: spacing(4);
		text-align: center;
	}

	&__mobile-image {
		display: block;
		position: relative;
		left: spacing(12);
	}

	&__desktop-image {
		display: none;
		position: absolute;
		right: 0;
		bottom: spacing(10);
	}

	&__decorative {
		position: relative;
		top: 30px;
		left: 25px;
	}

	&__actions {
		position: relative;
		z-index: 30;
		margin-top: spacing(8);
	}
}

@media (min-width: breakpoint(sm)) {
	.hero {
		&__layout {
			align-items: flex-start;
			text-align: left;
			gap: spacing(5);
		}

		&__mobile-image {
			display: none;
		}

		&__desktop-image {
			display: block;
		}

		&__decorative {
			top: spacing(16);
			left: spacing(16);
		}
	}
}

@media (min-width: breakpoint(md)) {
	.hero {
		&__desktop-image {
			bottom: spacing(14);
			right: -#{spacing(8)};
		}

		&__decorative {
			top: spacing(24);
			left: spacing(24);
		}
	}
}

@media (min-width: breakpoint(lg)) {
	.hero {
		&__desktop-image {
			bottom: spacing(16);
		}

		&__decorative {
			top: spacing(24);
			left: spacing(28);
		}
	}
}

@media (min-width: breakpoint(xl)) {
	.hero {
		&__desktop-image {
			bottom: spacing(20);
		}

		&__decorative {
			top: spacing(32);
			left: spacing(32);
		}
	}
}

@media (min-width: breakpoint('2xl')) {
	.hero {
		&__desktop-image {
			bottom: spacing(24);
		}

		&__decorative {
			top: spacing(36);
			left: spacing(36);
		}
	}
}

img {
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
	pointer-events: none;
}
</style>
