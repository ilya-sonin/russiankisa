import type { PortfolioCase, SiteContent } from '../types/site-content'

const portfolio: PortfolioCase[] = [
	{
		id: 'yudaev-school-desktop-mobile',
		number: 1,
		title: 'Yudaev School: desktop и mobile',
		description:
			'Свои первые работы я осуществила благодаря интенсиву Yudaev.School, где впервые познакомилась с Figma и её функционалом.',
		images: [
			{ src: '/images/case1-mac.webp', alt: 'Mac Studio - дизайн проект' },
			{ src: '/images/case1-iphone.webp', alt: 'iPhone - мобильная версия' },
		],
		layout: {
			type: 'two-devices',
			primary: { src: '/images/case1-mac.webp', alt: 'Mac Studio - дизайн проект' },
			secondary: { src: '/images/case1-iphone.webp', alt: 'iPhone - мобильная версия' },
		},
		status: 'published',
	},
	{
		id: 'yudaev-school-tablet',
		number: 1,
		title: 'Yudaev School: tablet',
		description:
			'Свои первые работы я осуществила благодаря интенсиву Yudaev.School, где впервые познакомилась с Figma и её функционалом.',
		images: [{ src: '/images/case2-tablet.webp', alt: 'Galaxy Tab S8 Ultra - дизайн проект' }],
		layout: { type: 'single', image: { src: '/images/case2-tablet.webp', alt: 'Galaxy Tab S8 Ultra - дизайн проект' } },
		status: 'published',
	},
	{
		id: 'first-interface-mobile-tablet',
		number: 1,
		title: 'Первый самостоятельный интерфейс',
		description: 'Моя первая самостоятельная разработка интерфейса сайта, выполненная в рамках интенсива.',
		images: [
			{ src: '/images/case3-iphone.webp', alt: 'iPhone 13 Pro - мобильная версия' },
			{ src: '/images/case3-ipad.webp', alt: 'iPad Mini - планшетная версия' },
		],
		layout: {
			type: 'two-devices',
			primary: { src: '/images/case3-ipad.webp', alt: 'iPad Mini - планшетная версия' },
			secondary: { src: '/images/case3-iphone.webp', alt: 'iPhone 13 Pro - мобильная версия' },
		},
		status: 'published',
	},
	{
		id: 'figma-animation-tablet',
		number: 2,
		title: 'Анимация в Figma: планшет',
		description: 'Второй интенсивный курс от Yudaev.School был посвящён работе с анимацией в Figma.',
		images: [{ src: '/images/case4-tablet.webp', alt: 'Galaxy Tab S8 Ultra - анимация в Figma' }],
		layout: { type: 'single', image: { src: '/images/case4-tablet.webp', alt: 'Galaxy Tab S8 Ultra - анимация в Figma' } },
		status: 'published',
	},
	{
		id: 'figma-animation-ipad',
		number: 2,
		title: 'Анимация в Figma: крупный план',
		description: 'Второй интенсивный курс от Yudaev.School был посвящён работе с анимацией в Figma.',
		images: [{ src: '/images/case5-ipad-large.webp', alt: 'iPad Mini - крупный план анимации' }],
		layout: { type: 'single', image: { src: '/images/case5-ipad-large.webp', alt: 'iPad Mini - крупный план анимации' } },
		status: 'published',
	},
	{
		id: 'site-from-scratch',
		number: 3,
		title: 'Сайт с нуля',
		description:
			'На сегодняшний день моей гордостью и любимой работой является проект сайта, созданный мной<br /> с нуля: начиная от визуала и заканчивая лого.',
		images: [{ src: '/images/case6-mac.webp', alt: 'Mac Studio - проект сайта с нуля' }],
		layout: { type: 'single', image: { src: '/images/case6-mac.webp', alt: 'Mac Studio - проект сайта с нуля' } },
		status: 'published',
	},
	{
		id: 'retro-pixel-project',
		number: 3,
		title: 'Ретро-проект',
		description:
			'О проекте:<br /> дизайн сайта выполнен в стиле 1990–2000-х годов<br /> с использованием пиксельной графики — характерного<br />визуального языка той эпохи. Он отсылает ко времени<br /> первых персональных компьютеров и ранних<br /> веб-сайтов, когда изображения создавались<br /> из ярких, чётких пикселей, а интерфейсы отличались<br /> простой геометрией и насыщенными цветами.<br /> Такой ретро-стиль создаёт атмосферу ностальгии<br /> и подчёркивает уникальность проекта, объединяя<br /> современный подход с духом цифрового прошлого.',
		images: [
			{ src: '/images/case7-iphone.webp', alt: 'iPhone 16 Pro - ретро-проект' },
			{ src: '/images/pixel-image-3.svg', alt: 'Пиксельная графика 1' },
			{ src: '/images/pixel-image-2.svg', alt: 'Пиксельная графика 2' },
			{ src: '/images/pixel-image-1.svg', alt: 'Пиксельная графика 3' },
			{ src: '/images/tool-figma.svg', alt: 'Пиксельная графика 4' },
		],
		layout: { type: 'cards-grid', columns: 5, rows: 1 },
		status: 'published',
	},
	{
		id: 'navigation-tablets',
		number: 3,
		title: 'Навигация и удобство',
		description:
			'В проекте уделено особое внимание удобству и интуитивной навигации, чтобы пользователь легко ориентировался и получал удовольствие от взаимодействия с сайтом.',
		images: [
			{ src: '/images/case8-tablet-left.webp', alt: 'Galaxy Tab S8 Ultra - левая часть интерфейса' },
			{ src: '/images/case8-tablet-right.webp', alt: 'Планшет - правая часть интерфейса' },
		],
		layout: {
			type: 'two-devices',
			primary: { src: '/images/case8-tablet-left.webp', alt: 'Galaxy Tab S8 Ultra - левая часть интерфейса' },
			secondary: { src: '/images/case8-tablet-right.webp', alt: 'Планшет - правая часть интерфейса' },
		},
		status: 'published',
	},
	{
		id: 'visual-programming-platform',
		number: 3,
		title: 'Визуальное программирование',
		description:
			'Особое внимание уделено визуальному программированию и творческому контенту, что делает сайт не просто визиткой, а живой платформой для демонстрации идей и проектов.',
		images: [{ src: '/images/case9-ipad-large.webp', alt: 'iPad Mini - визуальное программирование' }],
		layout: { type: 'single', image: { src: '/images/case9-ipad-large.webp', alt: 'iPad Mini - визуальное программирование' } },
		status: 'published',
	},
	{
		id: 'valentine-coupons-front',
		number: 4,
		title: 'Купоны желаний: лицевая сторона',
		description:
			'Купоны желаний ко Дню святого Валентина — серия печатных материалов для романтических сюрпризов второй половинке. В проекте я создала дизайн открыток с тёплыми иллюстрациями<br />и лаконичной типографикой, чтобы подарить любимым маленькое исполнение мечты.',
		images: Array.from({ length: 8 }, (_, index) => ({
			src: `/images/card-${index + 1}.webp`,
			alt: `Купон желаний ${index + 1}`,
		})),
		layout: { type: 'cards-grid', columns: 4, rows: 2 },
		status: 'published',
	},
	{
		id: 'valentine-coupons-back',
		number: 4,
		title: 'Купоны желаний: оборот',
		description:
			'Купоны желаний ко Дню святого Валентина — серия печатных материалов для романтических сюрпризов второй половинке. В проекте я создала дизайн открыток с тёплыми иллюстрациями<br />и лаконичной типографикой, чтобы подарить любимым маленькое исполнение мечты.',
		images: Array.from({ length: 8 }, (_, index) => ({
			src: `/images/card-back-${index + 1}.webp`,
			alt: `Купон желаний - обратная сторона ${index + 1}`,
		})),
		layout: { type: 'cards-grid', columns: 4, rows: 2 },
		status: 'published',
	},
	{
		id: 'moodboard-business-cards',
		number: 5,
		title: 'Мудборд и визитки',
		description: 'Мудборд и визитная карточка компании - проект,<br /> выполненный в рамках обучения в центре АЗы.',
		images: [
			{ src: '/images/moodboard-main.webp', alt: 'Мудборд компании' },
			{ src: '/images/business-card-2.webp', alt: 'Визитная карточка - вариант 1' },
			{ src: '/images/business-card-1.webp', alt: 'Визитная карточка - вариант 2' },
		],
		layout: {
			type: 'business-cards',
			main: { src: '/images/moodboard-main.webp', alt: 'Мудборд компании' },
			variants: [
				{ src: '/images/business-card-2.webp', alt: 'Визитная карточка - вариант 1' },
				{ src: '/images/business-card-1.webp', alt: 'Визитная карточка - вариант 2' },
			],
		},
		status: 'published',
	},
]

