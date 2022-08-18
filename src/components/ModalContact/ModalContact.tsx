import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import MailIcon from '../icons/MailIcon'
import ViberIcon from '../icons/ViberIcon'
import WhatsUpIcon from '../icons/WhatsUpIcon'
import styles from './ModalContact.module.scss'
interface IUser {
  name: string
  email: string
  avatar: string
  telephone: string
}
interface IProps {
  user: IUser
  isApartPage?: boolean
  isListStyle?: boolean
}
const ModalContact: FC<IProps> = ({ user, isApartPage = false, isListStyle = false }) => {
  return (
    <div
      data-testid='modal contact'
      className={clsx(
        !isApartPage && !isListStyle && styles.container,
        isApartPage && styles.container__apart,
        isListStyle && styles.container__list,
      )}
    >
      <img
        className={styles.avatar}
        src={`${process.env.REACT_APP_API}/${user.avatar}`}
        alt={user.name}
      />
      <p className={styles.status}>Владелец</p>
      <h3 className={styles.name}>{user.name}</h3>
      <h3 className={styles.telephone}>{user.telephone}</h3>
      <p className={styles.email}>{user.email}</p>
      <ul className={styles.list__social}>
        <Link to='/' className={styles.viber}>
          <ViberIcon color='white' />
        </Link>
        <Link to='/' className={styles.whatsup}>
          <WhatsUpIcon />
        </Link>
        <Link to='/' className={styles.mail}>
          <MailIcon color='white' />
        </Link>
      </ul>
    </div>
  )
}

export default ModalContact
