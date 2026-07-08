/**
 * Composable: загружает SiteContent.
 *
 * Использует $fetch / useRequestFetch. На SSR (prerender) Nitro делает
 * internal call без HTTP-оверхеда — данные доступны до первого render.
 * На клиенте (CSR) после hydration useAsyncData использует сериализованный
 * payload — без дополнительных HTTP-запросов.
 */
import type { SiteContent } from '~/types/site-content'

export async function useSiteContent() {
	const { data: siteContent } = await useAsyncData<SiteContent>(
		'site-content',
		() => $fetch<SiteContent>('/api/content'),
	)
	return { siteContent }
}