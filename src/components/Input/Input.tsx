import clsx from 'clsx'
import { FC } from 'react'
import LockIcon from '../icons/LockIcon'
import MailIcon from '../icons/MailIcon'
import UserIcon from '../icons/UserIcon'
import styles from './Input.module.scss'

interface IProps {
  type: 'text' | 'email' | 'password'
  className?: string
  placeholder: string
  icon: 'user' | 'mail' | 'lock'
  warning?: boolean
}

const Input: FC<IProps> = ({ className, placeholder, icon, type, warning = false, ...props }) => {
  return (
    <>
      <input
        {...props}
        type={type}
        className={clsx(styles.input, className)}
        placeholder={placeholder}
      ></input>
      {icon === 'user' && <UserIcon width={20} height={20} style={styles.icon} />}
      {icon === 'mail' && <MailIcon width={17.5} height={17.5} style={styles.icon} />}
      {icon === 'lock' && <LockIcon width={20} height={20} style={styles.icon} />}
      {warning && (
        <img
          className={styles.warning__icon}
          src='/assets/images/red_warning.svg'
          alt='red warning'
          width={20}
          height={20}
        />
      )}
    </>
  )
}

export default Input
