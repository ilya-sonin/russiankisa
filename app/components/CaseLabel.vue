<template>
	<div class="case-label" :class="`case-label--${position}`">
		<span class="case-label__text">Кейс</span>
		<span class="case-label__number">{{ number }}</span>
	</div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		number: number | string
		position?: 'left' | 'right' | 'center'
	}>(),
	{
		position: 'right',
	},
)
</script>

<style lang="scss" scoped>
.case-label {
	display: flex;
	align-items: center;
	gap: spacing(2);
	z-index: 2;

	&--left {
		justify-content: flex-start;
	}

	&--right {
		justify-content: flex-end;
	}

	&--center {
		justify-content: center;
	}

	&__text {
		font-family: font-family(primary);
		font-size: clamp(1rem, 2vw, font-size('xl'));
		line-height: 1.8;
		color: color(text-primary);
	}

	&__number {
		font-family: font-family(decorative);
		font-size: clamp(1.6rem, 3vw, font-size('3xl'));
		line-height: 1;
		color: color(primary);
	}
}
</style>
