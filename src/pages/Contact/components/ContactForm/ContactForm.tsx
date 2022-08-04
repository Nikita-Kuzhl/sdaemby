import MailIcon from '../../../../components/icons/MailIcon'
import UserIcon from '../../../../components/icons/UserIcon'
import styles from './ContactForm.module.scss'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import ContactModal from '../ContactModal/ContactModal'

interface IFormInputs {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()
  const onSubmit = (e) => {
    console.log(e)
    setOpen(true)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <div className={styles.data}>
          <div className={styles.input__container}>
            <label className={styles.title}>Ваше имя</label>
            <UserIcon color='#686868' style={styles.input__icon} />
            <input
              {...register('name', { required: true, minLength: 1 })}
              name='name'
              placeholder='Введите'
              type='text'
              className={`${styles.input__mini}  ${errors.name ? styles.input__warning : ''}`}
            />
            {errors.name && (
              <img
                className={styles.warning__mini}
                src='/assets/images/red_warning.svg'
                alt='red warning'
              />
            )}
          </div>
          <div className={styles.input__container}>
            <label className={styles.title}>Ваша электронная почта</label>
            <MailIcon width={17.5} height={13.75} color='#686868' style={styles.input__icon} />
            <input
              {...register('email', { required: true })}
              name='email'
              placeholder='Введите'
              type='email'
              className={`${styles.input__mini}  ${errors.name ? styles.input__warning : ''}`}
            />
            {errors.email && (
              <img
                className={styles.warning__mini}
                src='/assets/images/red_warning.svg'
                alt='red warning'
              />
            )}
          </div>
        </div>
        <div className={styles.message}>
          <label className={styles.title}>Ваше сообщение</label>
          <textarea
            {...register('message', { required: true, minLength: 1 })}
            name='message'
            placeholder='Сообщение'
            className={`${styles.input__big}  ${errors.name ? styles.input__warning : ''}`}
          />
          {errors.message && (
            <img
              className={styles.warning__big}
              src='/assets/images/red_warning.svg'
              alt='red warning'
            />
          )}
        </div>
        <button className={styles.button} type='submit'>
          Отправить
        </button>
      </form>
      {open && <ContactModal setClose={handleClose} />}
    </>
  )
}

export default ContactForm
