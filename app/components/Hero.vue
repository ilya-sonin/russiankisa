<template>
	<section class="h-screen relative overflow-hidden">
		<div class="container h-full">
			<div
				class="relative flex flex-col justify-center items-center text-center h-full xl:gap-16 lg:gap-8 md:gap-4"
			>
				<div class="hero-title-animation trig-stagger-2" data-trig>
					<div
						class="relative sm:absolute right-0 sm:bottom-10 md:bottom-14 md:-right-8 2xl:bottom-28 hero-image-animation trig-stagger-1"
						data-trig
					>
						<img
							src="/images/hero-image.png"
							alt="Creative Portfolio"
							class="w-[150px] h-[150px] lg:w-[500px] lg:h-[512px] md:w-[300px] md:h-[307px] sm:w-[250px] sm:h-[256px] object-cover md:mx-auto"
						/>
					</div>
					<div class="flex flex-col items-start">
						<h1 class="hero-title text-left">
							<span
								class="decorative-text relative md:top-24 lg:top-28 xl:top-36 lg:left-28 md:left-24 sm:left-16 sm:top-16"
								>Творческое</span
							><br />
							<span>ПОРТФОЛИО</span>
						</h1>
					</div>
				</div>

				<div
					class="bottom-20 left-1/2 -translate-x-1/2 md:order-3 md:transform-none z-30 trig-fade-in trig-stagger-3"
					data-trig
				>
					<a href="#portfolio" class="btn"> СМОТРЕТЬ РАБОТЫ </a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>
