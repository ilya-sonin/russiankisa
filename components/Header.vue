<template>
	<header class="header" :class="{ 'header--scrolled': isScrolled }">
		<div class="container">
			<div class="header__content">
				<nav class="header__nav header__nav--left">
					<a href="#about" class="nav-link">Обо мне</a>
					<a href="#workflow" class="nav-link header__nav-workflow">
						Этапы<br />работы
					</a>
				</nav>

				<div class="header__logo">
					<a href="#">
						<div class="header__logo-container">
							<img
								src="/images/logo-with-cat.svg"
								alt="RussianKisa Logo"
								class="header__logo-img header__logo-img--default"
								:class="{ 'header__logo-img--hidden': isScrolled }"
							/>
							<img
								src="/images/logo-without-cat.svg"
								alt="RussianKisa Logo"
								class="header__logo-img header__logo-img--scrolled"
								:class="{ 'header__logo-img--visible': isScrolled }"
							/>
						</div>
					</a>
				</div>

				<nav class="header__nav header__nav--right">
					<a href="#services" class="nav-link">Услуги</a>
					<a href="#contacts" class="nav-link">Контакты</a>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
	isScrolled.value = window.scrollY > 50
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: z-index(fixed);
	background-color: color(background);
	padding: 35px 0 spacing(8);
	transition: box-shadow 0.3s ease;

	&--scrolled {
		box-shadow: shadow(lg);
	}

	&__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}

	&__nav {
		display: flex;
		gap: spacing(8);

		&--left {
			justify-self: flex-start;
		}

		&--right {
			justify-self: flex-end;
		}

		&-workflow {
			text-align: center;
			line-height: 0.78 !important; // Как в дизайне
		}
	}

	&__logo {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		&-container {
			position: relative;
			width: 200px;
			height: 78px;
		}

		&-img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: contain;
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			opacity: 1;

			&--default {
				z-index: 2;
			}

			&--scrolled {
				z-index: 1;
				opacity: 0;
				transform: scale(0.95);
			}

			&--hidden {
				opacity: 0;
				transform: scale(1.05);
			}

			&--visible {
				opacity: 1;
				transform: scale(1);
			}
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.header {
		&__nav {
			gap: spacing(4);
		}

		&__logo {
			&-container {
				width: 150px;
				height: 58px;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.header {
		&__content {
			flex-direction: column;
			gap: spacing(4);
		}

		&__logo {
			position: static;
			transform: none;
			order: -1;

			&-container {
				width: 120px;
				height: 47px;
			}
		}

		&__nav {
			gap: spacing(3);

			&-workflow {
				line-height: 1.155 !important;
			}
		}
	}
}
</style>