export const siteContent: SiteContent = {
	header: {
		logo: {
			withCat: { src: '/images/logo-with-cat.svg', alt: 'RussianKisa Logo' },
			withoutCat: { src: '/images/logo-without-cat.svg', alt: 'RussianKisa Logo' },
		},
		navigation: [
			{ id: 'about', label: 'Обо мне', href: '#about' },
			{ id: 'workflow', label: 'Этапы<br />работы', href: '#workflow', multiline: true },
			{ id: 'services', label: 'Услуги', href: '#services' },
			{ id: 'contacts', label: 'Контакты', href: '#contacts' },
		],
	},
	hero: {
		title: 'ПОРТФОЛИО',
		decorativeTitle: 'Творческое',
		ctaText: 'СМОТРЕТЬ РАБОТЫ',
		ctaTarget: '#portfolio',
		image: { src: '/images/hero-image.webp', alt: 'Creative Portfolio' },
	},
	about: {
		intro: 'Привет и добро пожаловать в мой творческий уголок! Меня зовут Екатерина, превращаю визуальный код в искусство.',
		introAccent: 'я - графический и веб-дизайнер',
		title: 'КТО',
		titleAccent: 'Я',
		photo: { src: '/images/about-photo.webp', alt: 'Екатерина - графический и веб-дизайнер' },
		decorativeTexts: [
			'работа с визуальными образами для печатных медиа',
			'создание удобных и красивых цифровых интерфейсов',
		],
		toolsTitle: 'РАБОЧИЙ ИНСТРУМЕНТ',
		toolsTitleAccent: 'арий',
		tools: [
			{ name: 'Figma', icon: { src: '/images/tool-figma.svg', alt: 'Figma' } },
			{ name: 'Tilda', icon: { src: '/images/tool-tilda.svg', alt: 'Tilda' } },
			{ name: 'Google<br />Slides', icon: { src: '/images/tool-slides.svg', alt: 'Google Slides' }, multiline: true },
			{ name: 'PicsArt', icon: { src: '/images/tool-picsart.svg', alt: 'PicsArt' } },
			{ name: 'Microsoft<br />Office', icon: { src: '/images/tool-office.svg', alt: 'Microsoft Office' }, multiline: true },
			{ name: 'Recraft Al', icon: { src: '/images/tool-recraft.svg', alt: 'Recraft AI' } },
			{ name: 'Midjourney', icon: { src: '/images/tool-midjourney.svg', alt: 'Midjourney' } },
		],
		outro:
			'Моя работа помогает не только создавать стиль и узнаваемость, но и упорядочивать визуальный хаос, делая сложное простым, а обычное — запоминающимся.',
	},
	workflow: {
		title: 'ЭТАПЫ',
		titleAccent: 'РАБОТЫ',
		pathImage: { src: '/images/workflow-path.svg', alt: 'Путь этапов работы' },
		pathImages: {
			desktop: { src: '/images/workflow-path-desktop.svg', alt: 'Путь этапов работы' },
			tablet: { src: '/images/workflow-path-tablet.svg', alt: 'Путь этапов работы' },
			mobile: { src: '/images/workflow-path-mobile.svg', alt: 'Путь этапов работы' },
		},
		steps: [
			{ id: 'knowledge', title: 'ЗНАКОМСТВО', description: 'установление контакта' },
			{ id: 'briefing', title: 'БРИФИНГ', description: 'выявление потребностей' },
			{ id: 'prepayment', title: 'ПРЕДОПЛАПЛАТА', description: 'финансовое подтверждение сотрудничества' },
			{ id: 'contract', title: 'ПОДПИСАНИЕ ДОГОВОРА', description: 'юридическое оформление согласованных условий' },
			{ id: 'approval', title: 'УТВЕРЖДЕНИЕ МАКЕТА', description: 'внесение правок, согласование' },
			{ id: 'layout', title: 'УТВЕРЖДЕНИЕ<br />СВЁРСТАННОГО МАКЕТА', description: 'финальная проверка, допуск к разработке', multiline: true },
			{ id: 'delivery', title: 'СДАЧА<br />ПРОЕКТА', description: 'передача работы', multiline: true },
			{ id: 'payment', title: 'ОПЛАТА', description: 'расчёт за оказанную услугу' },
		],
	},
	services: {
		title: 'СПЕКТР',
		titleAccent: 'УСЛУГ',
		items: [
			{ id: 'web', title: 'ВЕБ-ДИЗАЙН', description: 'создание лэндингов и многостраничных сайтов, ориентированных на удобство пользователя и визуальную привлекательность' },
			{ id: 'guides', title: 'ЧЕК-ЛИСТЫ<br />И ГАЙДЫ', titleMultiline: true, description: 'создание наглядных чек-листов, памяток, инструкций и мини-гайдов, которые удобно использовать в работе и делиться с аудиторией' },
			{ id: 'banners', title: 'ДИЗАЙН<br />БАННЕРОВ', titleMultiline: true, description: 'разработка рекламных и информационных баннеров для сайтов и социальных сетей под любые задачи и форматы' },
			{ id: 'presentations', title: 'ПРЕЗЕНТАЦИИ', description: 'оформление презентаций для бизнеса, обучения и личных проектов, грамотное структурирование информации, акцент на визуализации' },
			{ id: 'print', title: 'ДИЗАЙН<br />ПОЛИГРАФИИ', titleMultiline: true, description: 'разработка запоминающихся макетов для печатных и цифровых материалов: постеров, афиш, флаеров, визиткок, пригласительных' },
		],
	},
	contact: {
		title: 'СВЯЗЬ СО',
		titleAccent: 'МНОЙ',
		callToAction: 'Каждый проект — это возможность рассказать новую историю. Хотите рассказать свою? Напишите мне!',
		quote: '«Дизайн — это не просто внешний вид и ощущения. Дизайн — это то, как это работает. И настоящая простота приходит не тогда, когда больше нечего добавить, а когда нечего убрать».',
		quoteAuthor: 'Стив Джобс',
		socials: [
			{ id: 'vk', label: 'ВКонтакте', url: 'https://vk.com/russiankisa', qrCode: { src: '/images/qr-vk.webp', alt: 'QR-код ВКонтакте' } },
			{ id: 'telegram', label: 'Telegram', url: 'https://t.me/kt_mch', qrCode: { src: '/images/qr-telegram.webp', alt: 'QR-код Telegram' } },
			{ id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/kt.mch/', qrCode: { src: '/images/qr-instagram.webp', alt: 'QR-код Instagram' } },
		],
	},
	portfolio,
}
