<template>
	<section class="h-screen relative overflow-hidden md:-mt-8">
		<div class="container h-full">
			<div
				class="relative flex flex-col items-center text-center h-full gap-4 2xl:gap-6 xl:gap-5 lg:gap-4 md:gap-4 sm:justify-center justify-center py-8 sm:py-0"
			>
				<div
					class="hero-title-animation trig-stagger-2 sm:static relative flex flex-col items-center sm:items-start"
					data-trig
				>
					<!-- Птичка для xs - над заголовком -->
					<div
						class="sm:hidden relative left-12 hero-image-animation trig-stagger-1"
						data-trig
					>
						<img
							src="/images/hero-image.png"
							alt="Creative Portfolio"
							class="w-[150px] h-[153px] object-cover"
						/>
					</div>

					<!-- Птичка для sm и выше -->
					<div
						class="hidden sm:block absolute right-0 bottom-10 md:bottom-14 md:-right-8 lg:bottom-16 xl:bottom-20 2xl:bottom-24 hero-image-animation trig-stagger-1"
						data-trig
					>
						<img
							src="/images/hero-image.png"
							alt="Creative Portfolio"
							class="w-[250px] h-[256px] md:w-[300px] md:h-[307px] lg:w-[400px] lg:h-[410px] xl:w-[450px] xl:h-[461px] 2xl:w-[500px] 2xl:h-[512px] object-cover md:mx-auto"
						/>
					</div>

					<div class="flex flex-col sm:items-start items-center justify-center relative top-[-100px] sm:top-0">
						<h1 class="hero-title text-left">
							<span
								class="decorative-text relative top-[30px] left-[25px] sm:top-16 sm:left-16 md:top-24 md:left-24 lg:top-24 lg:left-28 xl:top-32 xl:left-32 2xl:top-36 2xl:left-36"
								>Творческое</span
							><br />
							<span>ПОРТФОЛИО</span>
						</h1>
					</div>
				</div>

				<div
					class="absolute bottom-[10rem] sm:bottom-20 md:left-1/2 md:-translate-x-1/2 md:static md:transform-none z-30 trig-fade-in trig-stagger-3"
					data-trig
				>
					<a href="#portfolio" class="btn"> СМОТРЕТЬ РАБОТЫ </a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
section {
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
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
