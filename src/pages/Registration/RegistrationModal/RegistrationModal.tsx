import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAction } from '../../../app/features/auth'
import { useAppDispatch } from '../../../app/hooks'
import styles from './RegistrationModal.module.scss'

interface IProps {
  token: string
}

const RegistrationModal: FC<IProps> = ({ token }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(authAction.addToken(token))
    navigate('/')
  }
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Подтвердите регистрацию</h1>
      <p className={styles.text}>
        Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме.
        Если письма нет, то проверьте спам.
      </p>
      <button onClick={handleClick} className={styles.button}>
        Понятно
      </button>
    </section>
  )
}

export default RegistrationModal
