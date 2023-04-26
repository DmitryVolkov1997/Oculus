import { Container } from 'components'
import styles from './Contacts.module.sass'

interface ContactsProps {}

export const Contacts = ({ }: ContactsProps) => {
	return (
		<div className={styles.contacts}>
			<Container>
				<h4 className={styles.contactsTitle}>
					Get news and updates
				</h4>

				<div className={styles.contactsRow}>
					<div className={styles.contactsBox}>
						<form className={styles.contactsForm}>
							<input
								className={styles.contactsFormInput}
								type="text"
								placeholder="E-mail"
							/>

							<button
								type='submit'
								className={styles.contactsFormBtn}>
								go
							</button>
						</form>
						<div className={styles.contactsGroup}>
							<p className={styles.contactsText}>
								By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Meta about Meta’s existing and future products and services.
							</p>

							<p className={styles.contactsText}>
								You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages.
							</p>

							<p className={styles.contactsText}>
								Your subscription is subject to the Terms and Privacy Policy.
							</p>
						</div>
					</div>
					<div className={styles.contactsInfo}>
						<a
							className={styles.contactsInfoLink} href="mailto:oculusshop@gmail.com"
						>
							oculusshop@gmail.com
						</a>
					</div>
				</div>
			</Container>
		</div>
	)
}

