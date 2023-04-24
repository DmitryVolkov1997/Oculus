import { Accessories, Buy, Contacts, Equipment, Feature, Game, Promo, Top } from 'components'
import { Layout } from 'layout/Layout'

export const HomePage = () => {
	return (
		<Layout>
			<Top />
			<Feature />
			<Game />
			<Buy />
			<Equipment />
			<Promo />
			<Accessories />
			<Contacts />
		</Layout>
	)
}

