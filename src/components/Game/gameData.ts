import GameImg1 from '../../assets/images/game/game-img1.jpg'
import GameImg2 from '../../assets/images/game/game-img2.jpg'
import GameImg3 from '../../assets/images/game/game-img3.jpg'

type Game = {
	id: number
	img: string
	title: string
	description: string
	link: string
	to: string
}

export const gameData: Game[] = [
	{
		id: 1,
		img: GameImg1,
		title: 'Blade & Sorcery: Nomad',
		description:
			'Step into a medieval fantasy sandbox that uses phisics to serve up some of the most realistic combat in VR',
		link: 'see more',
		to: '/',
	},
	{
		id: 2,
		title: 'Population: One',
		img: GameImg2,
		description:
			'Climb anything. Fight everywhere. Experience battle royale only possible in VR',
		link: 'see more',
		to: '/',
	},
	{
		id: 3,
		img: GameImg3,
		title: 'Supernatural',
		description:
			'Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.',
		link: 'see more',
		to: '/',
	},
]
