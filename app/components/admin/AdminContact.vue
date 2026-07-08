<script setup lang="ts">
import type { ContactContent } from '~/types/site-content'

const model = defineModel<ContactContent>({ required: true })
defineProps<{ file: string }>()
const emit = defineEmits<{ saved: [] }>()

const { save, saving, lastError, lastSuccess } = useAdminSave()

async function onSave() {
	const ok = await save('contact', model.value)
	if (ok) emit('saved')
}

function addSocial() {
	model.value.socials.push({
		id: `social-${Date.now()}`,
		label: '',
		url: '',
		qrCode: { src: '', alt: '' },
	})
}
function removeSocial(idx: number) {
	model.value.socials.splice(idx, 1)
}
</script>

<template>
	<AdminSection
		title="Contact (контакты)"
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
				<label class="label">Призыв к действию</label>
				<textarea v-model="model.callToAction" rows="2" class="textarea"></textarea>
			</div>

			<div class="form-group form-group--full">
				<label class="label">Цитата</label>
				<textarea v-model="model.quote" rows="3" class="textarea"></textarea>
			</div>

			<div class="form-group form-group--full">
				<label class="label">Автор цитаты</label>
				<input v-model="model.quoteAuthor" class="input">
			</div>

			<div class="form-group form-group--full">
				<label class="label">Социальные сети ({{ model.socials.length }})</label>
				<div class="socials-list">
					<div v-for="(social, idx) in model.socials" :key="idx" class="social">
						<input v-model="social.id" placeholder="id (vk, telegram, instagram)" class="input">
						<input v-model="social.label" placeholder="Название (ВКонтакте)" class="input">
						<input v-model="social.url" placeholder="URL" class="input input--url">
						<AdminAssetInput v-model="social.qrCode" :section="'contact/qr'" />
						<button type="button" class="btn btn--danger" @click="removeSocial(idx)">✕</button>
					</div>
				</div>
				<button type="button" class="btn btn--add" @click="addSocial">+ Добавить соц.сеть</button>
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

.input--url {
	font-family: monospace;
	font-size: 0.8125rem;
}

.textarea {
	resize: vertical;
	font-family: inherit;
}

.socials-list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 0.5rem;
}

.social {
	display: grid;
	grid-template-columns: 140px 140px 1fr auto;
	gap: 0.5rem;
	align-items: start;
	padding: 0.75rem;
	background: #f9fafb;
	border-radius: 6px;
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