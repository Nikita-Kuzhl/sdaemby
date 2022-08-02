import { FC, useRef } from 'react'
import styles from './ContactModal.module.scss'
interface IProps {
  setClose: () => void
}
const ContactModal: FC<IProps> = ({ setClose }) => {
  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ваше письмо отправлено!</h1>
        <p className={styles.subtitle}>
          Какое-то сообщение о том, что письмо отправлено, какое-то сообщение,
          что письмо отправлено.
        </p>
        <button onClick={setClose} className={styles.button}>
          Закрыть окно
        </button>
      </div>
    </section>
  )
}

export default ContactModal
