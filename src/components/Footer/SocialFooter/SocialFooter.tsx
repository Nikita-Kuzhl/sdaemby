import styles from './SocialFooter.nodule.scss'
const SocialFooter = () => {
  return (
    <section className={styles.container}>
      <div className={styles.social}>
        <h1 className={styles.social__title}>Мы в соцсетях</h1>
        <ul className={styles.social__list}>
          <img alt='inst' />
          <img alt='vk' />
          <img alt='facebook' />
        </ul>
      </div>
    </section>
  )
}

export default SocialFooter