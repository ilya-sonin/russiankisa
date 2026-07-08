<script setup lang="ts">
const route = useRoute()
const password = ref('')
const error = ref('')
const loading = ref(false)

async function submit() {
	error.value = ''
	loading.value = true
	try {
		const res = await $fetch<{ token: string }>('/api/auth/login', {
			method: 'POST',
			body: { password: password.value },
		})
		// Кладём токен в cookie на 24 часа
		const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
		document.cookie = `admin-token=${res.token}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`
		await navigateTo((route.query.redirect as string) || '/admin')
	}
	catch (err: any) {
		error.value = err?.statusCode === 401 ? 'Неверный пароль' : 'Ошибка входа'
	}
	finally {
		loading.value = false
	}
}
</script>

<template>
	<div class="admin-login">
		<form class="admin-login__card" @submit.prevent="submit">
			<h1>🔒 Админка RussianKisa</h1>
			<p class="hint">Введите пароль для доступа к редактированию контента.</p>
			<input
				v-model="password"
				type="password"
				placeholder="Пароль"
				required
				autofocus
				class="input"
				:disabled="loading"
			>
			<button type="submit" class="btn" :disabled="loading">
				{{ loading ? 'Вход…' : 'Войти' }}
			</button>
			<p v-if="error" class="error">{{ error }}</p>
			<p class="default-hint">
				По умолчанию: <code>admin</code> (задайте <code>ADMIN_PASSWORD</code> в env для прода)
			</p>
		</form>
	</div>
</template>

<style scoped>
.admin-login {
	min-height: 100vh;
	display: grid;
	place-items: center;
	background: #f5f5f5;
	padding: 1rem;
}

.admin-login__card {
	background: white;
	padding: 2.5rem;
	border-radius: 12px;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

h1 {
	margin: 0;
	font-size: 1.5rem;
	font-family: 'Oranienbaum', serif;
}

.hint, .default-hint {
	margin: 0;
	color: #6b7280;
	font-size: 0.875rem;
	line-height: 1.5;
}

.default-hint code {
	background: #f3f4f6;
	padding: 0.1em 0.4em;
	border-radius: 4px;
	font-size: 0.85em;
}

.input {
	padding: 0.75rem 1rem;
	border: 1px solid #d1d5db;
	border-radius: 8px;
	font-size: 1rem;
	font-family: inherit;
}

.input:focus {
	outline: 2px solid #db2e28;
	outline-offset: 2px;
}

.btn {
	background: #db2e28;
	color: white;
	border: none;
	padding: 0.75rem 1.5rem;
	border-radius: 8px;
	font-size: 1rem;
	cursor: pointer;
	font-family: inherit;
	transition: transform 0.1s ease;
}

.btn:hover:not(:disabled) {
	transform: translateY(-1px);
}

.btn:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}

.error {
	color: #ef4444;
	margin: 0;
	font-size: 0.875rem;
}
</style>