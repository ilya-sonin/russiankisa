export type PortfolioCaseVariant =
	| 'devices'
	| 'retro'
	| 'cards-front'
	| 'cards-back'
	| 'business-cards'

export interface PortfolioImage {
	src: string
	alt: string
	variant?: string
	width?: number
	height?: number
	wrapperClass?: string
	imageClass?: string
}

export interface PortfolioCase {
	id: string
	number: number
	description: string
	images: PortfolioImage[]
	variant: PortfolioCaseVariant
	legacyClass: string
}

export const portfolioCases: PortfolioCase[] = [
	{
		id: 'case1',
		number: 1,
		description:
			'Свои первые работы я осуществила благодаря интенсиву Yudaev.School, где впервые познакомилась с Figma и её функционалом.',
		variant: 'devices',
		legacyClass: 'portfolio',
		images: [
			{
				src: '/images/case1-mac.png',
				alt: 'Mac Studio - дизайн проект',
				variant: 'mac',
				width: 800,
				height: 623,
				wrapperClass: 'portfolio__device portfolio__device--mac portfolio-device-animation trig-stagger-4',
				imageClass: 'portfolio__device-img',
			},
			{
				src: '/images/case1-iphone.png',
				alt: 'iPhone - мобильная версия',
				variant: 'iphone',
				width: 359,
				height: 464,
				wrapperClass: 'portfolio__device portfolio__device--iphone portfolio-device-animation trig-stagger-5',
				imageClass: 'portfolio__device-img',
			},
		],
	},
	{
		id: 'case2',
		number: 1,
		description:
			'Свои первые работы я осуществила благодаря интенсиву Yudaev.School, где впервые познакомилась с Figma и её функционалом.',
		variant: 'devices',
		legacyClass: 'portfolio-case2',
		images: [
			{
				src: '/images/case2-tablet.png',
				alt: 'Galaxy Tab S8 Ultra - дизайн проект',
				variant: 'tablet',
				wrapperClass: 'portfolio-case2__device portfolio-case2__device--tablet portfolio-device-animation trig-stagger-4',
				imageClass: 'portfolio-case2__device-img',
			},
		],
	},
	{
		id: 'case3',
		number: 1,
		description: 'Моя первая самостоятельная разработка интерфейса сайта, выполненная в рамках интенсива.',
		variant: 'devices',
		legacyClass: 'portfolio-case3',
		images: [
			{
				src: '/images/case3-iphone.png',
				alt: 'iPhone 13 Pro - мобильная версия',
				variant: 'iphone',
				wrapperClass: 'portfolio-case3__device portfolio-case3__device--iphone portfolio-device-animation trig-stagger-4',
				imageClass: 'portfolio-case3__device-img',
			},
			{
				src: '/images/case3-ipad.png',
				alt: 'iPad Mini - планшетная версия',
				variant: 'ipad',
				wrapperClass: 'portfolio-case3__device portfolio-case3__device--ipad portfolio-device-animation trig-stagger-5',
				imageClass: 'portfolio-case3__device-img',
			},
		],
	},
	{
		id: 'case4',
		number: 2,
		description: 'Второй интенсивный курс от Yudaev.School был посвящён работе с анимацией в Figma.',
		variant: 'devices',
		legacyClass: 'portfolio-case4',
		images: [
			{
				src: '/images/case4-tablet.png',
				alt: 'Galaxy Tab S8 Ultra - анимация в Figma',
				variant: 'tablet',
				wrapperClass: 'portfolio-case4__device portfolio-case4__device--tablet portfolio-device-animation trig-stagger-3',
				imageClass: 'portfolio-case4__device-img',
			},
		],
	},
	{
		id: 'case5',
		number: 2,
		description: 'Второй интенсивный курс от Yudaev.School был посвящён работе с анимацией в Figma.',
		variant: 'devices',
		legacyClass: 'portfolio-case5',
		images: [
			{
				src: '/images/case5-ipad-large.png',
				alt: 'iPad Mini - крупный план анимации',
				variant: 'ipad-large',
				wrapperClass: 'portfolio-case5__device portfolio-case5__device--ipad-large portfolio-device-animation trig-stagger-3',
				imageClass: 'portfolio-case5__device-img',
			},
		],
	},
	{
		id: 'case6',
		number: 3,
		description:
			'На сегодняшний день моей гордостью и любимой работой является проект сайта, созданный мной<br /> с нуля: начиная от визуала и заканчивая лого.',
		variant: 'devices',
		legacyClass: 'portfolio-case6',
		images: [
			{
				src: '/images/case6-mac.png',
				alt: 'Mac Studio - проект сайта с нуля',
				variant: 'mac',
				wrapperClass: 'portfolio-case6__device portfolio-case6__device--mac portfolio-device-animation trig-stagger-3',
				imageClass: 'portfolio-case6__device-img',
			},
		],
	},
	{
		id: 'case7',
		number: 3,
		description:
			'О проекте:<br /> дизайн сайта выполнен в стиле 1990–2000-х годов<br /> с использованием пиксельной графики — характерного<br />визуального языка той эпохи. Он отсылает ко времени<br /> первых персональных компьютеров и ранних<br /> веб-сайтов, когда изображения создавались<br /> из ярких, чётких пикселей, а интерфейсы отличались<br /> простой геометрией и насыщенными цветами.<br /> Такой ретро-стиль создаёт атмосферу ностальгии<br /> и подчёркивает уникальность проекта, объединяя<br /> современный подход с духом цифрового прошлого.',
		variant: 'retro',
		legacyClass: 'portfolio-case7',
		images: [
			{ src: '/images/case7-iphone.png', alt: 'iPhone 16 Pro - ретро-проект', variant: 'iphone' },
			{ src: '/images/pixel-image-3.svg', alt: 'Пиксельная графика 1', variant: 'pixel-1' },
			{ src: '/images/pixel-image-2.svg', alt: 'Пиксельная графика 2', variant: 'pixel-2' },
			{ src: '/images/pixel-image-1.svg', alt: 'Пиксельная графика 3', variant: 'pixel-3' },
			{ src: '/images/tool-figma.svg', alt: 'Пиксельная графика 4', variant: 'pixel-4' },
		],
	},
	{
		id: 'case8',
		number: 3,
		description:
			'В проекте уделено особое внимание удобству и интуитивной навигации, чтобы пользователь легко ориентировался и получал удовольствие от взаимодействия с сайтом.',
		variant: 'devices',
		legacyClass: 'portfolio-case8',
		images: [
			{
				src: '/images/case8-tablet-left.png',
				alt: 'Galaxy Tab S8 Ultra - левая часть интерфейса',
				variant: 'tablet-left',
				wrapperClass: 'portfolio-case8__device portfolio-case8__device--tablet-left portfolio-device-animation trig-stagger-3',
				imageClass: 'portfolio-case8__device-img',
			},
			{
				src: '/images/case8-tablet-right.png',
				alt: 'Планшет - правая часть интерфейса',
				variant: 'tablet-right',
				wrapperClass: 'portfolio-case8__device portfolio-case8__device--tablet-right portfolio-device-animation trig-stagger-5',
				imageClass: 'portfolio-case8__device-img',
			},
		],
	},
	{
		id: 'case9',
		number: 3,
		description:
			'Особое внимание уделено визуальному программированию и творческому контенту, что делает сайт не просто визиткой, а живой платформой для демонстрации идей и проектов.',
		variant: 'devices',
		legacyClass: 'portfolio-case9',
		images: [
			{
				src: '/images/case9-ipad-large.png',
				alt: 'iPad Mini - визуальное программирование',
				variant: 'ipad-large',
				wrapperClass: 'portfolio-case9__device portfolio-case9__device--ipad-large portfolio-device-animation trig-stagger-3',
				imageClass: 'portfolio-case9__device-img',
			},
		],
	},
	{
		id: 'case10',
		number: 4,
		description:
			'Купоны желаний ко Дню святого Валентина — серия печатных материалов для романтических сюрпризов второй половинке. В проекте я создала дизайн открыток с тёплыми иллюстрациями<br />и лаконичной типографикой, чтобы подарить любимым маленькое исполнение мечты.',
		variant: 'cards-front',
		legacyClass: 'portfolio-case10',
		images: [
			{ src: '/images/card-1.png', alt: 'Купон желаний 1' },
			{ src: '/images/card-2.png', alt: 'Купон желаний 2' },
			{ src: '/images/card-3.png', alt: 'Купон желаний 3' },
			{ src: '/images/card-4.png', alt: 'Купон желаний 4' },
			{ src: '/images/card-5.png', alt: 'Купон желаний 5' },
			{ src: '/images/card-6.png', alt: 'Купон желаний 6' },
			{ src: '/images/card-7.png', alt: 'Купон желаний 7' },
			{ src: '/images/card-8.png', alt: 'Купон желаний 8' },
		],
	},
	{
		id: 'case11',
		number: 4,
		description:
			'Купоны желаний ко Дню святого Валентина — серия печатных материалов для романтических сюрпризов второй половинке. В проекте я создала дизайн открыток с тёплыми иллюстрациями<br />и лаконичной типографикой, чтобы подарить любимым маленькое исполнение мечты.',
		variant: 'cards-back',
		legacyClass: 'portfolio-case11',
		images: [
			{ src: '/images/card-back-1.png', alt: 'Купон желаний - обратная сторона 1' },
			{ src: '/images/card-back-2.png', alt: 'Купон желаний - обратная сторона 2' },
			{ src: '/images/card-back-3.png', alt: 'Купон желаний - обратная сторона 3' },
			{ src: '/images/card-back-4.png', alt: 'Купон желаний - обратная сторона 4' },
			{ src: '/images/card-back-5.png', alt: 'Купон желаний - обратная сторона 5' },
			{ src: '/images/card-back-6.png', alt: 'Купон желаний - обратная сторона 6' },
			{ src: '/images/card-back-7.png', alt: 'Купон желаний - обратная сторона 7' },
			{ src: '/images/card-back-8.png', alt: 'Купон желаний - обратная сторона 8' },
		],
	},
	{
		id: 'case12',
		number: 5,
		description: 'Мудборд и визитная карточка компании - проект,<br /> выполненный в рамках обучения в центре АЗы.',
		variant: 'business-cards',
		legacyClass: 'portfolio-case12',
		images: [
			{ src: '/images/moodboard-main.png', alt: 'Мудборд компании', variant: 'main' },
			{ src: '/images/business-card-2.png', alt: 'Визитная карточка - вариант 1', variant: 'side-top' },
			{ src: '/images/business-card-1.png', alt: 'Визитная карточка - вариант 2', variant: 'side-bottom' },
		],
	},
]
