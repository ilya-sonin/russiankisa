// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadSiteContent } from './scripts/load-site-content'

const siteContent = loadSiteContent()

export default defineNuxtConfig({
	compatibilityDate: '2025-08-02',
	devtools: { enabled: false },
	appConfig: {
		siteContent: siteContent as any,
	} as any,

	modules: ['@nuxtjs/tailwindcss'],

	tailwindcss: {
		cssPath: '~/assets/scss/main.scss',
	},

	nitro: {
		preset: 'static',
		prerender: {
			routes: ['/'],
		},
	},

	ssr: true,
	experimental: {
		payloadExtraction: false,
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/scss/_variables.scss" as *;',
				},
			},
		},
	},

	app: {
		head: {
			htmlAttrs: {
				lang: 'ru',
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					charset: 'utf-8',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
			],
			link: [
				{
					rel: 'preload',
					href: '/fonts/oranienbaum-cyrillic-400-normal.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: '',
				},
				{
					rel: 'preload',
					href: '/fonts/oranienbaum-latin-400-normal.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: '',
				},
				{
					rel: 'preload',
					href: '/fonts/disruptors-script.otf',
					as: 'font',
					type: 'font/otf',
					crossorigin: '',
				},
			],
		},
	},

	build: {
		analyze: false,
	},

})
