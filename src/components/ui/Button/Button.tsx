import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.sass'

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost'
	size?: 'sm' | 'md',
	children: ReactNode
}

export const Button = ({ children, appearance, size = 'md', className, ...props }: ButtonProps) => {

	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost',
			[styles.sm]: size === 'sm',
			[styles.md]: size === 'md'
		})} {...props}>
			{children}
		</button>
	)
}

