import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { footerLinks } from '../footerLinks'
import { MenuItem } from './MenuItem/MenuItem'
import styles from './MenuList.module.sass'

interface MenuListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
}

export const MenuList = ({ className }: MenuListProps) => {
	return (
		<ul className={cn(styles.list, className)}>
			{
				footerLinks.map((link) => (
					<MenuItem key={link.id} {...link} />
				))
			}
		</ul>
	)
}

