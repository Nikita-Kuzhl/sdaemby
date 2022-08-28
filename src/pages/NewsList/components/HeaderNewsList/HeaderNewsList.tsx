import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import styles from './HeaderNewsList.module.scss'
interface IFormInput {
  value: string
}
interface IProps {
  search: React.Dispatch<React.SetStateAction<string>>
}
const HeaderNewsList: FC<IProps> = ({ search }) => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit = (e) => search(e.value)
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
