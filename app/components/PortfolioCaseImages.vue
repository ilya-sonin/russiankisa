<template>
	<div :class="['portfolio-case-images', item.legacyClass]">
		<div :class="contentClass">
			<div v-if="item.id === 'case1'" class="portfolio__case portfolio__case--first">
				<div
					v-for="image in item.images"
					:key="image.src"
					:class="image.wrapperClass"
					data-trig
				>
					<img :src="image.src" :alt="image.alt" :class="image.imageClass" />
				</div>
			</div>

			<div v-else-if="['case2', 'case3', 'case4', 'case5', 'case6', 'case9'].includes(item.id)" :class="caseWrapperClass">
				<div
					v-for="image in item.images"
					:key="image.src"
					:class="image.wrapperClass"
					data-trig
				>
					<img :src="image.src" :alt="image.alt" :class="image.imageClass" />
				</div>
			</div>

			<template v-else-if="item.id === 'case7'">
				<div class="portfolio-case7__device portfolio-case7__device--iphone portfolio-device-animation trig-stagger-3" data-trig>
					<img :src="item.images[0]?.src" :alt="item.images[0]?.alt" class="portfolio-case7__device-img" />
				</div>
				<div class="portfolio-case7__timeline trig-fade-in trig-stagger-4" data-trig>
					<div class="portfolio-case7__timeline-line"></div>
					<div class="portfolio-case7__timeline-year portfolio-case7__timeline-year--start trig-slide-left trig-stagger-5" data-trig>
						1990-е
					</div>
					<div class="portfolio-case7__timeline-year portfolio-case7__timeline-year--end trig-slide-right trig-stagger-6" data-trig>
						2020-е
					</div>
					<div class="portfolio-case7__pixel-images">
						<img
							v-for="(image, index) in item.images.slice(1)"
							:key="image.src"
							:src="image.src"
							:alt="image.alt"
							:class="[
								'portfolio-case7__pixel-img',
								`portfolio-case7__pixel-img--${index + 1}`,
								'trig-scale-up',
								index < 2 ? `trig-stagger-${index + 6}` : 'trig-stagger-8',
							]"
							data-trig
						/>
					</div>
				</div>
			</template>

			<template v-else-if="item.id === 'case8'">
				<div :class="item.images[0]?.wrapperClass" data-trig>
					<img :src="item.images[0]?.src" :alt="item.images[0]?.alt" :class="item.images[0]?.imageClass" />
				</div>
				<div class="portfolio-case8__tablet-group trig-fade-in trig-stagger-4" data-trig>
					<div :class="item.images[1]?.wrapperClass" data-trig>
						<img :src="item.images[1]?.src" :alt="item.images[1]?.alt" :class="item.images[1]?.imageClass" />
					</div>
				</div>
			</template>

			<div v-else-if="item.id === 'case10'" class="portfolio-case10__cards-grid trig-fade-in trig-stagger-3" data-trig>
				<div
					v-for="(card, index) in item.images"
					:key="card.src"
					class="portfolio-case10__card trig-scale-up"
					:class="`trig-stagger-${Math.min(index + 4, 8)}`"
					data-trig
				>
					<img :src="card.src" :alt="card.alt" class="portfolio-case10__card-image" />
				</div>
			</div>

			<div v-else-if="item.id === 'case11'" class="portfolio-case11__cards-grid trig-fade-in trig-stagger-3" data-trig>
				<div
					v-for="(card, index) in item.images"
					:key="card.src"
					class="portfolio-case11__card trig-scale-up"
					:class="`trig-stagger-${Math.min(index + 4, 8)}`"
					data-trig
				>
					<img :src="card.src" :alt="card.alt" class="portfolio-case11__card-image" />
				</div>
			</div>

			<div v-else-if="item.id === 'case12'" class="portfolio-case12__images-layout trig-fade-in trig-stagger-3" data-trig>
				<div class="portfolio-case12__main-image portfolio-device-animation trig-stagger-4" data-trig>
					<img :src="item.images[0]?.src" :alt="item.images[0]?.alt" class="portfolio-case12__image" />
				</div>
				<div class="portfolio-case12__side-images">
					<div class="portfolio-case12__side-image portfolio-case12__side-image--top portfolio-device-animation trig-stagger-5" data-trig>
						<img :src="item.images[1]?.src" :alt="item.images[1]?.alt" class="portfolio-case12__image" />
					</div>
					<div class="portfolio-case12__side-image portfolio-case12__side-image--bottom portfolio-device-animation trig-stagger-6" data-trig>
						<img :src="item.images[2]?.src" :alt="item.images[2]?.alt" class="portfolio-case12__image" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PortfolioCase } from '~/data/portfolio'

