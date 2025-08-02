/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		screens: {
			sm: '550px',
			md: '768px',
			tablet: '900px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				primary: '#db2e28',
				background: '#fff6f4',
				'text-primary': '#000000',
				secondary: '#18181b',
				accent: '#3b82f6',
				success: '#22c55e',
				warning: '#f59e0b',
				error: '#ef4444',
				gray: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827',
				},
			},
			fontFamily: {
				primary: ['Oranienbaum', 'Times New Roman', 'Times', 'serif'],
				decorative: ['Disruptors Script', 'Brush Script MT', 'cursive'],
				system: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'sans-serif',
				],
			},
			fontSize: {
				xs: '0.75rem', // 12px
				sm: '0.875rem', // 14px
				base: '1rem', // 16px
				lg: '1.125rem', // 18px (навигация)
				xl: '1.25rem', // 20px
				'2xl': '1.5rem', // 24px
				'3xl': '1.875rem', // 30px
				'4xl': '2rem', // 32px (кнопка)
				'5xl': '2.5rem', // 40px
				'6xl': '3.375rem', // 54px
				'6.5xl': '3.8rem', // 61px
				'7xl': '4.25rem', // 68px
				'8xl': '5rem', // 80px
				'9xl': '6.75rem', // 108px
				'hero-tablet': '8.5rem',
				'hero-lg': '10rem',
				'hero-xl': '12rem',
				hero: '14.25rem', // 228px (ПОРТФОЛИО)
				decorative: '15.875rem', // 254px (Творческое)
			},
			spacing: {
				0: '0',
				1: '0.25rem', // 4px
				2: '0.5rem', // 8px
				3: '0.75rem', // 12px
				4: '1rem', // 16px
				5: '1.25rem', // 20px
				6: '1.5rem', // 24px
				7: '1.75rem', // 28px
				8: '2rem', // 32px
				10: '2.5rem', // 40px
				12: '3rem', // 48px
				14: '3.5rem', // 56px
				16: '4rem', // 64px
				20: '5rem', // 80px
				24: '6rem', // 96px
				28: '7rem', // 112px
				32: '8rem', // 128px
				36: '9rem', // 144px
				40: '10rem', // 160px
				44: '11rem', // 176px
				48: '12rem', // 192px
				52: '13rem', // 208px
				56: '14rem', // 224px
				60: '15rem', // 240px
				64: '16rem', // 256px
			},
			borderRadius: {
				button: '0.4375rem', // 7px как в дизайне
			},
			boxShadow: {
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			},
			maxWidth: {
				desktop: '1280px',
			},
			zIndex: {
				dropdown: '1000',
				sticky: '1020',
				fixed: '1030',
				'modal-backdrop': '1040',
				modal: '1050',
				popover: '1060',
				tooltip: '1070',
			},
		},
	},
	plugins: [],
}
