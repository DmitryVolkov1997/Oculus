import cn from 'classnames'
import { Container } from 'components'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ReactComponent as PlayIcon } from '../../assets/images/play.svg'
import styles from './Feature.module.sass'
import { buttons } from './tab-buttons'
import { tabData } from './tabData'

interface FeatureProps { }

export const Feature = ({ }: FeatureProps) => {
	const [activeTab, setActiveTab] = useState<number>(1)

	return (
		<div className={styles.feature}>
			<Container>
				<div className={styles.featureTitles}>
					<h2 className={cn(styles.featureTitle, styles.sectionTitle)}>
						PRODUCT FEATURES
					</h2>
					<p className={styles.featureText}>
						Easy to set up and safe to use
					</p>
				</div>

				<div className={styles.tabs}>
					<div className={styles.tabsBtn}>
						{
							buttons.map(btn => (
								<button
									className={cn(styles.tabsBtnItem, {
										[styles.tabsBtnItemActive]: btn.id === activeTab
									})}
									key={btn.id}
									onClick={() => setActiveTab(btn.id)}
								>
									{btn.label}
								</button>
							))
						}
					</div>

					<div className={styles.tabsContent}>
						{
							tabData.map(tab => {
								return tab.id === activeTab ? (
									<AnimatePresence key={tab.id}>
										<motion.div
											className={styles.tabsContentItem}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											<img
												className={styles.tabsContentImg}
												src={tab.img} alt="content img"
											/>

											<div className={styles.tabsContentBox}>
												<h3 className={styles.tabsContentTitle}>
													{tab.label}
												</h3>

												<div className={styles.tabsContentText}>
													{tab.text}
												</div>

												<div className={styles.video}>

													<button className={styles.videoBtn}>
														<PlayIcon />
													</button>

													<span className={styles.videoText}>
														Watch the video
													</span>

												</div>
											</div>
										</motion.div>
									</AnimatePresence>
								) : null
							})
						}
					</div>
				</div>
			</Container>
		</div>
	)
}

