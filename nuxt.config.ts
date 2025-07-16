// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-14',
	devtools: { enabled: true },

	// Статическая генерация для SEO
	nitro: {
		prerender: {
			routes: ['/']
		}
	},

	// SEO и мета настройки
	ssr: true,
	experimental: {
		payloadExtraction: false
	},

	css: ['@/assets/scss/main.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/_variables.scss" as *;',
				},
			},
		},
	},

	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					charset: 'utf-8'
				},
				{
					name: 'robots',
					content: 'index, follow'
				}
			],
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Oranienbaum:wght@400&display=swap',
				},
				{
					rel: 'preload',
					href: "/fonts/Disruptor's Script.otf",
					as: 'font',
					type: 'font/otf',
					crossorigin: '',
				},
			],
		},
	},

	// Production оптимизации
	build: {
		analyze: false
	},

	// Настройки для деплоя
	runtimeConfig: {
		public: {
			baseURL: process.env.BASE_URL || '/'
		}
	}
})
