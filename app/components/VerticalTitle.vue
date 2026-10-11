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
	display: inline-grid;
	grid-auto-flow: column;
	gap: spacing(2);
	align-items: end;
	justify-items: center;
	z-index: 2;

	&--rotated {
		transform: rotate(180deg);
	}

	&__decorative,
	&__main {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		margin: 0;
	}

	&__decorative {
		font-family: font-family(decorative);
		font-size: clamp(2.5rem, 4vw, 3.1rem);
		line-height: 1.2;
		color: color(primary);
	}

	&__main {
		font-family: font-family(primary);
		font-size: clamp(2.5rem, 4vw, 3.1rem);
		line-height: 1.05;
		color: color(text-primary);
	}

	&--sm {
		.vertical-title__decorative,
		.vertical-title__main {
			font-size: clamp(2rem, 4vw, 2.5rem);
		}
	}

	&--lg {
		.vertical-title__decorative,
		.vertical-title__main {
			font-size: clamp(3rem, 6vw, 4.25rem);
		}
	}
}

@media (max-width: calc(breakpoint('md') - 1px)) {
	.vertical-title {
		transform: none;
		text-align: center;

		&__decorative,
		&__main {
			display: inline;
			writing-mode: initial;
			text-orientation: initial;
		}
	}
}
</style>
