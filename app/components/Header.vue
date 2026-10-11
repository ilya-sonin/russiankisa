<template>
	<header
		data-testid="section-header"
		class="site-header"
		:class="{
			'site-header--scrolled': isScrolled,
			'site-header--menu-open': isMobileMenuOpen,
		}"
	>
		<div class="container site-header__inner">
			<nav class="site-header__nav site-header__nav--left" aria-label="Основная навигация">
				<a
					v-for="link in leftLinks"
					:key="link.id"
					:href="link.href"
					class="nav-link site-header__nav-link"
					v-html="link.label"
				/>
			</nav>

			<a ref="brandLink" href="#" class="site-header__brand" aria-label="В начало страницы" @click="closeMobileMenu">
				<span class="site-header__logo-frame">
					<img
						:src="content.logo.withCat.src"
						:alt="content.logo.withCat.alt"
						class="site-header__logo site-header__logo--cat"
					/>
					<img
						:src="content.logo.withoutCat.src"
						alt=""
						class="site-header__logo site-header__logo--compact"
					/>
				</span>
			</a>

			<nav class="site-header__nav site-header__nav--right" aria-label="Дополнительная навигация">
				<a
					v-for="link in rightLinks"
					:key="link.id"
					:href="link.href"
					class="nav-link site-header__nav-link"
					v-html="link.label"
				/>
			</nav>

			<button
				ref="menuButton"
				type="button"
				class="site-header__menu-button"
				:aria-expanded="isMobileMenuOpen"
				aria-controls="mobile-navigation"
				:aria-label="isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
				@click="toggleMobileMenu"
			>
				<span />
				<span />
				<span />
			</button>
		</div>

		<transition name="mobile-menu">
			<nav
				v-if="isMobileMenuOpen"
				ref="mobileNav"
				id="mobile-navigation"
				class="site-header__mobile-nav"
				aria-label="Мобильная навигация"
			>
				<div class="container site-header__mobile-nav-inner">
					<a
						v-for="(link, index) in content.navigation"
						:key="link.id"
						:href="link.href"
						class="nav-link site-header__mobile-link"
						@click="closeMobileMenu"
					>
						<span class="site-header__mobile-index">0{{ index + 1 }}</span>
						<span v-html="link.label" />
					</a>
				</div>
			</nav>
		</transition>
	</header>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import type { HeaderContent } from '~/types/site-content'

const props = defineProps<{ content: HeaderContent }>()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const brandLink = ref<HTMLAnchorElement | null>(null)
const mobileNav = ref<HTMLElement | null>(null)
const leftLinks = computed(() => props.content.navigation.slice(0, 2))
const rightLinks = computed(() => props.content.navigation.slice(2))

const handleScroll = () => {
	isScrolled.value = window.scrollY > 24
}

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
	if (!isMobileMenuOpen.value) return
	if (event.key === 'Escape') {
		event.preventDefault()
		closeMobileMenu()
	}
	if (event.key !== 'Tab') return
	const links = Array.from(mobileNav.value?.querySelectorAll<HTMLAnchorElement>('a') ?? [])
	const first = menuButton.value
	const last = links.at(-1)
	if (event.shiftKey && document.activeElement === first) {
		event.preventDefault()
		last?.focus()
	}
	else if (!event.shiftKey && document.activeElement === last) {
		event.preventDefault()
		first?.focus()
	}
}

const handleResize = () => {
	if (window.innerWidth >= 900) closeMobileMenu()
}

watch(isMobileMenuOpen, async (isOpen) => {
	document.documentElement.style.overflow = isOpen ? 'hidden' : ''
	await nextTick()
	if (isOpen) mobileNav.value?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true })
	else if (document.activeElement !== brandLink.value) {
		if (menuButton.value?.getClientRects().length) menuButton.value.focus({ preventScroll: true })
		else brandLink.value?.focus({ preventScroll: true })
	}
})

onMounted(() => {
	handleScroll()
	window.addEventListener('scroll', handleScroll, { passive: true })
	window.addEventListener('resize', handleResize, { passive: true })
	window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
	document.documentElement.style.overflow = ''
	window.removeEventListener('scroll', handleScroll)
	window.removeEventListener('resize', handleResize)
	window.removeEventListener('keydown', handleKeydown)
})
</script>

