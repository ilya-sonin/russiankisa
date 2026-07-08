<script setup lang="ts">
import type { WorkflowContent } from '~/types/site-content'

const model = defineModel<WorkflowContent>({ required: true })
defineProps<{ file: string }>()
const emit = defineEmits<{ saved: [] }>()

const { save, saving, lastError, lastSuccess } = useAdminSave()

async function onSave() {
	const ok = await save('workflow', model.value)
	if (ok) emit('saved')
}

function addStep() {
	model.value.steps.push({ id: `step-${Date.now()}`, title: '', description: '' })
}
function removeStep(idx: number) {
	model.value.steps.splice(idx, 1)
}
function moveStep(idx: number, dir: -1 | 1) {
	const newIdx = idx + dir
	const steps = model.value.steps
	if (newIdx < 0 || newIdx >= steps.length) return
	const temp = steps[idx]!
	steps[idx] = steps[newIdx]!
	steps[newIdx] = temp
}
</script>

<template>
	<AdminSection
		title="Workflow (этапы работы)"
		:file="file"
		:saving="saving"
		:error="lastError"
		:success="!!lastSuccess"
		@save="onSave"
	>
		<div class="form-grid">
			<div class="form-group">
				<label class="label">Заголовок (вертикальный)</label>
				<input v-model="model.title" class="input">
			</div>

			<div class="form-group">
				<label class="label">Акцент заголовка</label>
				<input v-model="model.titleAccent" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">SVG-путь (десктоп версия)</label>
				<AdminAssetInput v-model="model.pathImages.desktop" section="workflow" />
			</div>

			<div class="form-group">
				<label class="label">SVG-путь (планшет)</label>
				<AdminAssetInput v-model="model.pathImages.tablet" section="workflow" />
			</div>

			<div class="form-group">
				<label class="label">SVG-путь (мобильный)</label>
				<AdminAssetInput v-model="model.pathImages.mobile" section="workflow" />
			</div>

			<div class="form-group form-group--full">
				<label class="label">Этапы ({{ model.steps.length }})</label>
				<div class="steps-list">
					<div v-for="(step, idx) in model.steps" :key="idx" class="step">
						<div class="step__index">{{ idx + 1 }}</div>
						<input v-model="step.id" placeholder="id (slug)" class="input">
						<input v-model="step.title" placeholder="Заголовок (можно с <br />)" class="input">
						<input v-model="step.description" placeholder="Описание" class="input">
						<label class="checkbox">
							<input v-model="step.multiline" type="checkbox">
							<br />
						</label>
						<div class="step__actions">
							<button type="button" class="btn btn--icon" :disabled="idx === 0" @click="moveStep(idx, -1)">↑</button>
							<button type="button" class="btn btn--icon" :disabled="idx === model.steps.length - 1" @click="moveStep(idx, 1)">↓</button>
							<button type="button" class="btn btn--danger" @click="removeStep(idx)">✕</button>
						</div>
					</div>
				</div>
				<button type="button" class="btn btn--add" @click="addStep">+ Добавить этап</button>
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

.input {
	padding: 0.5rem 0.75rem;
	border: 1px solid #d1d5db;
	border-radius: 6px;
	font-size: 0.9375rem;
	font-family: inherit;
}

.steps-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
}

.step {
	display: grid;
	grid-template-columns: 28px 140px 1fr 1fr auto auto;
	gap: 0.5rem;
	align-items: center;
	padding: 0.5rem;
	background: #f9fafb;
	border-radius: 6px;
}

.step__index {
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

.step__actions {
	display: flex;
	gap: 0.25rem;
}

.checkbox {
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: 0.75rem;
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