import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from '../navLinks'
import { MenuItem } from './MenuItem/MenuItem'
import styles from './MenuList.module.sass'

interface MenuListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	links: Link[]
}

export const MenuList = ({ links, className }: MenuListProps) => {
	return (
		<ul className={cn(styles.list, className)}>
			{
				links.map((link) => (
					<MenuItem key={link.id} {...link} />
				))
			}
		</ul>
	)
}

