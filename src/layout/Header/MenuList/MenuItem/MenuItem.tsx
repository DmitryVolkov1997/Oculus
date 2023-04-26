import cn from 'classnames'
import { Link } from 'layout/Header/navLinks'
import { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.sass'

interface MenuItemProps extends Link {
	setMenu: Dispatch<SetStateAction<boolean>>
}

export const MenuItem = ({ id, label, to, setMenu }: MenuItemProps) => {
	return (
		<li className={styles.item} onClick={() => setMenu(false)}>
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

