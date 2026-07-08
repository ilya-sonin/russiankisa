import { promises as fs } from 'node:fs'
import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'
import { requireAuth } from '../utils/requireAuth'

/**
 * POST /api/upload
 *
 * Загружает картинку → /public/uploads/[section]/[hash].[ext]
 *
 * Body: multipart/form-data
 *   - file: File
 *   - section: string (опционально, для группировки, например 'portfolio/case-slug')
 *
 * Возвращает: { url: '/uploads/...', filename, size }
 */
export default defineEventHandler(async (event) => {
	requireAuth(event)

	const formData = await readMultipartFormData(event)
	if (!formData) {
		throw createError({ statusCode: 400, message: 'multipart/form-data required' })
	}

	const filePart = formData.find(p => p.name === 'file')
	if (!filePart?.filename || !filePart.data) {
		throw createError({ statusCode: 400, message: 'file field required' })
	}

	const sectionPart = formData.find(p => p.name === 'section')
	const section = (sectionPart?.data?.toString() ?? '').replace(/\.\./g, '').replace(/^\//, '')

	// Безопасное имя файла: timestamp + sanitized original
	const ext = filePart.filename.split('.').pop()?.toLowerCase() ?? 'bin'
	const safeExt = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'avif'].includes(ext) ? ext : 'bin'
	const hash = Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
	const filename = `${hash}.${safeExt}`

	const folder = section ? `uploads/${section}` : 'uploads'
	const fullDir = resolve(process.cwd(), 'public', folder)
	await fs.mkdir(fullDir, { recursive: true })

	const fullPath = resolve(fullDir, filename)
	await writeFile(fullPath, filePart.data)

	const url = `/${folder}/${filename}`.replace(/^\/+/, '/')
	return {
		ok: true,
		url,
		filename,
		size: filePart.data.length,
	}
})