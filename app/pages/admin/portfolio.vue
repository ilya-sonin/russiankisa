<script setup lang="ts">
import type { PortfolioCase } from '~/types/site-content'

definePageMeta({ middleware: 'admin-auth' })

const router = useRouter()
const { data, refresh } = await useFetch<{ portfolio: PortfolioCase[] }>('/api/content', {
	transform: (res: any) => res,
})

const cases = computed(() => data.value?.portfolio ?? [])
const editing = ref<PortfolioCase | null>(null)
const isNew = ref(false)
const showForm = ref(false)

function newCase() {
	editing.value = {
		id: '',
		number: (cases.value.length ?? 0) + 1,
		title: '',
		description: '',
		images: [],
		layout: { type: 'single', image: { src: '', alt: '' } },
		status: 'published',
	}
	isNew.value = true
	showForm.value = true
}

function editCase(c: PortfolioCase) {
	editing.value = JSON.parse(JSON.stringify(c))
	isNew.value = false
	showForm.value = true
}

async function deleteCase(c: PortfolioCase) {
	if (!confirm(`Удалить кейс «${c.title}»?`)) return
	try {
		await $fetch(`/api/content?path=portfolio/${c.id}`, { method: 'DELETE' })
		await refresh()
	}
	catch (err: any) {
		alert(`Ошибка: ${err?.message ?? err}`)
	}
}

function changeLayoutType(type: string) {
	if (!editing.value) return
	const layoutMap: Record<string, any> = {
		single: { type: 'single', image: { src: '', alt: '' } },
		'two-devices': { type: 'two-devices', primary: { src: '', alt: '' }, secondary: { src: '', alt: '' } },
		'cards-grid': { type: 'cards-grid', columns: 4, images: [] },
		'business-cards': { type: 'business-cards', main: { src: '', alt: '' }, variants: [] },
	}
	editing.value.layout = layoutMap[type]
}

function onLayoutChange(e: Event) {
	const select = e.target as HTMLSelectElement
	changeLayoutType(select.value)
}

function back() {
	router.push('/admin')
}
</script>

<template>
	<div class="admin-portfolio">
		<header class="header">
			<button class="btn btn--ghost" @click="back">← К админке</button>
			<h1>📁 Портфолио ({{ cases.length }})</h1>
			<button class="btn btn--primary" @click="newCase">+ Новый кейс</button>
		</header>

		<div v-if="!showForm" class="cases-list">
			<div v-for="c in cases" :key="c.id" class="case-card">
				<div class="case-card__header">
					<span class="case-card__number">#{{ c.number }}</span>
					<h2>{{ c.title || c.id }}</h2>
					<span class="case-card__status" :class="`case-card__status--${c.status}`">{{ c.status }}</span>
				</div>
				<p class="case-card__desc">{{ c.description.slice(0, 120) }}{{ c.description.length > 120 ? '…' : '' }}</p>
				<div class="case-card__meta">
					<code>layout: {{ c.layout.type }}</code>
					<span>{{ c.images?.length ?? 0 }} изображений</span>
				</div>
				<div class="case-card__actions">
					<button class="btn btn--primary" @click="editCase(c)">✎ Редактировать</button>
					<button class="btn btn--danger" @click="deleteCase(c)">🗑 Удалить</button>
				</div>
			</div>
		</div>

		<AdminPortfolioForm
			v-else-if="editing"
			v-model="editing"
			:is-new="isNew"
			@cancel="showForm = false; editing = null"
			@saved="async () => { await refresh(); showForm = false; editing = null }"
		/>
	</div>
</template>

<style scoped>
.admin-portfolio {
	padding: 2rem;
	max-width: 1400px;
	margin: 0 auto;
}

.header {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
}

.header h1 {
	margin: 0;
	flex: 1;
	font-family: 'Oranienbaum', serif;
}

.cases-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 1rem;
}

.case-card {
	background: white;
	border-radius: 8px;
	padding: 1.25rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.case-card__header {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.case-card__header h2 {
	margin: 0;
	flex: 1;
	font-size: 1.0625rem;
	font-family: 'Oranienbaum', serif;
}

.case-card__number {
	background: #f3f4f6;
	padding: 0.125rem 0.5rem;
	border-radius: 4px;
	font-size: 0.75rem;
	font-weight: 600;
	color: #6b7280;
}

.case-card__status {
	font-size: 0.6875rem;
	padding: 0.125rem 0.5rem;
	border-radius: 4px;
	text-transform: uppercase;
	font-weight: 600;
}

.case-card__status--published {
	background: #d1fae5;
	color: #065f46;
}

.case-card__status--draft {
	background: #fef3c7;
	color: #92400e;
}

.case-card__desc {
	margin: 0;
	color: #4b5563;
	font-size: 0.875rem;
	line-height: 1.5;
}

.case-card__meta {
	display: flex;
	gap: 1rem;
	font-size: 0.75rem;
	color: #6b7280;
}

.case-card__meta code {
	background: #f3f4f6;
	padding: 0.125rem 0.375rem;
	border-radius: 3px;
}

.case-card__actions {
	display: flex;
	gap: 0.5rem;
	margin-top: auto;
}

.btn--primary {
	background: #db2e28;
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	font-size: 0.875rem;
	cursor: pointer;
	font-family: inherit;
}

.btn--ghost {
	background: transparent;
	border: 1px solid #d1d5db;
	color: #374151;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	font-size: 0.875rem;
	cursor: pointer;
	font-family: inherit;
}

.btn--danger {
	background: #fee2e2;
	color: #991b1b;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	font-size: 0.875rem;
	cursor: pointer;
	font-family: inherit;
}
</style>