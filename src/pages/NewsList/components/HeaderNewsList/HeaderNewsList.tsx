import { useForm } from 'react-hook-form'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import styles from './HeaderNewsList.module.scss'
interface IFormInput {
  value: string
}
const HeaderNewsList = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit = (e) => console.log(e)
  return (
    <header className={styles.container}>
      <div className={styles.info}>
        <Breadcrumbs link={[{ name: 'Новости' }]} />
        <h1 className={styles.title}>Новости</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.search}>
        <input
          {...register('value')}
          className={styles.search__input}
          type='text'
          placeholder='Поиск по статьям'
        />
        <button type='submit' className={styles.search__icon}>
          <img width={17} height={17} src='/assets/images/search.svg' alt='search' />
        </button>
      </form>
    </header>
  )
}

export default HeaderNewsList
