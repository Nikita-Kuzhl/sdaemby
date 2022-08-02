import { FC } from 'react'
import { Link } from 'react-router-dom'
import MailIcon from '../icons/MailIcon'
import ViberIcon from '../icons/ViberIcon'
import WhatsUpIcon from '../icons/WhatsUpIcon'
import styles from './ModalContact.module.scss'
import { IUser } from './ModalContact.types'
interface IProps {
  user: IUser
}
const ModalContact: FC<IProps> = ({ user }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={user.avatar} alt={user.name} />
      <p className={styles.status}>Владелец</p>
      <h3 className={styles.name}>{user.name}</h3>
      <h3 className={styles.telephone}>{user.telephone}</h3>
      <p className={styles.email}>{user.email}</p>
      <ul className={styles.list__social}>
        <Link to="/" className={styles.viber}>
          <ViberIcon color="white" />
        </Link>
        <Link to="/" className={styles.whatsup}>
          <WhatsUpIcon />
        </Link>
        <Link to="/" className={styles.mail}>
          <MailIcon />
        </Link>
      </ul>
    </div>
  )
}

export default ModalContact