<style lang="scss" scoped>
.site-header {
	position: fixed;
	inset: 0 0 auto;
	z-index: z-index(fixed);
	color: color(text-primary);

	&::before {
		position: absolute;
		inset: 0;
		z-index: -1;
		content: '';
		background: rgba(color(background), 0);
		border-bottom: 1px solid transparent;
		backdrop-filter: blur(0);
		transition: background-color 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
	}

	&--scrolled::before,
	&--menu-open::before {
		background: rgba(color(background), 0.9);
		border-color: rgba(color(primary), 0.12);
		backdrop-filter: blur(14px);
	}

	&__inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
		align-items: center;
		min-height: var(--header-height);
	}

	&__nav {
		display: flex;
		align-items: center;
		gap: clamp(1.5rem, 3vw, 3.5rem);
	}

	&__nav--right {
		justify-content: flex-end;
	}

	&__nav-link {
		position: relative;
		max-width: 6rem;
		display: grid;
		align-content: center;
		min-height: 2.75rem;
		padding-block: 0.5rem;
		text-align: center;

		&::after {
			position: absolute;
			inset: auto 0 -0.45rem;
			height: 1px;
			content: '';
			background: color(primary);
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.25s ease;
		}

		&:hover::after,
		&:focus-visible::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	}

	&__brand {
		display: grid;
		place-items: center;
	}

	&__logo-frame {
		position: relative;
		display: block;
		width: clamp(7rem, 10vw, 9rem);
		height: 3.25rem;
	}

	&__logo {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: opacity 0.25s ease, transform 0.25s ease;
	}

	&__logo--compact,
	&--scrolled &__logo--cat,
	&--menu-open &__logo--cat {
		opacity: 0;
		transform: scale(0.94);
	}

	&--scrolled &__logo--compact,
	&--menu-open &__logo--compact {
		opacity: 1;
		transform: scale(1);
	}

	&__menu-button,
	&__mobile-nav {
		display: none;
	}
}

@media (max-width: calc(breakpoint(tablet) - 1px)) {
	.site-header {
		&__inner {
			grid-template-columns: 1fr auto;
		}

		&__nav {
			display: none;
		}

		&__brand {
			justify-self: start;
		}

		&__logo-frame {
			width: clamp(7.5rem, 38vw, 10rem);
			height: 3.25rem;
		}

		&__menu-button {
			display: grid;
			align-content: center;
			gap: 0.32rem;
			width: 2.75rem;
			height: 2.75rem;
			padding: 0.65rem;
			color: color(text-primary);
			background: transparent;
			border: 1px solid rgba(color(primary), 0.15);
			border-radius: border-radius(full);
			cursor: pointer;
			touch-action: manipulation;

			span {
				display: block;
				width: 100%;
				height: 1.5px;
				background: currentColor;
				transition: transform 0.25s ease, opacity 0.2s ease;
			}
		}

		&--menu-open &__menu-button span:nth-child(1) {
			transform: translateY(0.42rem) rotate(45deg);
		}

		&--menu-open &__menu-button span:nth-child(2) {
			opacity: 0;
		}

		&--menu-open &__menu-button span:nth-child(3) {
			transform: translateY(-0.42rem) rotate(-45deg);
		}

		&__mobile-nav {
			position: fixed;
			inset: var(--header-height) 0 0;
			display: block;
			padding-block: clamp(2rem, 8vh, 5rem);
			background: rgba(color(background), 0.97);
			backdrop-filter: blur(16px);
			overflow-y: auto;
			overscroll-behavior: contain;
			padding-bottom: max(2rem, env(safe-area-inset-bottom));
		}

		&__mobile-nav-inner {
			display: grid;
		}

		&__mobile-link {
			display: grid;
			grid-template-columns: 2.5rem 1fr;
			align-items: baseline;
			padding: clamp(1rem, 3vh, 1.5rem) 0;
			font-size: clamp(2rem, 8vw, 3.25rem);
			border-bottom: 1px solid rgba(color(primary), 0.16);
		}

		&__mobile-index {
			font-family: font-family(system);
			font-size: 0.7rem;
			letter-spacing: 0.12em;
			color: color(primary);
		}
	}
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: opacity 0.25s ease, transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-0.75rem);
}
</style>
