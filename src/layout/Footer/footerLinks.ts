export type Link = {
	id: number
	label: string
	to: string
}

export const footerLinks: Link[] = [
	{
		id: 1,
		label: 'shop',
		to: '/',
	},
	{
		id: 2,
		label: 'games',
		to: '/games',
	},
	{
		id: 3,
		label: 'metaverse',
		to: '/metaverse',
	},
	{
		id: 4,
		label: 'contact us',
		to: '/contact',
	},
]
