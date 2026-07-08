<template>
	<header
		data-testid="section-header"
		class="fixed top-0 left-0 w-full transition-all duration-300 ease-in-out"
		:class="{ 'overflow-hidden': !isMobileMenuOpen, 'z-[10000]': true }"
	>
		<div
			class="px-4 py-3 transition-all duration-300 relative z-[10001]"
			:class="{
				'bg-background shadow-lg': isScrolled || isMobileMenuOpen,
				'bg-transparent': !isScrolled && !isMobileMenuOpen,
			}"
		>
			<div class="container max-w-full">
				<div class="flex items-center tablet:justify-center justify-between relative">
					<nav class="hidden tablet:flex items-center gap-4 lg:gap-6 absolute left-0">
						<a
							v-for="link in leftLinks"
							:key="link.id"
							:href="link.href"
							class="nav-link"
							:class="{ 'text-center leading-[0.78] md:leading-[1.155]': link.multiline }"
							v-html="link.label"
						/>
					</nav>

					<div class="tablet:static tablet:order-none relative z-[10002]">
						<a href="#">
							<div class="relative w-[140px] h-[55px] lg:w-[120px] lg:h-[47px] tablet:w-[100px] tablet:h-[40px] md:w-[90px] md:h-[36px]">
								<img
									:src="content.logo.withCat.src"
									:alt="content.logo.withCat.alt"
									class="absolute top-0 left-0 w-full h-full object-contain transition-all duration-400 ease-in-out z-10"
									:class="{
										'opacity-0 scale-105': isScrolled || isMobileMenuOpen,
										'opacity-100 scale-100': !isScrolled && !isMobileMenuOpen,
									}"
								/>
								<img
									:src="content.logo.withoutCat.src"
									:alt="content.logo.withoutCat.alt"
									class="absolute top-0 left-0 w-full h-full object-contain transition-all duration-400 ease-in-out z-0"
									:class="{
										'opacity-100 scale-100': isScrolled || isMobileMenuOpen,
										'opacity-0 scale-95': !isScrolled && !isMobileMenuOpen,
									}"
								/>
							</div>
						</a>
					</div>

					<nav class="hidden tablet:flex items-center gap-4 lg:gap-6 absolute right-0">
						<a
							v-for="link in rightLinks"
							:key="link.id"
							:href="link.href"
							class="nav-link"
							v-html="link.label"
						/>
					</nav>

					<button
						@click="toggleMobileMenu"
						class="tablet:hidden absolute right-0 flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-[10003]"
					>
						<span class="w-6 h-0.5 bg-text-primary transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }" />
						<span class="w-6 h-0.5 bg-text-primary transition-all duration-300" :class="{ 'opacity-0': isMobileMenuOpen }" />
						<span class="w-6 h-0.5 bg-text-primary transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }" />
					</button>
				</div>
			</div>
		</div>
	</header>

	<transition name="mobile-menu">
		<div
			v-if="isMobileMenuOpen"
			class="tablet:hidden fixed top-[70px] left-0 w-full bg-background flex flex-col items-center justify-start py-8 space-y-6 z-[9998] shadow-lg"
		>
			<a
				v-for="link in content.navigation"
				:key="link.id"
				:href="link.href"
				class="nav-link text-2xl text-center"
				@click="closeMobileMenu"
				v-html="link.label"
			/>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { HeaderContent } from '~/types/site-content'

const props = defineProps<{ content: HeaderContent }>()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const leftLinks = computed(() => props.content.navigation.slice(0, 2))
const rightLinks = computed(() => props.content.navigation.slice(2))

const handleScroll = () => {
	isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
.py-4 {
	@media (max-width: theme('screens.sm')) {
		padding-top: 1rem;
		padding-bottom: 0.4rem;
	}
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
