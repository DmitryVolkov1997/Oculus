import { Footer, Header } from 'layout'
import { ReactNode } from 'react'
import styles from './Layout.module.sass'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Header />

			<main className={styles.main}>
				{children}
			</main>

			<Footer />
		</div>
	)
}

