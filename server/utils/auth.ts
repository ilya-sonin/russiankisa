import { createHmac, timingSafeEqual } from 'node:crypto'

/**
 * Простая HMAC-based аутентификация для админки.
 *
 * Пароль хранится в env: ADMIN_PASSWORD (задай в .env или runtime config).
 * При логине выдаёт токен (HMAC от timestamp) с TTL 24 часа.
 *
 * В production стоит заменить на полноценный auth (Lucia, nuxt-auth-utils),
 * но для MVP этого достаточно.
 */
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000

function getSecret(): string {
	const config = useRuntimeConfig()
	const env = process.env.ADMIN_PASSWORD
	if (env) return `russiankisa-${env}`
	return (config as any).adminSecret ?? 'russiankisa-dev-secret-change-me'
}

export function login(password: string): { token: string } | null {
	const config = useRuntimeConfig()
	const expected = process.env.ADMIN_PASSWORD ?? (config as any).adminPassword ?? 'admin'

	if (password !== expected) {
		return null
	}

	const expires = Date.now() + TOKEN_TTL_MS
	const payload = `${expires}`
	const sig = createHmac('sha256', getSecret()).update(payload).digest('hex')
	const token = Buffer.from(`${payload}.${sig}`).toString('base64')

	return { token }
}

export function verifyToken(token: string): boolean {
	try {
		const decoded = Buffer.from(token, 'base64').toString('utf-8')
		const [expiresStr, sig] = decoded.split('.')
		if (!expiresStr || !sig) return false

		const expires = Number(expiresStr)
		if (!Number.isFinite(expires) || expires < Date.now()) return false

		const expected = createHmac('sha256', getSecret()).update(expiresStr).digest('hex')
		const sigBuf = Buffer.from(sig, 'hex')
		const expBuf = Buffer.from(expected, 'hex')
		if (sigBuf.length !== expBuf.length) return false

		return timingSafeEqual(sigBuf, expBuf)
	}
	catch {
		return false
	}
}