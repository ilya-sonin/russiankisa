import { promises as fs } from 'node:fs'
import { resolve, join } from 'node:path'
import { requireAuth } from '../../utils/requireAuth'

/**
 * DELETE /api/content?path=portfolio/case-slug
 * Удаляет markdown файл контента.
 */
export default defineEventHandler(async (event) => {
	requireAuth(event)

	const query = getQuery(event)
	const path = (query.path as string ?? '').replace(/\.\./g, '').replace(/^\//, '')

	if (!path) {
		throw createError({ statusCode: 400, message: 'path required' })
	}

	const fullPath = resolve(process.cwd(), 'content', `${path}.md`)

	try {
		await fs.unlink(fullPath)
		return { ok: true, deleted: path }
	}
	catch (err: any) {
		if (err.code === 'ENOENT') {
			return { ok: false, error: 'file not found' }
		}
		throw err
	}
})