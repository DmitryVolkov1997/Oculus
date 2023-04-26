import cn from 'classnames'
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { Link } from '../navLinks'
import { MenuItem } from './MenuItem/MenuItem'
import styles from './MenuList.module.sass'

interface MenuListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	links: Link[],
	setMenu: Dispatch<SetStateAction<boolean>>
}

export const MenuList = ({ links, className, setMenu }: MenuListProps) => {
	return (
		<ul className={cn(styles.list, className)}>
			{
				links.map((link) => (
					<MenuItem key={link.id} setMenu={setMenu} {...link} />
				))
			}
		</ul>
	)
}

