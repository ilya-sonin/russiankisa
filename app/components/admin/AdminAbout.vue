<script setup lang="ts">
import type { AboutContent } from '~/types/site-content'

const model = defineModel<AboutContent>({ required: true })
defineProps<{ file: string }>()
const emit = defineEmits<{ saved: [] }>()

const { save, saving, lastError, lastSuccess } = useAdminSave()

async function onSave() {
	const ok = await save('about', model.value)
	if (ok) emit('saved')
}

function addTool() {
	model.value.tools.push({ name: '', icon: { src: '', alt: '' } })
}
function removeTool(idx: number) {
	model.value.tools.splice(idx, 1)
}
</script>

<template>
	<AdminSection
		title="About (обо мне)"
		:file="file"
		:saving="saving"
		:error="lastError"
		:success="!!lastSuccess"
		@save="onSave"
	>
		<div class="form-grid">
			<div class="form-group form-group--full">
				<label class="label">Приветствие (вступление)</label>
				<textarea v-model="model.intro" rows="3" class="textarea"></textarea>
			</div>

			<div class="form-group form-group--full">
				<label class="label">Акцент в приветствии (красный)</label>
				<input v-model="model.introAccent" class="input">
			</div>

			<div class="form-group">
				<label class="label">Заголовок</label>
				<input v-model="model.title" class="input">
			</div>

			<div class="form-group">
				<label class="label">Акцент заголовка</label>
				<input v-model="model.titleAccent" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">Фото</label>
				<AdminAssetInput v-model="model.photo" section="about" />
			</div>

			<div class="form-group form-group--full">
				<label class="label">Декоративные тексты (по одному на строку)</label>
				<div class="list">
					<div v-for="(_, idx) in model.decorativeTexts" :key="idx" class="list__row">
						<input v-model="model.decorativeTexts[idx]" class="input">
						<button type="button" class="btn btn--danger" @click="model.decorativeTexts.splice(idx, 1)">✕</button>
					</div>
				</div>
				<button type="button" class="btn btn--add" @click="model.decorativeTexts.push('')">+ Добавить</button>
			</div>

			<div class="form-group">
				<label class="label">Заголовок «Инструменты»</label>
				<input v-model="model.toolsTitle" class="input">
			</div>

			<div class="form-group">
				<label class="label">Акцент заголовка</label>
				<input v-model="model.toolsTitleAccent" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">Инструменты</label>
				<div class="tools-list">
					<div v-for="(tool, idx) in model.tools" :key="idx" class="tool">
						<input v-model="tool.name" placeholder="Название" class="input">
						<AdminAssetInput v-model="tool.icon" :section="'about/tools'" />
						<label class="checkbox">
							<input v-model="tool.multiline" type="checkbox">
							Многострочно
						</label>
						<button type="button" class="btn btn--danger" @click="removeTool(idx)">✕</button>
					</div>
				</div>
				<button type="button" class="btn btn--add" @click="addTool">+ Добавить инструмент</button>
			</div>

			<div class="form-group form-group--full">
				<label class="label">Заключительный текст</label>
				<textarea v-model="model.outro" rows="3" class="textarea"></textarea>
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

.textarea {
	resize: vertical;
	font-family: inherit;
}

.list, .tools-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
}

.list__row {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 0.5rem;
}

.tool {
	display: grid;
	grid-template-columns: 200px 1fr auto auto;
	gap: 0.5rem;
	align-items: center;
	padding: 0.5rem;
	background: #f9fafb;
	border-radius: 6px;
}

.checkbox {
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: 0.8125rem;
	white-space: nowrap;
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