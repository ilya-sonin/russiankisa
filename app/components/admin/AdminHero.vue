<script setup lang="ts">
import type { HeroContent } from '~/types/site-content'

const model = defineModel<HeroContent>({ required: true })
defineProps<{ file: string }>()
const emit = defineEmits<{ saved: [] }>()

const { save, saving, lastError, lastSuccess } = useAdminSave()

async function onSave() {
	const ok = await save('hero', model.value)
	if (ok) emit('saved')
}
</script>

<template>
	<AdminSection
		title="Hero (главный экран)"
		:file="file"
		:saving="saving"
		:error="lastError"
		:success="!!lastSuccess"
		@save="onSave"
	>
		<div class="form-grid">
			<div class="form-group">
				<label class="label">Декоративный текст (красный, сверху)</label>
				<input v-model="model.decorativeTitle" class="input">
			</div>

			<div class="form-group">
				<label class="label">Заголовок (основной)</label>
				<input v-model="model.title" class="input">
			</div>

			<div class="form-group">
				<label class="label">Текст кнопки CTA</label>
				<input v-model="model.ctaText" class="input">
			</div>

			<div class="form-group">
				<label class="label">Якорь кнопки</label>
				<input v-model="model.ctaTarget" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">Изображение (птичка)</label>
				<AdminAssetInput v-model="model.image" section="hero" />
			</div>
		</div>
	</AdminSection>
</template>

<style scoped>
.form-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
}

.form-group--full {
	grid-column: 1 / -1;
}

.label {
	font-size: 0.8125rem;
	color: #4b5563;
	font-weight: 500;
}

.input {
	padding: 0.5rem 0.75rem;
	border: 1px solid #d1d5db;
	border-radius: 6px;
	font-size: 0.9375rem;
	font-family: inherit;
}
</style>