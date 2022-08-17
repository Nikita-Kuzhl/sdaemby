import AuthLayout from '../../layouts/AuthLayout'
import styles from './Authorization.module.scss'
import CustomSwitch from '../../components/CustomSwitch'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LockIcon from '../../components/icons/LockIcon'
import UserIcon from '../../components/icons/UserIcon'
import clsx from 'clsx'
import { useSignInMutation } from '../../app/service/authService'
import { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { authAction } from '../../app/features/auth'
interface IFormProps {
  login: string
  password: string
}

const Authorization = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [signIn, result] = useSignInMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormProps>()
  const onSubmit = async (e) => {
    await signIn(e)
  }
  useEffect(() => {
    if (result.isSuccess && result.data.status === 200) {
      dispatch(authAction.addToken(result.data.token))
      reset({ login: '', password: '' })
      navigate('/')
    }
  }, [result.isSuccess])
  return (
    <AuthLayout>
      <form data-testid='auth page' onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <h1 className={styles.title}>Авторизация</h1>
        <p className={styles.subtitle}>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
        <ul className={styles.input__list}>
          <div className={styles.input__item}>
            <input
              {...register('login', { required: true, minLength: 3 })}
              type='text'
              placeholder='Логин'
              className={clsx(
                styles.input,
                errors.login ? styles.warning : '',
                result.isSuccess && result.data.column === 'login' ? styles.warning : '',
              )}
            />
            <UserIcon width={20} height={20} style={styles.icon} />
            {errors.login && (
              <img
                className={styles.warning__icon}
                src='/assets/images/red_warning.svg'
                alt='red warning'
                width={20}
                height={20}
              />
            )}
          </div>
          <div className={styles.input__item}>
            <input
              {...register('password', { required: true, minLength: 6 })}
              type='password'
              placeholder='Пароль'
              className={clsx(
                styles.input,
                errors.password ? styles.warning : '',
                result.isSuccess && result.data.column === 'password' ? styles.warning : '',
              )}
            />
            <LockIcon width={20} height={20} style={styles.icon} />
            {errors.password && (
              <img
                className={styles.warning__icon}
                src='/assets/images/red_warning.svg'
                alt='red warning'
                width={20}
                height={20}
              />
            )}
          </div>
        </ul>
        <ul className={styles.action__list}>
          <div className={styles.switch__container}>
            <CustomSwitch />
            <p className={styles.switch__text}>Запомнить меня</p>
          </div>
          <Link className={styles.switch__link} to='*'>
            Забыли пароль?
          </Link>
        </ul>
        {result.isSuccess && result.data.status !== 200 && (
          <p className={styles.error}>
            {result.data.message}
            <img src='/assets/images/error.svg' />
          </p>
        )}
        <button type='submit' className={styles.button}>
          Войти
        </button>
        <div className={styles.link__container}>
          Еще нет аккаунта?{' '}
          <Link className={styles.link} to='/signup'>
            Создайте акканут
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Authorization
