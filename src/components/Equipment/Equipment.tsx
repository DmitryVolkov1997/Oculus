import { Container } from 'components'
import EquipmentImg1 from '../../assets/images/equipment/eq1.png'
import EquipmentImg2 from '../../assets/images/equipment/eq2.png'
import EquipmentImg3 from '../../assets/images/equipment/eq3.png'
import EquipmentImg4 from '../../assets/images/equipment/eq4.png'
import styles from './Equipment.module.sass'
import cn from 'classnames'

interface EquipmentProps { }

export const Equipment = ({ }: EquipmentProps) => {
	return (
		<div className={styles.equipment}>
			<Container>

				<h2 className={styles.equipmentTitle}>
					in the box
				</h2>

				<div className={styles.equipmentBox}>
					<div className={cn(styles.equipmentBoxItem,styles.equipmentBoxItemOne )}>
						<img
							className={styles.equipmentBoxImg}
							src={EquipmentImg1}
							alt="equipment"
						/>

						<p className={styles.equipmentBoxText}>
							VR Headset
						</p>
					</div>

					<div className={styles.equipmentBoxItem}>
						<img
							className={styles.equipmentBoxImg}
							src={EquipmentImg2}
							alt="equipment"
						/>

						<p className={styles.equipmentBoxText}>
							Two Touch Controllers & AA Batteries
						</p>
					</div>

					<div className={styles.equipmentBoxItem}>
						<p className={styles.equipmentBoxTitle}>
							What's included
						</p>
					</div>

					<div className={styles.equipmentBoxItem}>
						<img
							className={styles.equipmentBoxImg}
							src={EquipmentImg3}
							alt="equipment"
						/>

						<p className={styles.equipmentBoxText}>
							Charging Cable & Power Adapter
						</p>
					</div>

					<div className={styles.equipmentBoxItem}>
						<img
							className={styles.equipmentBoxImg}
							src={EquipmentImg4}
							alt="equipment"
						/>

						<p className={styles.equipmentBoxText}>
							Glasses Spacer
						</p>
					</div>
				</div>

			</Container>
		</div>
	)
}

