import { Container } from 'components'
import { Button } from 'components/ui'
import styles from './Accessories.module.sass'
import { accessories } from './accessory'

interface AccessoriesProps { }

export const Accessories = ({ }: AccessoriesProps) => {
	return (
		<div className={styles.accessories}>
			<Container>
				<h2 className={styles.accessoriesTitle}>
					ACCESSORIES
				</h2>

				<p className={styles.accessoriesSubtitle}>
					Personalize every experience
				</p>

				<div className={styles.accessoriesRow}>
					{
						accessories.map(el => {
							return (
								<div key={el.id} className={styles.accessoriesItem}>
									<img
										className={styles.accessoriesItemImg}
										src={el.img}
										alt="accessory"
									/>

									<p className={styles.accessoriesItemTitle}>
										{el.title}
									</p>

									<p className={styles.accessoriesItemText}>
										{el.text}
									</p>

									<p className={styles.accessoriesItemPrice}>
										{el.price}
									</p>
									<Button
										className={styles.accessoriesItemBtn}
										appearance='ghost'
										size='sm'
									>
										buy now
									</Button>
								</div>
							)
						})
					}
				</div>
			</Container>
		</div>
	)
}

