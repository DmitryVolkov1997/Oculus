import cn from 'classnames'
import { Link } from 'layout/Header/navLinks'
import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.sass'

interface MenuItemProps extends Link { }

export const MenuItem = ({ id, label, to }: MenuItemProps) => {
	return (
		<li className={styles.item}>
			<NavLink
				className={({ isActive }) =>
					isActive ? cn(styles.link, styles.active) : styles.link}
				to={to}
			>
				{label}
			</NavLink>
		</li>
	)
}

