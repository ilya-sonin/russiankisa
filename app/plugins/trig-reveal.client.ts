export default defineNuxtPlugin((nuxtApp) => {
	const reveal = (element: Element) => {
		element.classList.add('trig')
	}

	const revealVisibleElements = () => {
		document.querySelectorAll('[data-trig]:not(.trig)').forEach((element) => {
			const rect = element.getBoundingClientRect()
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight
			const viewportWidth = window.innerWidth || document.documentElement.clientWidth

			if (rect.top < viewportHeight * 0.92 && rect.bottom > 0 && rect.left < viewportWidth && rect.right > 0) {
				reveal(element)
			}
		})
	}

	const initReveal = () => {
		document.documentElement.classList.add('reveal-ready')
		const elements = Array.from(document.querySelectorAll('[data-trig]'))

		if (!('IntersectionObserver' in window)) {
			elements.forEach(reveal)
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return
					reveal(entry.target)
					observer.unobserve(entry.target)
				})
			},
			{
				rootMargin: '0px 0px -8% 0px',
				threshold: 0.05,
			},
		)

		elements.forEach((element) => observer.observe(element))
		revealVisibleElements()
	}

	// Reveal classes must only be added after Vue has hydrated the SSR markup.
	// Mutating the DOM earlier creates hydration mismatches and visible flashes.
	nuxtApp.hook('app:mounted', () => {
		window.requestAnimationFrame(initReveal)
		window.addEventListener('load', revealVisibleElements, { once: true })
	})
})
