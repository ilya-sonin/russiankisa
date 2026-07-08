<script setup lang="ts">
import type { PortfolioCase } from '~/types/site-content'

const model = defineModel<PortfolioCase>({ required: true })

defineProps<{ isNew: boolean }>()

const emit = defineEmits<{
	cancel: []
	saved: []
}>()

const { save, saving, lastError, lastSuccess } = useAdminSave()

async function onSave() {
	if (!model.value.id) {
		alert('ID кейса обязателен (slug)')
		return
	}
	const path = `portfolio/${model.value.id}`
	const ok = await save(path, model.value)
	if (ok) emit('saved')
}

const layoutTypes = [
	{ value: 'single', label: 'Одна картинка' },
	{ value: 'two-devices', label: 'Два устройства' },
	{ value: 'cards-grid', label: 'Сетка карточек' },
	{ value: 'business-cards', label: 'Мудборд + визитки' },
]

function getLayoutValue(): string {
	return (model.value.layout as any)?.type ?? 'single'
}

function setLayoutType(type: string) {
	const layoutMap: Record<string, any> = {
		single: { type: 'single', image: { src: '', alt: '' } },
		'two-devices': { type: 'two-devices', primary: { src: '', alt: '' }, secondary: { src: '', alt: '' } },
		'cards-grid': { type: 'cards-grid', columns: 4, images: [] },
		'business-cards': { type: 'business-cards', main: { src: '', alt: '' }, variants: [] },
	}
	model.value.layout = layoutMap[type]
}

function onLayoutTypeChange(e: Event) {
	const select = e.target as HTMLSelectElement
	setLayoutType(select.value)
}

function addGridImage() {
	const layout = model.value.layout as any
	if (layout.type === 'cards-grid') {
		layout.images.push({ src: '', alt: '' })
	}
}

function removeGridImage(idx: number) {
	const layout = model.value.layout as any
	if (layout.type === 'cards-grid') {
		layout.images.splice(idx, 1)
	}
}

function addVariant() {
	const layout = model.value.layout as any
	if (layout.type === 'business-cards') {
		layout.variants.push({ src: '', alt: '' })
	}
}

function removeVariant(idx: number) {
	const layout = model.value.layout as any
	if (layout.type === 'business-cards') {
		layout.variants.splice(idx, 1)
	}
}
</script>

