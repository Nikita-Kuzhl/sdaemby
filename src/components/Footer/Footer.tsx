import ContactFooter from './ContactFooter'
import styles from './Footer.module.scss'
import LinkFooter from './LinkFooter'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactFooter />
      <LinkFooter />
    </footer>
  )
}

export default Footer
