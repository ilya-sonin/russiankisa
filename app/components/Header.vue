<template>
	<header
		class="fixed top-0 left-0 w-full z-fixed bg-background px-4 py-4 transition-shadow duration-300 ease-in-out trig-fade-in overflow-hidden"
		data-trig
		:class="{ 'shadow-lg': isScrolled }"
	>
		<div class="container max-w-full">
			<div class="flex items-center justify-center relative">
				<nav
					class="hidden tablet:flex items-center gap-4 lg:gap-6 trig-slide-left trig-stagger-1 absolute left-0"
					data-trig
				>
					<a href="#about" class="nav-link">Обо мне</a>
					<a
						href="#workflow"
						class="nav-link text-center leading-[0.78] md:leading-[1.155]"
					>
						Этапы<br />работы
					</a>
				</nav>

				<div
					class="trig-scale-up trig-stagger-2 tablet:static tablet:order-none"
					data-trig
				>
					<a href="#">
						<div
							class="relative w-[160px] h-[63px] lg:w-[140px] lg:h-[55px] tablet:w-[120px] tablet:h-[47px] md:w-[100px] md:h-[40px]"
						>
							<img
								src="/images/logo-with-cat.svg"
								alt="RussianKisa Logo"
								class="absolute top-0 left-0 w-full h-full object-contain transition-all duration-400 ease-in-out z-10"
								:class="{
									'opacity-0 scale-105': isScrolled,
									'opacity-100 scale-100': !isScrolled,
								}"
							/>
							<img
								src="/images/logo-without-cat.svg"
								alt="RussianKisa Logo"
								class="absolute top-0 left-0 w-full h-full object-contain transition-all duration-400 ease-in-out z-0"
								:class="{
									'opacity-100 scale-100': isScrolled,
									'opacity-0 scale-95': !isScrolled,
								}"
							/>
						</div>
					</a>
				</div>

				<nav
					class="hidden tablet:flex items-center gap-4 lg:gap-6 trig-slide-right trig-stagger-3 absolute right-0"
					data-trig
				>
					<a href="#services" class="nav-link">Услуги</a>
					<a href="#contacts" class="nav-link">Контакты</a>
				</nav>

				<button
					@click="toggleMobileMenu"
					class="tablet:hidden absolute right-0 flex flex-col justify-center items-center w-8 h-8 space-y-1"
					:class="{ 'z-50': isMobileMenuOpen }"
				>
					<span
						class="w-6 h-0.5 bg-text-primary transition-all duration-300"
						:class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"
					></span>
					<span
						class="w-6 h-0.5 bg-text-primary transition-all duration-300"
						:class="{ 'opacity-0': isMobileMenuOpen }"
					></span>
					<span
						class="w-6 h-0.5 bg-text-primary transition-all duration-300"
						:class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"
					></span>
				</button>
			</div>
		</div>

		<div
			v-if="isMobileMenuOpen"
			class="tablet:hidden absolute top-full left-0 w-full h-screen bg-background z-40 flex flex-col items-center justify-start pt-8 space-y-4"
		>
			<a href="#about" class="nav-link text-2xl" @click="closeMobileMenu">
				Обо мне
			</a>
			<a
				href="#workflow"
				class="nav-link text-2xl text-center"
				@click="closeMobileMenu"
			>
				Этапы<br />работы
			</a>
			<a href="#services" class="nav-link text-2xl" @click="closeMobileMenu">
				Услуги
			</a>
			<a href="#contacts" class="nav-link text-2xl" @click="closeMobileMenu">
				Контакты
			</a>
		</div>
	</header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
	isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.py-4 {
	@media (max-width: theme('screens.sm')) {
		padding-top: 1rem;
		padding-bottom: 0.4rem;
	}
}
</style>
