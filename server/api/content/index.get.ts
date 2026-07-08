/**
 * GET /api/content
 * Возвращает весь SiteContent (читает из /content/).
 * Используется админкой для отображения форм.
 */
import { loadSiteContent } from '../../utils/siteContent'

export default defineEventHandler(async () => {
	return await loadSiteContent()
})