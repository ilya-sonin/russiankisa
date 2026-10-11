import { readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import matter from 'gray-matter'
import type { AssetRef, PortfolioCase, PortfolioLayout, SiteContent } from '../app/types/site-content'
import { siteContent as fallback } from '../app/data/site-content'

const contentDirectory = resolve(process.cwd(), 'content')

const portfolioOrder = [
	'yudaev-school-desktop-mobile',
	'yudaev-school-tablet',
	'first-interface-mobile-tablet',
	'figma-animation-tablet',
	'figma-animation-ipad',
	'site-from-scratch',
	'retro-pixel-project',
	'navigation-tablets',
	'visual-programming-platform',
	'valentine-coupons-front',
	'valentine-coupons-back',
	'moodboard-business-cards',
] as const

const portfolioOrderMap = new Map<string, number>(portfolioOrder.map((id, index) => [id, index]))

function readContentFile<T>(path: string): T | null {
	try {
		const raw = readFileSync(resolve(contentDirectory, `${path}.md`), 'utf-8')
		return matter(raw).data as T
	}
	catch (error) {
		if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null
		throw error
	}
}

function readPortfolioFiles<T>(): T[] {
	let files: string[]
	try {
		files = readdirSync(resolve(contentDirectory, 'portfolio')).filter(file => file.endsWith('.md'))
	}
	catch (error) {
		if ((error as NodeJS.ErrnoException).code === 'ENOENT') return []
		throw error
	}

	return files.map((file) => {
		const raw = readFileSync(join(contentDirectory, 'portfolio', file), 'utf-8')
		return matter(raw).data as T
	})
}

function getPortfolioImages(layout: PortfolioLayout): AssetRef[] {
	switch (layout.type) {
		case 'single':
			return [layout.image]
		case 'two-devices':
			return [layout.primary, layout.secondary]
		case 'business-cards':
			return [layout.main, ...layout.variants]
		case 'cards-grid':
			return (layout as typeof layout & { images?: AssetRef[] }).images ?? []
	}
}

type MarkdownPortfolioCase = Partial<PortfolioCase> & {
	id?: string
	layout?: PortfolioLayout
}

export function loadSiteContent(): SiteContent {
	const header = readContentFile<SiteContent['header']>('header')
	const hero = readContentFile<SiteContent['hero']>('hero')
	const about = readContentFile<SiteContent['about']>('about')
	const workflow = readContentFile<SiteContent['workflow']>('workflow')
	const services = readContentFile<SiteContent['services']>('services')
	const contact = readContentFile<SiteContent['contact']>('contact')

	const portfolio: PortfolioCase[] = readPortfolioFiles<MarkdownPortfolioCase>()
		.filter(item => item.status !== 'draft' && Boolean(item.id) && !item.id!.startsWith('test-') && Boolean(item.layout))
		.map((item) => {
			const layout = item.layout!
			return {
				id: item.id!,
				number: item.number ?? 0,
				title: item.title ?? '',
				description: item.description ?? '',
				images: item.images?.length ? item.images : getPortfolioImages(layout),
				layout,
				status: item.status ?? 'published',
			}
		})

	portfolio.sort((a, b) => {
		const orderA = portfolioOrderMap.get(a.id) ?? Number.MAX_SAFE_INTEGER
		const orderB = portfolioOrderMap.get(b.id) ?? Number.MAX_SAFE_INTEGER
		return orderA - orderB || a.number - b.number || a.id.localeCompare(b.id)
	})

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
