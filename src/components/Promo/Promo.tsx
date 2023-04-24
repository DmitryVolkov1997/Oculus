import { Container } from 'components'
import styles from './Promo.module.sass'

interface PromoProps { }

export const Promo = ({ }: PromoProps) => {
	return (
		<div className={styles.promo}>
			<Container>
				<div className={styles.promoRow}>
					<button className={styles.promoBtn}>
						GO
					</button>
				</div>
			</Container>
		</div>
	)
}

