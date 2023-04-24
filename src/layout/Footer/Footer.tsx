import { Container } from 'components'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import styles from './Footer.module.sass'
import { MenuList } from './MenuList/MenuList'
import { socialIcons } from './socialIcons'

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container>
				<div className={styles.footerRow}>

					<nav className={styles.nav}>
						<MenuList />
					</nav>

					<NavLink className={styles.logo} to={'/'}>
						<img src={Logo} alt="logo" />
					</NavLink>

					<div className={styles.socialIcons}>
						{socialIcons.map(icon => {
							return (
								<icon.img
									className={styles.icon}
									key={icon.id}
								/>
							)
						})}
					</div>
				</div>
			</Container>
		</div>
	)
}

