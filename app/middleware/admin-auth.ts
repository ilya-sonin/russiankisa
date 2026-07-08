/**
 * Middleware для admin pages.
 * Проверяет наличие admin-token cookie, иначе редирект на /admin/login.
 */
export default defineNuxtRouteMiddleware((to) => {
	if (import.meta.server) return // SSR не имеет доступа к document.cookie

	const cookies = document.cookie.split(';').map(c => c.trim())
	const tokenCookie = cookies.find(c => c.startsWith('admin-token='))
	const token = tokenCookie?.split('=')[1]

	if (!token) {
		return navigateTo(`/admin/login?redirect=${encodeURIComponent(to.fullPath)}`)
	}
	// Note: реальная проверка токена происходит на сервере (при первом API запросе).
	// Если токен поддельный — следующий вызов /api/content вернёт 401, и мы редиректим.
})