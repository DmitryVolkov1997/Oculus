import { Button } from 'components/ui'
import BuyImg from '../../assets/images/oculus.png'
import styles from './Buy.module.sass'

interface BuyProps { }

export const Buy = ({ }: BuyProps) => {
	return (
		<div className={styles.buy}>
			<div className={styles.buyRow}>
				<p className={styles.buyBg}>
					oculus
				</p>

				<img className={styles.buyImg} src={BuyImg} alt="buy" />

				<div className={styles.buyBtns}>
					<Button
						className={styles.buyBtn}
						appearance='primary'
					>
						BUY NOW
					</Button>
					<Button
						className={styles.buyBtn}
						appearance='ghost'
					>
						399,99 USD
					</Button>
				</div>

				<p className={styles.buyText}>
					Meta Quest 2 is for ages 13+
				</p>
			</div>
		</div>
	)
}

