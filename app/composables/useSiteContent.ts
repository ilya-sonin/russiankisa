/** Reads the content embedded in the app at build time. */
import type { SiteContent } from '~/types/site-content'

export function useSiteContent() {
	const { siteContent } = useAppConfig()
	return { siteContent: siteContent as SiteContent }
}
