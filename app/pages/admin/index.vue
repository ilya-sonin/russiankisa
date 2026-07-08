<script setup lang="ts">
import type { SiteContent, PortfolioCase } from '~/types/site-content'

definePageMeta({ middleware: 'admin-auth' })

const { data, refresh } = await useFetch<SiteContent>('/api/content')

const sections = [
	{ id: 'header', label: 'Header (логотип + навигация)', file: 'header' },
	{ id: 'hero', label: 'Hero (главный экран)', file: 'hero' },
	{ id: 'about', label: 'About (обо мне)', file: 'about' },
	{ id: 'workflow', label: 'Workflow (этапы работы)', file: 'workflow' },
	{ id: 'services', label: 'Services (услуги)', file: 'services' },
	{ id: 'contact', label: 'Contact (контакты)', file: 'contact' },
]

const activeSection = ref<string>('hero')

function loadSection(sectionId: string) {
	activeSection.value = sectionId
}

async function logout() {
	document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
	await navigateTo('/admin/login')
}

function viewSite() {
	window.open('/', '_blank')
}
</script>

<template>
	<div class="admin">
		<aside class="admin__sidebar">
			<h2>RussianKisa Admin</h2>
			<nav class="nav">
				<button
					v-for="s in sections"
					:key="s.id"
					:class="['nav__item', { 'nav__item--active': activeSection === s.id }]"
					@click="loadSection(s.id)"
				>
					{{ s.label }}
				</button>
				<NuxtLink to="/admin/portfolio" class="nav__item nav__item--link">
					📁 Портфолио ({{ data?.portfolio.length ?? 0 }})
				</NuxtLink>
			</nav>
			<div class="actions">
				<button class="btn btn--ghost" @click="viewSite">↗ Открыть сайт</button>
				<button class="btn btn--ghost" @click="logout">Выйти</button>
			</div>
		</aside>

		<main class="admin__main">
			<div v-if="!data" class="loading">Загрузка…</div>
			<template v-else>
				<AdminHeader v-if="activeSection === 'header'" v-model="data.header" :file="'header'" @saved="refresh" />
				<AdminHero v-if="activeSection === 'hero'" v-model="data.hero" :file="'hero'" @saved="refresh" />
				<AdminAbout v-if="activeSection === 'about'" v-model="data.about" :file="'about'" @saved="refresh" />
				<AdminWorkflow v-if="activeSection === 'workflow'" v-model="data.workflow" :file="'workflow'" @saved="refresh" />
				<AdminServices v-if="activeSection === 'services'" v-model="data.services" :file="'services'" @saved="refresh" />
				<AdminContact v-if="activeSection === 'contact'" v-model="data.contact" :file="'contact'" @saved="refresh" />
			</template>
		</main>
	</div>
</template>

<style scoped>
.admin {
	display: grid;
	grid-template-columns: 280px 1fr;
	min-height: 100vh;
	background: #fafafa;
}

.admin__sidebar {
	background: #1f2937;
	color: white;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.admin__sidebar h2 {
	margin: 0 0 1rem 0;
	font-size: 1.25rem;
	font-family: 'Oranienbaum', serif;
}

.nav {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	flex: 1;
}

.nav__item {
	background: transparent;
	color: #d1d5db;
	border: none;
	padding: 0.625rem 0.875rem;
	text-align: left;
	border-radius: 6px;
	cursor: pointer;
	font-size: 0.875rem;
	font-family: inherit;
	transition: all 0.15s ease;
	text-decoration: none;
}

.nav__item:hover {
	background: #374151;
	color: white;
}

.nav__item--active {
	background: #db2e28;
	color: white;
}

.nav__item--link {
	display: block;
}

.actions {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-top: 1rem;
	border-top: 1px solid #374151;
}

.btn--ghost {
	background: transparent;
	color: #d1d5db;
	border: 1px solid #4b5563;
}

.btn--ghost:hover {
	background: #374151;
	color: white;
}

.admin__main {
	padding: 2rem;
	overflow-y: auto;
}

.loading {
	padding: 4rem;
	text-align: center;
	color: #6b7280;
}
</style>