import CircleGroupIcon from '../../components/icons/CircleGroupIcon'
import HomeIcon from '../../components/icons/HomeIcon'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import styles from './Error.module.scss'

const Error = () => {
  return (
    <>
      <DefaultLayout>
        <main data-testid='error page' className={styles.container}>
          <CircleGroupIcon color='#FFD54F' style={styles.circle__gold} />
          <div className={styles.titles}>
            <h1 className={styles.title}>Ошибка 404</h1>
            <p className={styles.subtitle}>
              Возможно, у вас опечатка в адресе страницы, или её просто не существует
            </p>
            <button data-testid='button to home' type='button' className={styles.button}>
              <HomeIcon />
              Вернуться на главную
            </button>
          </div>
          <img src='/assets/images/404.svg' alt='error' className={styles.error_img} />
          <CircleGroupIcon color='#FFFFFF' style={styles.circle__white} />
        </main>
      </DefaultLayout>
    </>
  )
}

export default Error
