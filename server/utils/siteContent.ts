/**
 * Серверная функция: читает ВСЕ контент-файлы из /content/ и возвращает
 * единый SiteContent объект. Используется в prerender (server side) и в
 * админских API endpoints.
 *
 * Запускается ТОЛЬКО на сервере (Nitro). Не импортируй из composables/pages —
 * используй useSiteContent() или $fetch('/api/content').
 */
import { promises as fs } from 'node:fs'
import { join, resolve } from 'node:path'
import matter from 'gray-matter'
import type { SiteContent, PortfolioCase } from '~/types/site-content'
import { siteContent as fallback } from '~/data/site-content'

async function readContentFile<T = any>(path: string): Promise<T | null> {
	try {
		const fullPath = resolve(process.cwd(), 'content', `${path}.md`)
		const raw = await fs.readFile(fullPath, 'utf-8')
		const parsed = matter(raw)
		return parsed.data as T
	}
	catch {
		return null
	}
}

async function readContentDir<T = any>(dir: string): Promise<T[]> {
	try {
		const fullPath = resolve(process.cwd(), 'content', dir)
		const files = await fs.readdir(fullPath)
		const mdFiles = files.filter(f => f.endsWith('.md'))
		const items: T[] = []
		for (const file of mdFiles) {
			const raw = await fs.readFile(join(fullPath, file), 'utf-8')
			const parsed = matter(raw)
			items.push(parsed.data as T)
		}
		return items
	}
	catch {
		return []
	}
}

export async function loadSiteContent(): Promise<SiteContent> {
	const [hero, about, workflow, services, contact, header, portfolioFiles] = await Promise.all([
		readContentFile<any>('hero'),
		readContentFile<any>('about'),
		readContentFile<any>('workflow'),
		readContentFile<any>('services'),
		readContentFile<any>('contact'),
		readContentFile<any>('header'),
		readContentDir<any>('portfolio'),
	])

	const portfolio: PortfolioCase[] = portfolioFiles.map(f => ({
		id: f.id,
		number: f.number ?? 0,
		title: f.title ?? '',
		description: f.description ?? '',
		images: f.images ?? [],
		layout: f.layout,
		status: f.status ?? 'published',
	}))

	portfolio.sort((a, b) => a.number - b.number || a.id.localeCompare(b.id))

	return {
		header: header ?? fallback.header,
		hero: hero ?? fallback.hero,
		about: about ?? fallback.about,
		workflow: workflow ?? fallback.workflow,
		services: services ?? fallback.services,
		contact: contact ?? fallback.contact,
		portfolio: portfolio.length > 0 ? portfolio : fallback.portfolio,
	}
}