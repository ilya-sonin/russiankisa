<template>
	<div
		class="vertical-title"
		:class="[
			`vertical-title--${size}`,
			`vertical-title--${position}`,
			{ 'vertical-title--rotated': rotated },
		]"
	>
		<div class="vertical-title__decorative">{{ decorative }}</div>
		<div class="vertical-title__main">{{ main }}</div>
	</div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		decorative: string
		main: string
		rotated?: boolean
		size?: 'sm' | 'md' | 'lg'
		position?: 'left' | 'right'
	}>(),
	{
		rotated: false,
		size: 'md',
		position: 'left',
	},
)
</script>

<style lang="scss" scoped>
.vertical-title {
	position: absolute;
	width: 124px;
	height: 674px;
	z-index: 2;

	&--left {
		left: 0;
		top: 79px;
	}

	&--right {
		right: 0;
		top: 79px;
	}

	&--rotated {
		transform: rotate(180deg);
	}

	&__decorative,
	&__main {
		position: absolute;
		left: 0;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		margin: 0;
	}

	&__decorative {
		top: 0;
		font-family: font-family(decorative);
		font-size: font-size('6xl');
		line-height: 1.2;
		color: color(primary);
	}

	&__main {
		bottom: 0;
		font-family: font-family(primary);
		font-size: font-size('6xl');
		line-height: 1.043;
		color: color(text-primary);
	}

	&--sm {
		.vertical-title__decorative,
		.vertical-title__main {
			font-size: font-size('5xl');
		}
	}

	&--lg {
		.vertical-title__decorative,
		.vertical-title__main {
			font-size: font-size('7xl');
		}
	}
}

@media (max-width: calc(breakpoint('md') - 1px)) {
	.vertical-title {
		position: static;
		width: auto;
		height: auto;
		transform: none;
		text-align: center;

		&__decorative,
		&__main {
			position: static;
			display: inline;
			writing-mode: initial;
			text-orientation: initial;
			font-size: font-size('4xl');
		}
	}
}
</style>