<template>
	<AdminSection
		:title="isNew ? 'Новый кейс' : `Редактирование: ${model.title || model.id}`"
		:file="`portfolio/${model.id || 'new'}`"
		:saving="saving"
		:error="lastError"
		:success="!!lastSuccess"
		@save="onSave"
	>
		<div class="form-grid">
			<div class="form-group">
				<label class="label">Slug (id, без пробелов)</label>
				<input v-model="model.id" placeholder="case-slug" :disabled="!isNew" class="input">
			</div>

			<div class="form-group">
				<label class="label">Номер (порядок)</label>
				<input v-model.number="model.number" type="number" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">Название кейса</label>
				<input v-model="model.title" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">Описание (можно с <br />)</label>
				<textarea v-model="model.description" rows="4" class="textarea"></textarea>
			</div>

			<div class="form-group">
				<label class="label">Тип layout</label>
				<select :value="getLayoutValue()" @change="onLayoutTypeChange" class="input">
					<option v-for="t in layoutTypes" :key="t.value" :value="t.value">{{ t.label }}</option>
				</select>
			</div>

			<div class="form-group">
				<label class="label">Статус</label>
				<select v-model="model.status" class="input">
					<option value="published">Опубликован</option>
					<option value="draft">Черновик</option>
				</select>
			</div>

			<!-- Layout-specific fields -->
			<div class="form-group form-group--full">
				<template v-if="(model.layout as any).type === 'single'">
					<h3>Изображение</h3>
					<AdminAssetInput v-model="(model.layout as any).image" :section="`portfolio/${model.id}`" />
				</template>

				<template v-else-if="(model.layout as any).type === 'two-devices'">
					<h3>Главное устройство</h3>
					<AdminAssetInput v-model="(model.layout as any).primary" :section="`portfolio/${model.id}`" />
					<h3 style="margin-top: 1rem">Второе устройство</h3>
					<AdminAssetInput v-model="(model.layout as any).secondary" :section="`portfolio/${model.id}`" />
				</template>

				<template v-else-if="(model.layout as any).type === 'cards-grid'">
					<div class="form-group">
						<label class="label">Колонок</label>
						<input v-model.number="(model.layout as any).columns" type="number" min="1" max="6" class="input">
					</div>
					<h3>Карточки ({{ (model.layout as any).images.length }})</h3>
					<div class="grid-images">
						<div v-for="(_, idx) in (model.layout as any).images" :key="idx" class="grid-image-row">
							<AdminAssetInput v-model="(model.layout as any).images[idx]" :section="`portfolio/${model.id}`" />
							<button type="button" class="btn btn--danger" @click="removeGridImage(idx)">✕</button>
						</div>
					</div>
					<button type="button" class="btn btn--add" @click="addGridImage">+ Добавить карточку</button>
				</template>

				<template v-else-if="(model.layout as any).type === 'business-cards'">
					<h3>Главное изображение (мудборд)</h3>
					<AdminAssetInput v-model="(model.layout as any).main" :section="`portfolio/${model.id}`" />
					<h3 style="margin-top: 1rem">Варианты ({{ (model.layout as any).variants.length }})</h3>
					<div class="variants">
						<div v-for="(_, idx) in (model.layout as any).variants" :key="idx" class="variant-row">
							<AdminAssetInput v-model="(model.layout as any).variants[idx]" :section="`portfolio/${model.id}`" />
							<button type="button" class="btn btn--danger" @click="removeVariant(idx)">✕</button>
						</div>
					</div>
					<button type="button" class="btn btn--add" @click="addVariant">+ Добавить вариант</button>
				</template>
			</div>
		</div>

		<div class="form-actions">
			<button type="button" class="btn btn--ghost" @click="emit('cancel')">Отмена</button>
			<button type="button" class="btn btn--primary" :disabled="saving" @click="onSave">
				{{ saving ? 'Сохранение…' : (isNew ? 'Создать кейс' : 'Сохранить') }}
			</button>
		</div>
	</AdminSection>
</template>

<style scoped>
.form-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
}

.form-group--full {
	grid-column: 1 / -1;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
}

.label {
	font-size: 0.8125rem;
	color: #4b5563;
	font-weight: 500;
}

.input, .textarea {
	padding: 0.5rem 0.75rem;
	border: 1px solid #d1d5db;
	border-radius: 6px;
	font-size: 0.9375rem;
	font-family: inherit;
}

.textarea {
	resize: vertical;
	font-family: inherit;
}

h3 {
	margin: 0.5rem 0;
	font-size: 0.9375rem;
	font-weight: 600;
	color: #374151;
}

.grid-images, .variants {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin: 0.5rem 0;
}

.grid-image-row, .variant-row {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 0.5rem;
	align-items: start;
}

.form-actions {
	display: flex;
	gap: 0.75rem;
	justify-content: flex-end;
	padding-top: 1.5rem;
	border-top: 1px solid #e5e7eb;
	margin-top: 1.5rem;
}

.btn--primary {
	background: #db2e28;
	color: white;
	border: none;
	padding: 0.625rem 1.25rem;
	border-radius: 6px;
	font-size: 0.9375rem;
	cursor: pointer;
	font-family: inherit;
}

.btn--primary:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.btn--ghost {
	background: transparent;
	border: 1px solid #d1d5db;
	color: #374151;
	padding: 0.625rem 1.25rem;
	border-radius: 6px;
	font-size: 0.9375rem;
	cursor: pointer;
	font-family: inherit;
}

.btn--danger {
	background: #fee2e2;
	color: #991b1b;
	border: none;
	padding: 0.5rem 0.75rem;
	border-radius: 4px;
	cursor: pointer;
}

.btn--add {
	background: #d1fae5;
	color: #065f46;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	cursor: pointer;
	font-size: 0.875rem;
	font-family: inherit;
}
</style>