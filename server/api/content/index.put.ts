import { promises as fs } from 'node:fs'
import { resolve, dirname } from 'node:path'
import matter from 'gray-matter'
import { requireAuth } from '../../utils/requireAuth'

interface SaveBody {
	path: string                   // 'hero' | 'about' | 'workflow' | ... | 'portfolio/case-slug'
	data: Record<string, any>      // frontmatter объект
	body?: string                  // опционально markdown body (после frontmatter)
}

/**
 * PUT /api/content
 * Сохраняет контент одного файла (используется админкой).
 *
 * Body: { path: 'hero', data: {...frontmatter}, body?: '...markdown...' }
 */
export default defineEventHandler(async (event) => {
	requireAuth(event)

	const body = await readBody<SaveBody>(event)

	if (!body?.path || !body?.data) {
		throw createError({ statusCode: 400, message: 'path and data required' })
	}

	const safePath = body.path.replace(/\.\./g, '').replace(/^\//, '')
	const fullPath = resolve(process.cwd(), 'content', `${safePath}.md`)

	await fs.mkdir(dirname(fullPath), { recursive: true })

	const content = matter.stringify(body.body ?? '', body.data)
	await fs.writeFile(fullPath, content, 'utf-8')

	return { ok: true, path: safePath }
})