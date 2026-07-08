<script setup lang="ts">
import type { ServicesContent } from '~/types/site-content'

const model = defineModel<ServicesContent>({ required: true })
defineProps<{ file: string }>()
const emit = defineEmits<{ saved: [] }>()

const { save, saving, lastError, lastSuccess } = useAdminSave()

async function onSave() {
	const ok = await save('services', model.value)
	if (ok) emit('saved')
}

function addItem() {
	model.value.items.push({ id: `service-${Date.now()}`, title: '', description: '' })
}
function removeItem(idx: number) {
	model.value.items.splice(idx, 1)
}
function moveItem(idx: number, dir: -1 | 1) {
	const newIdx = idx + dir
	const items = model.value.items
	if (newIdx < 0 || newIdx >= items.length) return
	const temp = items[idx]!
	items[idx] = items[newIdx]!
	items[newIdx] = temp
}
</script>

<template>
	<AdminSection
		title="Services (услуги)"
		:file="file"
		:saving="saving"
		:error="lastError"
		:success="!!lastSuccess"
		@save="onSave"
	>
		<div class="form-grid">
			<div class="form-group">
				<label class="label">Заголовок</label>
				<input v-model="model.title" class="input">
			</div>

			<div class="form-group">
				<label class="label">Акцент</label>
				<input v-model="model.titleAccent" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">Услуги ({{ model.items.length }})</label>
				<div class="items-list">
					<div v-for="(item, idx) in model.items" :key="idx" class="item">
						<div class="item__index">{{ idx + 1 }}</div>
						<input v-model="item.id" placeholder="id (slug)" class="input">
						<input v-model="item.title" placeholder="Название" class="input input--title">
						<textarea v-model="item.description" placeholder="Описание" rows="2" class="textarea"></textarea>
						<label class="checkbox">
							<input v-model="item.titleMultiline" type="checkbox">
							Название многострочно
						</label>
						<div class="item__actions">
							<button type="button" class="btn btn--icon" :disabled="idx === 0" @click="moveItem(idx, -1)">↑</button>
							<button type="button" class="btn btn--icon" :disabled="idx === model.items.length - 1" @click="moveItem(idx, 1)">↓</button>
							<button type="button" class="btn btn--danger" @click="removeItem(idx)">✕</button>
						</div>
					</div>
				</div>
				<button type="button" class="btn btn--add" @click="addItem">+ Добавить услугу</button>
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

.input--title {
	font-weight: 500;
}

.textarea {
	resize: vertical;
}

.items-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
}

.item {
	display: grid;
	grid-template-columns: 28px 140px 200px 1fr auto auto;
	gap: 0.5rem;
	align-items: start;
	padding: 0.5rem;
	background: #f9fafb;
	border-radius: 6px;
}

.item__index {
	width: 28px;
	height: 28px;
	display: grid;
	place-items: center;
	background: #db2e28;
	color: white;
	border-radius: 50%;
	font-size: 0.8125rem;
	font-weight: bold;
}

.item__actions {
	display: flex;
	gap: 0.25rem;
}

.checkbox {
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: 0.75rem;
	white-space: nowrap;
}

.btn--icon {
	background: #e5e7eb;
	color: #374151;
	border: none;
	width: 28px;
	height: 28px;
	border-radius: 4px;
	cursor: pointer;
	font-size: 0.875rem;
}

.btn--icon:disabled {
	opacity: 0.4;
	cursor: not-allowed;
}

.btn--danger {
	background: #fee2e2;
	color: #991b1b;
	border: none;
	padding: 0.375rem 0.625rem;
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