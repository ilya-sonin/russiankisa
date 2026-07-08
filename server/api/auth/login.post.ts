/**
 * POST /api/auth/login
 *
 * Body: { password: string }
 * Returns: { token: string } | 401
 */
import { login } from '../../utils/auth'

export default defineEventHandler(async (event) => {
	const body = await readBody<{ password?: string }>(event)
	if (!body?.password) {
		throw createError({ statusCode: 400, message: 'password required' })
	}

	const result = login(body.password)
	if (!result) {
		throw createError({ statusCode: 401, message: 'invalid password' })
	}

	return result
})