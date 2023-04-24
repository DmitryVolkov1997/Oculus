import { Container } from 'components'
import { Button } from 'components/ui'
import styles from './Top.module.sass'

interface TopProps { }

export const Top = ({ }: TopProps) => {
	return (
		<div className={styles.top}>
			<Container>
				<div className={styles.topRow}>
					<h1 className={styles.topTitle}>
						Meta Quest 2
					</h1>
					<p className={styles.topSubtitle}>
						Get an Elite Strap free
					</p>
					<p className={styles.topText}>
						For a limited time only, save $59.99 USD. Offer ends 1/19/23
					</p>

					<div className={styles.topButtons}>
						<Button
							className={styles.topBtn}
							appearance='primary'
						>
							BUY NOW
						</Button>

						<Button
							className={styles.topBtn}
							appearance='ghost'
						>
							BUY NOW
						</Button>
					</div>

					<p className={styles.topBuyText}>
						Meta Quest 2 is for ages 13+
					</p>
				</div>
			</Container>
		</div>
	)
}