const props = defineProps<{
	item: PortfolioCase
}>()

const contentClass = computed(() => `${props.item.legacyClass}__content`)

const caseWrapperClass = computed(() => {
	const modifiers: Record<string, string> = {
		case2: 'second',
		case3: 'third',
		case4: 'fourth',
		case5: 'fifth',
		case6: 'sixth',
		case9: 'ninth',
	}
	const modifier = modifiers[props.item.id]
	return [`${props.item.legacyClass}__case`, modifier ? `${props.item.legacyClass}__case--${modifier}` : '']
})
</script>

<style lang="scss" scoped>
.portfolio-case-images {
	position: absolute;
	inset: 0;
	background: transparent;
	pointer-events: auto;
}


// Перенесено из Portfolio.vue: legacy-координаты изображений без изменения токенов.
.portfolio {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 118px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 118px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__description {
		position: absolute;
		top: 68px;
		left: 194px;
		width: 1070px;
		height: 85px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 27px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 27px;
		right: 10px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__case {
		position: relative;
		width: 100%;
		height: 100%;

		&--first {
			// Стили для первого кейса
		}
	}

	&__device {
		position: absolute;

		&--mac {
			top: 166px;
			left: 124px;
			width: 800px;
			height: 623px;
		}

		&--iphone {
			top: 221px;
			left: 878px;
			width: 359px;
			height: 464px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__case {
			position: static;
			display: grid;
			grid-template-columns: 1fr 300px;
			gap: spacing(6);
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;

			&--mac {
				grid-column: 1;
			}

			&--iphone {
				grid-column: 2;
				justify-self: center;
			}

			&-img {
				width: 100%;
				height: auto;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-text {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__case {
			grid-template-columns: 1fr;
			gap: spacing(4);
			text-align: center;
		}

		&__device {
			&--mac,
			&--iphone {
				grid-column: 1;
			}

			&--iphone {
				max-width: 300px;
				margin: 0 auto;
			}
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio {
		&__device {
			&--iphone {
				max-width: 250px;
			}
		}
	}
}


// Перенесено из PortfolioCase2.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case2 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 118px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 118px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__description {
		position: absolute;
		top: 68px;
		left: 194px;
		width: 1070px;
		height: 85px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 27px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 27px;
		right: 10px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__case {
		position: relative;
		width: 100%;
		height: 100%;

		&--second {
			// Стили для второго кейса
		}
	}

	&__device {
		position: absolute;

		&--tablet {
			top: 170px;
			left: 229px;
			width: 905px;
			height: 624px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case2 {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__case {
			position: static;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;
			max-width: 800px;

			&--tablet {
				// Стили для планшета в адаптиве
			}

			&-img {
				width: 100%;
				height: auto;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case2 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-text {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__device {
			max-width: 600px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case2 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}


// Перенесено из PortfolioCase3.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case3 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 118px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 118px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__description {
		position: absolute;
		top: 68px;
		left: 588px;
		width: 676px;
		height: 85px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 27px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 27px;
		right: 10px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__case {
		position: relative;
		width: 100%;
		height: 100%;

		&--third {
			// Стили для третьего кейса
		}
	}

	&__device {
		position: absolute;

		&--iphone {
			top: 224px;
			left: 196px; // 181px + 15px (позиция группы + позиция внутри группы)
			width: 320px;
			height: 585px;
		}

		&--ipad {
			top: 123px;
			left: 517px;
			width: 969px;
			height: 736px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case3 {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__case {
			position: static;
			display: grid;
			grid-template-columns: 1fr 2fr;
			gap: spacing(6);
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;

			&--iphone {
				grid-column: 1;
				max-width: 300px;
				justify-self: center;
			}

			&--ipad {
				grid-column: 2;
				max-width: 100%;
			}

			&-img {
				width: 100%;
				height: auto;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case3 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-text {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__case {
			grid-template-columns: 1fr;
			gap: spacing(4);
			text-align: center;
		}

		&__device {
			&--iphone,
			&--ipad {
				grid-column: 1;
				max-width: 100%;
				margin: 0 auto;
			}

			&--iphone {
				max-width: 280px;
			}

			&--ipad {
				max-width: 500px;
			}
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case3 {
		&__device {
			&--iphone {
				max-width: 220px;
			}

			&--ipad {
				max-width: 100%;
				padding: 0 spacing(2);
			}
		}
	}
}


// Перенесено из PortfolioCase4.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case4 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 118px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 118px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__description {
		position: absolute;
		top: 68px;
		left: 194px;
		width: 1070px;
		height: 42px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 27px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 27px;
		right: 10px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__case {
		position: relative;
		width: 100%;
		height: 100%;

		&--fourth {
			// Стили для четвертого кейса
		}
	}

	&__device {
		position: absolute;

		&--tablet {
			top: 120px;
			left: 76px;
			width: 1361px;
			height: 862px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case4 {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__case {
			position: static;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;
			max-width: 900px;

			&--tablet {
				// Стили для планшета в адаптиве
			}

			&-img {
				width: 100%;
				height: auto;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case4 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-text {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__device {
			max-width: 700px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case4 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}


// Перенесено из PortfolioCase5.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case5 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;
	overflow: hidden; // Скрываем выходящие за границы части iPad

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
		overflow: hidden; // Дополнительная защита от переполнения
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;
		z-index: 2; // Поверх большого iPad

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__description {
		position: absolute;
		top: 68px;
		left: 194px;
		width: 1070px;
		height: 42px;
		z-index: 2;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 27px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
			width: 99%;
		}
	}

	&__case-label {
		position: absolute;
		top: 27px;
		right: 10px;
		display: flex;
		align-items: center;
		gap: spacing(2);
		z-index: 2; // Поверх большого iPad
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__case {
		position: relative;
		width: 100%;
		height: 100%;

		&--fifth {
			// Стили для пятого кейса
		}
	}

	&__device {
		position: absolute;

		&--ipad-large {
			top: -141px; // Адаптированное позиционирование (167*0.847)
			left: -54px; // Адаптированное позиционирование (64*0.847)
			width: 1388px; // Уменьшенные размеры (1639*0.847)
			height: 1202px; // Уменьшенные размеры (1419*0.847)
			z-index: 1; // Под текстом
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
			transform: scale(0.87);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case5 {
		&__content {
			height: auto;
			min-height: 800px;
			overflow: visible; // В адаптиве показываем весь контент
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);
			z-index: auto;

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);
			z-index: auto;

			&-text {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
			z-index: auto;
		}

		&__case {
			position: static;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;
			max-width: 800px;
			z-index: auto;

			&--ipad-large {
				// Стили для большого iPad в адаптиве
			}

			&-img {
				width: 100%;
				height: auto;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case5 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-text {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__device {
			max-width: 600px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case5 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}


// Перенесено из PortfolioCase6.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case6 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__description {
		position: absolute;
		top: 80px;
		left: -100px;
		width: 1346px;
		height: 100px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 32px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 32px;
		right: 12px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__case {
		position: relative;
		width: 100%;
		height: 100%;

		&--sixth {
			// Стили для шестого кейса
		}
	}

	&__device {
		position: absolute;

		&--mac {
			top: 88px;
			left: 123px;
			width: 1267px;
			height: 950px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case6 {
		&__content {
			height: auto;
			min-height: 800px;
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-text {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__case {
			position: static;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: spacing(4);
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			left: auto !important;
			top: auto !important;
			max-width: 900px;

			&--mac {
				// Стили для Mac в адаптиве
			}

			&-img {
				width: 100%;
				height: auto;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case6 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-text {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__device {
			max-width: 700px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case6 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}


// Перенесено из PortfolioCase7.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case7 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px;
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 32px;
		right: 12px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__description {
		position: absolute;
		top: 160px;
		left: 95px;
		width: 893px;
		height: 558px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 32px
			line-height: 1.563;
			color: color(text-primary);
			text-align: center;
			margin: 0;
		}
	}

	&__device {
		position: absolute;

		&--iphone {
			top: 81px;
			right: 0;
			width: 344px;
			height: 721px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}

	&__timeline {
		position: absolute;
		top: 806px;
		left: 140px;
		width: 1096px;
		height: 166px;
	}

	&__timeline-line {
		position: absolute;
		top: 85px;
		left: 49px;
		width: 994px;
		height: 1.7px;
		background-color: color(primary);
	}

	&__timeline-year {
		position: absolute;
		font-family: font-family(decorative);
		font-size: 4rem; // 64px
		line-height: 1;
		color: color(primary);
		text-align: center;
		z-index: 2;

		&--start {
			top: 102px;
			left: 0;
			width: 99px;
		}

		&--end {
			top: 102px;
			right: 0;
			width: 105px;
		}
	}

	&__pixel-images {
		position: relative;
		width: 100%;
		height: 100%;
	}

	&__pixel-img {
		position: absolute;
		object-fit: contain;

		&--1 {
			top: 5px;
			left: 23px;
			width: 58px;
			height: 60px;
		}

		&--2 {
			top: 4px;
			left: 354px;
			width: 61px;
			height: 62px;
		}

		&--3 {
			top: 0px;
			left: 690px;
			width: 67px;
			height: 68px;
		}

		&--4 {
			top: 5px;
			left: 1022px;
			width: 42px;
			height: 60px;
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case7 {
		&__content {
			height: auto;
			min-height: 1000px;
			padding-bottom: spacing(8);
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			right: auto !important;
			top: auto !important;
			max-width: 300px;
			margin: 0 auto spacing(8);
			display: block;

			&-img {
				width: 100%;
				height: auto;
			}
		}

		&__timeline {
			position: static;
			width: 100%;
			height: auto;
			margin-top: spacing(8);
		}

		&__timeline-line {
			position: static;
			width: 100%;
			height: 2px;
			margin: spacing(4) 0;
		}

		&__timeline-year {
			position: static;
			display: inline-block;
			font-size: font-size('3xl');
			margin: spacing(2) spacing(4);

			&--start,
			&--end {
				top: auto;
				left: auto;
				right: auto;
				width: auto;
			}
		}

		&__pixel-images {
			display: flex;
			justify-content: center;
			gap: spacing(4);
			flex-wrap: wrap;
			margin-top: spacing(4);
		}

		&__pixel-img {
			position: static !important;
			width: 60px !important;
			height: 60px !important;
			top: auto !important;
			left: auto !important;
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case7 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__timeline-year {
			font-size: font-size('2xl');
		}

		&__pixel-img {
			width: 50px !important;
			height: 50px !important;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case7 {
		&__pixel-images {
			gap: spacing(2);
		}

		&__pixel-img {
			width: 40px !important;
			height: 40px !important;
		}
	}
}


// Перенесено из PortfolioCase8.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case8 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 32px;
		right: 12px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__description {
		position: absolute;
		top: 80px;
		left: 24px;
		width: 1223px;
		height: 100px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7rem; // 32px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__device {
		position: absolute;

		&--tablet-left {
			top: 150px;
			left: 117px;
			width: 581px;
			height: 511px;
		}

		&--tablet-right {
			width: 586px;
			height: 559px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}

	&__tablet-group {
		position: absolute;
		top: 379px;
		left: 728px;
		width: 736px;
		height: 559px;
	}

	&__vector {
		position: absolute;
		top: 100px; // 479px - 379px = 100px (относительно группы)
		left: 11px;
		width: 617px;
		height: 70px;

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case8 {
		&__content {
			height: auto;
			min-height: 1000px;
			padding-bottom: spacing(8);
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			top: auto !important;
			left: auto !important;
			max-width: 600px;
			margin: 0 auto spacing(6);
			display: block;

			&-img {
				width: 100%;
				height: auto;
			}
		}

		&__tablet-group {
			position: static;
			width: 100%;
			height: auto;
			max-width: 600px;
			margin: 0 auto;
			display: block;
		}

		&__vector {
			position: static;
			width: 100%;
			height: auto;
			max-width: 500px;
			margin: spacing(4) auto 0;

			&-img {
				width: 100%;
				height: auto;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case8 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__device {
			max-width: 500px;
		}

		&__tablet-group {
			max-width: 500px;
		}

		&__vector {
			max-width: 400px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case8 {
		&__device,
		&__tablet-group {
			max-width: 100%;
			padding: 0 spacing(4);
		}

		&__vector {
			max-width: 100%;
			padding: 0 spacing(6);
		}
	}
}


// Перенесено из PortfolioCase9.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case9 {
	min-height: 100vh;
	background-color: color(background);
	padding: spacing(16) 0;
	position: relative;

	&__content {
		position: relative;
		height: 832px; // Высота из дизайна
		width: 100%;
	}

	&__title {
		transform: rotate(180deg);
		position: absolute;
		top: 79px;
		left: 0;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__case-label {
		position: absolute;
		top: 32px;
		right: 12px;
		display: flex;
		align-items: center;
		gap: spacing(2);
	}

	&__case-text {
		font-family: font-family(primary);
		font-size: 1.25rem; // 20px
		line-height: 1.8;
		color: color(text-primary);
		text-align: center;
	}

	&__case-number {
		font-family: font-family(decorative);
		font-size: font-size('3xl'); // 36px
		line-height: 1;
		color: color(primary);
		text-align: center;
	}

	&__description {
		position: absolute;
		top: 80px;
		left: 109px;
		width: 1146px;
		height: 100px;

		&-text {
			font-family: font-family(primary);
			font-size: 1.7em; // 32px
			line-height: 1.563;
			color: color(text-primary);
			text-align: right;
			margin: 0;
		}
	}

	&__device {
		position: absolute;

		&--ipad-large {
			top: 32px;
			left: 160px;
			width: 1318.16px;
			height: 1071.84px;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: border-radius(lg);
		}
	}
}

// Адаптивность
@media (max-width: breakpoint(lg)) {
	.portfolio-case9 {
		&__content {
			height: auto;
			min-height: 1000px;
			padding-bottom: spacing(8);
		}

		&__title {
			position: static;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: spacing(6);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
			}
		}

		&__case-label {
			position: static;
			justify-content: center;
			margin-bottom: spacing(6);
		}

		&__description {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: spacing(8);

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('xl');
				text-align: center;
				line-height: 1.6;
			}
		}

		&__device {
			position: static !important;
			width: 100% !important;
			height: auto !important;
			top: auto !important;
			left: auto !important;
			max-width: 900px;
			margin: 0 auto;
			display: block;

			&-img {
				width: 100%;
				height: auto;
			}
		}
	}
}

@media (max-width: breakpoint(md)) {
	.portfolio-case9 {
		padding: spacing(8) 0;

		&__title {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__description {
			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('lg');
			}
		}

		&__case-text {
			font-size: font-size('base');
		}

		&__case-number {
			font-size: font-size('2xl');
		}

		&__device {
			max-width: 700px;
		}
	}
}

@media (max-width: breakpoint(sm)) {
	.portfolio-case9 {
		&__device {
			max-width: 100%;
			padding: 0 spacing(4);
		}
	}
}


// Перенесено из PortfolioCase10.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case10 {
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
		transform: rotate(180deg);
		position: absolute;
		left: 0;
		top: 79px;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__content {
		margin-left: 124px;
		padding-top: 27px;
		height: calc(100% - 27px);
		position: relative;
	}

	&__case-label {
		position: absolute;
		right: 36px;
		top: 0;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	&__case-text {
		font-family: 'Oranienbaum', serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 1.8;
		color: #000000;
	}

	&__case-number {
		font-family: 'Disruptors Script', cursive;
		font-size: 36px;
		font-weight: 400;
		line-height: 1;
		color: #db2e28;
	}

	&__description {
		position: absolute;
		right: 17px;
		top: 41px;
		width: 1140px;
		height: 127px;
		font-family: 'Oranienbaum', serif;
		font-size: 27px;
		font-weight: 400;
		line-height: 1.5625;
		color: #000000;
		text-align: right;
		margin: 0;
	}

	&__cards-grid {
		position: absolute;
		left: 38px;
		top: 191px;
		width: 1102px;
		height: 535px;
		display: grid;
		grid-template-columns: repeat(4, 252px);
		grid-template-rows: repeat(2, 252px);
		gap: 31px;
	}

	&__card {
		width: 252px;
		height: 252px;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-4px);
		}
	}

	&__card-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
}

// Адаптивность
@media (max-width: 1600px) {
	.portfolio-case10 {
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
			left: 20px;

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__content {
			margin-left: clamp(100px, 10vw, 124px);
			padding: 20px;
		}

		&__cards-grid {
			position: relative;
			left: 0;
			top: 200px;
			width: 100%;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: 20px;
			max-width: 1200px;
		}

		&__card {
			width: 100%;
			height: auto;
			aspect-ratio: 1;
		}

		&__description {
			position: relative;
			right: 0;
			top: 0;
			width: 100%;
			text-align: left;
			font-size: clamp(18px, 2.5vw, 27px);
			margin-bottom: 40px;
		}

		&__case-label {
			position: relative;
			right: 0;
			top: 0;
			margin-bottom: 20px;
			justify-content: flex-start;
		}
	}
}

@media (max-width: 768px) {
	.portfolio-case10 {
		&__title {
			writing-mode: horizontal-tb;
			text-orientation: unset;
			position: relative;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: 30px;
			top: 0;
			left: 0;

			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__content {
			margin-left: 0;
			padding: 20px;
		}

		&__cards-grid {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			top: 50px;
		}
	}
}


// Перенесено из PortfolioCase11.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case11 {
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
		transform: rotate(180deg);
		position: absolute;
		left: 0;
		top: 79px;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__content {
		margin-left: 124px;
		padding-top: 27px;
		height: calc(100% - 27px);
		position: relative;
	}

	&__case-label {
		position: absolute;
		right: 36px;
		top: 0;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	&__case-text {
		font-family: 'Oranienbaum', serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 1.8;
		color: #000000;
	}

	&__case-number {
		font-family: 'Disruptors Script', cursive;
		font-size: 36px;
		font-weight: 400;
		line-height: 1;
		color: #db2e28;
	}

	&__description {
		position: absolute;
		right: 17px;
		top: 41px;
		width: 1140px;
		height: 127px;
		font-family: 'Oranienbaum', serif;
		font-size: 27px;
		font-weight: 400;
		line-height: 1.5625;
		color: #000000;
		text-align: right;
		margin: 0;
	}

	&__cards-grid {
		position: absolute;
		left: 38px;
		top: 191px;
		width: 1102px;
		height: 535px;
		display: grid;
		grid-template-columns: repeat(4, 252px);
		grid-template-rows: repeat(2, 252px);
		gap: 31px;
	}

	&__card {
		width: 252px;
		height: 252px;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-4px);
		}
	}

	&__card-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
}

// Адаптивность
@media (max-width: 1600px) {
	.portfolio-case11 {
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
			left: 20px;

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__content {
			margin-left: clamp(100px, 10vw, 124px);
			padding: 20px;
		}

		&__cards-grid {
			position: relative;
			left: 0;
			top: 200px;
			width: 100%;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: 20px;
			max-width: 1200px;
		}

		&__card {
			width: 100%;
			height: auto;
			aspect-ratio: 1;
		}

		&__description {
			position: relative;
			right: 0;
			top: 0;
			width: 100%;
			text-align: left;
			font-size: clamp(18px, 2.5vw, 27px);
			margin-bottom: 40px;
		}

		&__case-label {
			position: relative;
			right: 0;
			top: 0;
			margin-bottom: 20px;
			justify-content: flex-start;
		}
	}
}

@media (max-width: 768px) {
	.portfolio-case11 {
		&__title {
			writing-mode: horizontal-tb;
			text-orientation: unset;
			position: relative;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: 30px;
			top: 0;
			left: 0;

			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__content {
			margin-left: 0;
			padding: 20px;
		}

		&__cards-grid {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			top: 50px;
		}
	}
}


// Перенесено из PortfolioCase12.vue: legacy-координаты изображений без изменения токенов.
.portfolio-case12 {
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
		transform: rotate(180deg);
		position: absolute;
		left: 0;
		top: 79px;
		width: 124px;
		height: 674px;

		&-decorative {
			font-family: font-family(decorative);
			font-size: 7.4rem; // 140px
			line-height: 1.2;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			color: color(primary);
		}

		&-main {
			font-family: font-family(primary);
			font-size: 7.4rem; // 140px
			line-height: 1.043;
			color: color(text-primary);
			margin: 0;
			writing-mode: vertical-rl;
			text-orientation: mixed;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	&__content {
		margin-left: 124px;
		padding-top: 27px;
		height: calc(100% - 27px);
		position: relative;
	}

	&__case-label {
		position: absolute;
		right: 36px;
		top: 0;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	&__case-text {
		font-family: 'Oranienbaum', serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 1.8;
		color: #000000;
	}

	&__case-number {
		font-family: 'Disruptors Script', cursive;
		font-size: 36px;
		font-weight: 400;
		line-height: 1;
		color: #db2e28;
	}

	&__description {
		position: absolute;
		right: 17px;
		top: 41px;
		width: 1140px;
		height: 85px;
		font-family: 'Oranienbaum', serif;
		font-size: 27px;
		font-weight: 400;
		line-height: 1.5625;
		color: #000000;
		text-align: right;
		margin: 0;
	}

	&__images-layout {
		position: absolute;
		left: 54px;
		top: 41px;
		width: 1049px;
		height: 696px;
		display: flex;
		gap: 158px;
	}

	&__main-image {
		width: 452px;
		height: 696px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-8px);
		}
	}

	&__side-images {
		width: 439px;
		height: 696px;
		display: flex;
		flex-direction: column;
		gap: 35px;
		margin-top: 148px;
	}

	&__side-image {
		width: 439px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-6px);
		}

		&--top {
			height: 245px;
		}

		&--bottom {
			height: 244px;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
}

// Адаптивность
@media (max-width: 1600px) {
	.portfolio-case12 {
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
			left: 20px;

			&-decorative {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				margin-right: spacing(2);
				position: static;
			}

			&-main {
				font-size: font-size('6xl');
				writing-mode: initial;
				text-orientation: initial;
				display: inline;
				position: static;
			}
		}

		&__content {
			margin-left: clamp(100px, 10vw, 124px);
			padding: 20px;
		}

		&__images-layout {
			position: relative;
			left: 0;
			top: 180px;
			width: 100%;
			max-width: 1200px;
			flex-direction: column;
			gap: 30px;
			height: auto;
		}

		&__main-image {
			width: 100%;
			height: auto;
			aspect-ratio: 534 / 822;
			max-width: 500px;
			align-self: center;
		}

		&__side-images {
			width: 100%;
			height: auto;
			flex-direction: row;
			gap: 20px;
			margin-top: 0;
			justify-content: center;
		}

		&__side-image {
			width: calc(50% - 10px);
			height: auto;
			aspect-ratio: 518 / 289;
			max-width: 300px;

			&--top,
			&--bottom {
				height: auto;
			}
		}

		&__description {
			position: relative;
			right: 0;
			top: 0;
			width: 100%;
			text-align: left;
			font-size: clamp(18px, 2.5vw, 27px);
			margin-bottom: 40px;
			height: auto;
		}

		&__case-label {
			position: relative;
			right: 0;
			top: 0;
			margin-bottom: 20px;
			justify-content: flex-start;
		}
	}
}

@media (max-width: 768px) {
	.portfolio-case12 {
		&__title {
			writing-mode: horizontal-tb;
			text-orientation: unset;
			position: relative;
			width: 100%;
			height: auto;
			text-align: center;
			margin-bottom: 30px;
			top: 0;
			left: 0;

			&-decorative {
				font-size: font-size('5xl');
			}

			&-main {
				font-size: font-size('5xl');
			}
		}

		&__content {
			margin-left: 0;
			padding: 20px;
		}

		&__images-layout {
			top: 50px;
		}

		&__side-images {
			flex-direction: column;
			gap: 20px;
		}

		&__side-image {
			width: 100%;
			max-width: none;
		}
	}
}

</style>
