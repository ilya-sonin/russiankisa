import { promises as fs } from 'node:fs'
import { resolve } from 'node:path'
import { requireAuth } from '../utils/requireAuth'

/**
 * DELETE /api/upload?url=/uploads/...
 *
 * Удаляет файл из /public/uploads/.
 */
export default defineEventHandler(async (event) => {
	requireAuth(event)

	const query = getQuery(event)
	const url = (query.url as string ?? '').trim()

	if (!url.startsWith('/uploads/')) {
		throw createError({ statusCode: 400, message: 'only /uploads/ paths allowed' })
	}

	const safePath = url.replace(/^\/+/, '').replace(/\.\./g, '')
	const fullPath = resolve(process.cwd(), 'public', safePath)

	try {
		await fs.unlink(fullPath)
		return { ok: true, deleted: url }
	}
	catch (err: any) {
		if (err.code === 'ENOENT') {
			return { ok: false, error: 'file not found' }
		}
		throw err
	}
})