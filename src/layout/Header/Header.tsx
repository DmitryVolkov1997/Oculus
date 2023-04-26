import cn from 'classnames'
import { Container } from 'components'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as BasketLogo } from '../../assets/images/basket.svg'
import Logo from '../../assets/images/logo.png'
import styles from './Header.module.sass'
import { MenuList } from './MenuList/MenuList'
import { links } from './navLinks'

export const Header = () => {
	const [menu, setMenu] = useState(false)

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.row}>
					<nav className={styles.nav}>
						<button
							className={styles.menuBurger}
							type="submit"
							onClick={() => setMenu(!menu)}
						>
							<span></span>
						</button>
						<MenuList className={cn(styles.list, {
							[styles.active]: menu
						})}
							links={links}
							setMenu={setMenu}
						/>

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


