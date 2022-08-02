import FacebookIcon from '../../icons/FacebookIcon/FacebookIcon'
import InstIcon from '../../icons/InstIcon'
import VKIcon from '../../icons/VKIcon'
import styles from './SocialFooter.module.scss'
const SocialFooter = () => {
  return (
    <section className={styles.container}>
      <div className={styles.social}>
        <h1 className={styles.social__title}>Мы в соцсетях</h1>
        <ul className={styles.social__list}>
          <a className="icons" href="https://www.instagram.com">
            <InstIcon />
          </a>
          <a className="icons" href="https://vk.com/sdaem_by">
            <VKIcon />
          </a>
          <a className="icons" href="https://ru-ru.facebook.com/">
            <FacebookIcon />
          </a>
        </ul>
      </div>
    </section>
  )
}

export default SocialFooter
