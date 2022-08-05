import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useSignUpMutation } from '../../app/service/authService'
import LockIcon from '../../components/icons/LockIcon'
import MailIcon from '../../components/icons/MailIcon'
import UserIcon from '../../components/icons/UserIcon'
import AuthLayout from '../../layouts/AuthLayout'
import styles from './Registration.module.scss'
import RegistrationModal from './RegistrationModal'

interface IFormProps {
  login: string
  password: string
  email: string
  repeatPassword: string
}

const Registration = () => {
  const [confirmCaptcha, setConfirmCaptacha] = useState(false)
  const [error, setError] = useState(false)
  const [signUp, result] = useSignUpMutation()
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<IFormProps>()
  const password = useRef({})
  password.current = watch('password', '')
  const onSubmit = async (e: IFormProps) => {
    if (!confirmCaptcha) return setError(true)
    setError(false)
    delete e.repeatPassword
    await signUp(e)
  }
  useEffect(() => {
    if (result.isSuccess && result.data.status === 200) {
      reset({ login: '', password: '', email: '', repeatPassword: '' })
      setOpen(true)
    }
  }, [result.isSuccess])
  return (
    <AuthLayout>
      {!open ? (
        <main className={styles.container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.title}>Регистрация</h1>
            <ul className={styles.input__list}>
              {/* LOGIN */}
              <div>
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
              {/* EMAIL */}
              <div>
                <input
                  {...register('email', { required: true, minLength: 1 })}
                  type='email'
                  placeholder='Электронная почта'
                  className={clsx(
                    styles.input,
                    errors.email ? styles.warning : '',
                    result.isSuccess && result.data.column === 'email' ? styles.warning : '',
                  )}
                />
                <MailIcon width={17.5} height={17.5} style={styles.icon} />
                {errors.email && (
                  <img
                    className={styles.warning__icon}
                    src='/assets/images/red_warning.svg'
                    alt='red warning'
                    width={20}
                    height={20}
                  />
                )}
              </div>
              {/* PASSWORD */}
              <div>
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
              {/* REPEAT PASSWORD */}
              <div>
                <input
                  {...register('repeatPassword', {
                    required: true,
                    minLength: 6,
                    validate: (value) => value === password.current,
                  })}
                  type='password'
                  placeholder='Повторите пароль'
                  className={clsx(
                    styles.input,
                    errors.repeatPassword ? styles.warning : '',
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
            {/* CAPTCHA */}
            <ReCAPTCHA
              className={error ? styles.captcha__warning : styles.captcha}
              onChange={() => setConfirmCaptacha(true)}
              sitekey='6Ld-f0ohAAAAAKl-8_DySOa9yis3vZU4Ce087O62'
            />
            {/* WARNING */}
            {error && errors && (
              <p className={styles.error}>
                {'Ошибка ввода'}
                <img src='/assets/images/error.svg' />
              </p>
            )}
            {/* ERROR */}
            {result.isSuccess && result.data.status !== 200 && (
              <p className={styles.error}>
                {result.data.message || 'Ошибка ввода'}
                <img src='/assets/images/error.svg' />
              </p>
            )}
            {/* BUTTON */}
            <button type='submit' className={styles.button}>
              Войти
            </button>
          </form>
          <div className={styles.info}>
            <p className={styles.info__title}>Пользователь обязуется</p>
            <ul className={styles.info__list}>
              <li className={styles.info__item}>
                Пользователь обязуется: предоставлять достоверную и актуальную информацию при
                регистрации и добавлении объекта;{' '}
              </li>
              <li className={styles.info__item}>
                добавлять фотографии объектов соответствующие действительности. Администрация сайта
                sdaem.by оставляет за собой право удалять любую информацию, размещенную
                пользователем, если сочтет, что информация не соответствует действительности, носит
                оскорбительный характер, нарушает права и законные интересы других граждан либо
                действующее законодательство Республики Беларусь.
              </li>
            </ul>
            <p className={styles.link__text}>
              Уже есть аккаунт?{' '}
              <Link to='/signin' className={styles.link}>
                Войдите
              </Link>
            </p>
          </div>
        </main>
      ) : (
        <RegistrationModal token={result.data.token} />
      )}
    </AuthLayout>
  )
}

export default Registration
