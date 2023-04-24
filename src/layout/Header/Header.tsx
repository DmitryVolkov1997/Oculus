import { Container } from 'components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as BasketLogo } from '../../assets/images/basket.svg'
import Logo from '../../assets/images/logo.png'
import styles from './Header.module.sass'
import { MenuList } from './MenuList/MenuList'
import { links } from './navLinks'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.row}>
					<nav className={styles.nav}>
						<MenuList className={styles.list} links={links} />

						<NavLink className={styles.logo} to={'/'}>
							<img src={Logo} alt="logo" />
						</NavLink>

						<NavLink className={styles.basket} to={'/'}>
							<BasketLogo />
						</NavLink>
					</nav>
				</div>
			</Container>
		</header>
	)
}

// 2 урок время 24:09 https://www.youtube.com/watch?v=JX2uP_MNST0

