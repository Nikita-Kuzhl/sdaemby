import styles from './ContactFooter.module.scss'
import Logo from '../../../assets/images/logo.png'
const ContactFooter = () => {
  return (
    <section className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo footer" />
      <p className={styles.logo__text}>СДАЁМ БАЙ</p>
      <p className={styles.description}>
        ИП Шушкевич Андрей Викторович <br />
        УНП 192602485 Минским горисполкомом
        <br />
        10.02.2016 <br />
        220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 <br />
        +375 29 621 48 33, sdaem@sdaem.by <br />
        Режим работы: 08:00-22:00 <br />
      </p>
    </section>
  )
}

export default ContactFooter
