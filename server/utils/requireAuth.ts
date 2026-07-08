/**
 * Проверяет авторизацию для защищённых admin endpoint'ов.
 * Используется как guard в server handlers.
 */
import { verifyToken } from './auth'
import { getCookie } from 'h3'

export function requireAuth(event: any): void {
	const token = getCookie(event, 'admin-token')
	if (!token || !verifyToken(token)) {
		throw createError({ statusCode: 401, message: 'unauthorized' })
	}
}