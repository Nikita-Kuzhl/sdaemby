import FacebookIcon from '../../components/icons/FacebookIcon'
import InstIcon from '../../components/icons/InstIcon'
import MailIcon from '../../components/icons/MailIcon'
import MapIcon from '../../components/icons/MapIcon'
import TelephoneIcon from '../../components/icons/TelephoneIcon'
import ViberIcon from '../../components/icons/ViberIcon'
import VKIcon from '../../components/icons/VKIcon'
import WhatsUpIcon from '../../components/icons/WhatsUpIcon'
import DefaultLayout from '../../layouts/DefaultLayout'
import ContactForm from './components/ContactForm/ContactForm'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <DefaultLayout>
      <main className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.info__container}>
            <h1 className={styles.title}>Контакты</h1>
            <p className={styles.description}>
              Если у Вас есть пожелания, предложения или претензии по
              организации работы сайта мы всегда рады услышать Ваше мнение.
            </p>
            <ul className={styles.contact__list}>
              <div className={styles.contact__item}>
                <div className={styles.contact__icon}>
                  <MapIcon color="white" width={12} height={15} />
                </div>
                <p className={styles.contact__text}>
                  220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
                </p>
              </div>
              <div className={styles.contact__item}>
                <div className={styles.contact__icon}>
                  <TelephoneIcon color="white" />
                </div>
                <p className={styles.contact__text}>+375 29 621-48-33 </p>
                <ul className={styles.contact__social}>
                  <div className={styles.contact__icon}>
                    <ViberIcon />
                  </div>
                  <div className={styles.contact__icon}>
                    <img src="/assets/images/telegram.svg" alt="telegram" />
                  </div>

                  <div className={styles.contact__icon}>
                    <WhatsUpIcon />
                  </div>
                </ul>
              </div>
              <div className={styles.contact__item}>
                <div className={styles.contact__icon}>
                  <MailIcon width={15} height={12} color="white" />
                </div>
                <p className={styles.contact__text}>
                  <u>sdaem@sdaem.by</u>
                </p>
              </div>
              <div className={styles.contact__item}>
                <div className={styles.contact__icon}>
                  <img src="/assets/images/clock.svg" alt="clock" />
                </div>
                <p className={styles.contact__text}>
                  <span>Режим работы:</span> 08:00-22:00
                </p>
              </div>
            </ul>
            <p className={styles.boss}>
              ИП Шушкевич Андрей Викторович
              <br /> УНП 192602485 Минским горисполкомом 10.02.2016
            </p>
            <div className={styles.warning}>
              <img src="/assets/images/exclamation.svg" alt="exclamation" />
              <p className={styles.warning__text}>
                Администрация сайта не владеет информацией о наличии свободных
                квартир
              </p>
            </div>
          </div>
          <ContactForm />
          <ul className={styles.social__container}>
            <div className={styles.social__icon}>
              <InstIcon color="white" />
            </div>
            <div className={styles.social__icon}>
              <VKIcon color="white" />
            </div>
            <div className={styles.social__icon}>
              <FacebookIcon color="white" />
            </div>
          </ul>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default Contact
