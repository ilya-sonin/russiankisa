/**
 * Composable для админки: сохранение контента через API.
 */
import type { Ref } from 'vue'

export function useAdminSave() {
	const saving = ref(false)
	const lastError = ref<string | null>(null)
	const lastSuccess = ref<number | null>(null)

	async function save(path: string, data: any): Promise<boolean> {
		saving.value = true
		lastError.value = null
		try {
			await $fetch('/api/content', {
				method: 'PUT',
				body: { path, data },
			})
			lastSuccess.value = Date.now()
			return true
		}
		catch (err: any) {
			lastError.value = err?.statusCode === 401
				? 'Сессия истекла — войдите снова'
				: `Ошибка сохранения: ${err?.message ?? err}`
			return false
		}
		finally {
			saving.value = false
		}
	}

	async function uploadImage(file: File, section?: string): Promise<string | null> {
		const formData = new FormData()
		formData.append('file', file)
		if (section) formData.append('section', section)

		try {
			const res = await $fetch<{ url: string }>('/api/upload', {
				method: 'POST',
				body: formData,
			})
			return res.url
		}
		catch (err: any) {
			lastError.value = `Ошибка загрузки: ${err?.message ?? err}`
			return null
		}
	}

	return { saving, lastError, lastSuccess, save, uploadImage }
}