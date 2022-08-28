import { Link } from 'react-router-dom'
import { useGetFiveQuery } from '../../../../../../app/service/newsService'
import RightArrowIcon from '../../../../../../components/icons/RightArrowIcon'
import Spinner from '../../../../../../components/Spinner'
import styles from './NewsFeed.module.scss'

const NewsFeed = () => {
  const { data: news, isLoading, isError, isSuccess } = useGetFiveQuery(null)
  return (
    <section className={styles.container}>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {isSuccess && !isError && (
        <>
          <h1 className={styles.title}>Новости</h1>
          <ul className={styles.list}>
            {news.map((item) => (
              <Link to={`/news/${item.id}`} key={item.id} className={styles.news}>
                <h5 className={styles.news__title}>{item.name}</h5>
                <p className={styles.news__date}>{item.date}</p>
              </Link>
            ))}
          </ul>
          <Link to='/news' className={styles.button}>
            Посмотреть все <RightArrowIcon color='#664EF9' />
          </Link>
        </>
      )}
      {isError && <p>Ошибка сервера...</p>}
    </section>
  )
}

export default NewsFeed
