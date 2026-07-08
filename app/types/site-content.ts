export interface AssetRef {
	src: string
	alt: string
	width?: number
	height?: number
	mimeType?: string
}

export interface NavLink {
	id: string
	label: string
	href: string
	multiline?: boolean
}

export interface LogoContent {
	withCat: AssetRef
	withoutCat: AssetRef
}

export interface HeaderContent {
	logo: LogoContent
	navigation: NavLink[]
}

export interface HeroContent {
	title: string
	decorativeTitle: string
	ctaText: string
	ctaTarget: string
	image: AssetRef
}

export interface ToolItem {
	name: string
	icon: AssetRef
	multiline?: boolean
}

export interface AboutContent {
	intro: string
	introAccent: string
	title: string
	titleAccent: string
	photo: AssetRef
	decorativeTexts: string[]
	toolsTitle: string
	toolsTitleAccent: string
	tools: ToolItem[]
	outro: string
}

export interface WorkflowStep {
	id: string
	title: string
	description: string
	multiline?: boolean
}

export interface WorkflowContent {
	title: string
	titleAccent: string
	steps: WorkflowStep[]
	pathImage: AssetRef
	pathImages: {
		desktop: AssetRef
		tablet: AssetRef
		mobile: AssetRef
	}
}

export interface ServiceItem {
	id: string
	title: string
	titleMultiline?: boolean
	description: string
}

export interface ServicesContent {
	title: string
	titleAccent: string
	items: ServiceItem[]
}

export interface SocialLink {
	id: string
	label: string
	url: string
	qrCode: AssetRef
}

export interface ContactContent {
	title: string
	titleAccent: string
	callToAction: string
	quote: string
	quoteAuthor: string
	socials: SocialLink[]
}

export type SingleImageLayout = {
	type: 'single'
	image: AssetRef
	align?: 'center' | 'left' | 'right'
}

export type TwoDevicesLayout = {
	type: 'two-devices'
	primary: AssetRef
	secondary: AssetRef
}

export type BusinessCardsLayout = {
	type: 'business-cards'
	main: AssetRef
	variants: AssetRef[]
}

export type CardsGridLayout = {
	type: 'cards-grid'
	columns: number
	rows: number
}

export type PortfolioLayout =
	| SingleImageLayout
	| TwoDevicesLayout
	| BusinessCardsLayout
	| CardsGridLayout

export interface PortfolioCase {
	id: string
	number: number
	title: string
	description: string
	images: AssetRef[]
	layout: PortfolioLayout
	tags?: string[]
	date?: string
	externalUrl?: string
	featured?: boolean
	status: 'draft' | 'published'
}

export interface SiteContent {
	header: HeaderContent
	hero: HeroContent
	about: AboutContent
	workflow: WorkflowContent
	services: ServicesContent
	contact: ContactContent
	portfolio: PortfolioCase[]
}
