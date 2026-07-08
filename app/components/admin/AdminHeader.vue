<script setup lang="ts">
import type { HeaderContent } from '~/types/site-content'

const model = defineModel<HeaderContent>({ required: true })
defineProps<{ file: string }>()
const emit = defineEmits<{ saved: [] }>()

const { save, saving, lastError, lastSuccess } = useAdminSave()

async function onSave() {
	const ok = await save('header', model.value)
	if (ok) emit('saved')
}
</script>

<template>
	<AdminSection
		title="Header (логотип + навигация)"
		:file="file"
		:saving="saving"
		:error="lastError"
		:success="!!lastSuccess"
		@save="onSave"
	>
		<div class="form-grid">
			<div class="form-group">
				<h3>Логотип «с котом» (прозрачный фон)</h3>
				<AdminAssetInput v-model="model.logo.withCat" label="with-cat.svg" section="header" />
			</div>

			<div class="form-group">
				<h3>Логотип «без кота» (на кремовом фоне)</h3>
				<AdminAssetInput v-model="model.logo.withoutCat" label="without-cat.svg" section="header" />
			</div>

			<div class="form-group form-group--full">
				<h3>Пункты навигации</h3>
				<div class="nav-items">
					<div v-for="(item, idx) in model.navigation" :key="idx" class="nav-item">
						<input v-model="item.label" placeholder="Название (можно с <br />)" class="input">
						<input v-model="item.href" placeholder="#anchor" class="input">
						<label class="checkbox">
							<input v-model="item.multiline" type="checkbox">
							Многострочно
						</label>
						<button type="button" class="btn btn--danger" @click="model.navigation.splice(idx, 1)">✕</button>
					</div>
				</div>
				<button type="button" class="btn btn--add" @click="model.navigation.push({ id: 'new', label: 'Новый', href: '#', multiline: false })">
					+ Добавить пункт меню
				</button>
			</div>
		</div>
	</AdminSection>
</template>

<style scoped>
.form-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;
}

.form-group--full {
	grid-column: 1 / -1;
}

.form-group h3 {
	margin: 0 0 0.5rem 0;
	font-size: 0.875rem;
	color: #6b7280;
	font-weight: 500;
}

.nav-items {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 0.75rem;
}

.nav-item {
	display: grid;
	grid-template-columns: 2fr 1fr auto auto;
	gap: 0.5rem;
	align-items: center;
	padding: 0.5rem;
	background: #f9fafb;
	border-radius: 6px;
}

.input {
	padding: 0.5rem;
	border: 1px solid #d1d5db;
	border-radius: 4px;
	font-size: 0.875rem;
	font-family: inherit;
}

.checkbox {
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: 0.8125rem;
}

.btn--danger {
	background: #fee2e2;
	color: #991b1b;
	border: none;
	padding: 0.375rem 0.625rem;
	border-radius: 4px;
	cursor: pointer;
	font-size: 0.875rem;
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