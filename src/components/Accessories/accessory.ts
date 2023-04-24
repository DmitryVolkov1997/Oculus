import AccessoryImg1 from '../../assets/images/accessory/accessory-1.png'
import AccessoryImg2 from '../../assets/images/accessory/accessory-2.png'
import AccessoryImg3 from '../../assets/images/accessory/accessory-3.png'
import AccessoryImg4 from '../../assets/images/accessory/accessory-4.png'

type Accessory = {
	id: number
	img: string
	title: string
	text: string
	price: string
}

export const accessories: Accessory[] = [
	{
		id: 1,
		img: AccessoryImg1,
		title: 'Meta Quest 2 Carrying Case',
		text: 'Protect your system–at home or away.',
		price: '$59.99 USD',
	},
	{
		id: 2,
		img: AccessoryImg2,
		title: 'Link Cable',
		text: 'Harness the power of your PC with this premium fiber-optic cable.',
		price: '$79.99 USD',
	},
	{
		id: 3,
		img: AccessoryImg3,
		title: 'Meta Quest 2 Active Pack',
		text: 'A wipeable facial interface, wrist straps, and knuckle straps.',
		price: '$69.99 USD',
	},
	{
		id: 4,
		img: AccessoryImg4,
		title: 'Meta Quest Gift Cards',
		text: 'Redeemable on 350+ games and apps.',
		price: '$15-50 USD',
	},
]
