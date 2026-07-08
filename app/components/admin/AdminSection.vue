<script setup lang="ts">
const props = defineProps<{
	title: string
	file: string
	saving?: boolean
	error?: string | null
	success?: boolean
}>()

defineEmits<{
	save: []
}>()
</script>

<template>
	<section class="admin-section">
		<header class="admin-section__header">
			<h1>{{ title }}</h1>
			<div class="admin-section__actions">
				<span v-if="success" class="status status--ok">✓ Сохранено</span>
				<span v-if="error" class="status status--err">⚠ {{ error }}</span>
				<button class="btn btn--primary" :disabled="saving" @click="$emit('save')">
					{{ saving ? 'Сохранение…' : 'Сохранить' }}
				</button>
			</div>
		</header>
		<div class="admin-section__body">
			<slot />
		</div>
		<footer class="admin-section__footer">
			<code>content/{{ file }}.md</code>
		</footer>
	</section>
</template>

<style scoped>
.admin-section {
	background: white;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	overflow: hidden;
}

.admin-section__header {
	padding: 1.25rem 1.5rem;
	border-bottom: 1px solid #e5e7eb;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}

.admin-section__header h1 {
	margin: 0;
	font-size: 1.25rem;
	font-family: 'Oranienbaum', serif;
}

.admin-section__actions {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.status {
	font-size: 0.875rem;
	padding: 0.25rem 0.75rem;
	border-radius: 999px;
}

.status--ok {
	background: #d1fae5;
	color: #065f46;
}

.status--err {
	background: #fee2e2;
	color: #991b1b;
}

.admin-section__body {
	padding: 1.5rem;
}

.admin-section__footer {
	padding: 0.75rem 1.5rem;
	background: #f9fafb;
	border-top: 1px solid #e5e7eb;
	font-size: 0.75rem;
	color: #6b7280;
}

.admin-section__footer code {
	background: white;
	padding: 0.15em 0.5em;
	border-radius: 4px;
	border: 1px solid #e5e7eb;
}

.btn--primary {
	background: #db2e28;
	color: white;
	border: none;
	padding: 0.5rem 1.25rem;
	border-radius: 6px;
	font-family: inherit;
	font-size: 0.875rem;
	cursor: pointer;
}

.btn--primary:hover:not(:disabled) {
	background: #b91c1c;
}

.btn--primary:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>