import { Container } from 'components'
import { Link } from 'react-router-dom'
import styles from './Game.module.sass'
import { gameData } from './gameData'

interface GameProps { }

export const Game = ({ }: GameProps) => {
	return (
		<div className={styles.game}>
			<Container>
				<h2 className={styles.gameTitle}>
					games
				</h2>
				<div className={styles.gameRow}>
					<div className={styles.gameDescr}>
						<p className={styles.gameDescrTitle}>
							It’s all fun and games
						</p>
						<p className={styles.gameDescrText}>
							Discover new adventures, master epic challenges or revisit classic moments in your favourite games and experiences
						</p>

						<Link
							className={styles.gameDescrLink}
							to="/"
						>
							see all games
						</Link>
					</div>

					{
						gameData.map(game => {
							return (
								<div
									key={game.id}
									className={styles.gameItem}
								>
									<img
										className={styles.gameItemImg}
										src={game.img}
										alt="game"
									/>
									<p className={styles.gameItemTitle}>
										{game.title}
									</p>
									<p className={styles.gameItemText}>
										{game.description}
									</p>

									<Link
										className={styles.gameItemLink}
										to="/"
									>
										{game.link}
									</Link>
								</div>
							)
						})
					}
				</div>
			</Container>
		</div>
	)
}

