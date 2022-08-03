import { useGetThreeQuery } from '../../../../app/service/newsService'
import Spinner from '../../../../components/Spinner'
import CardNewsList from '../../../NewsList/components/CardNewsList/CardNewsList'
import styles from './NewsOtherList.module.scss'

const NewsOtherList = () => {
  const { data, isError, isLoading, isSuccess } = useGetThreeQuery(null)
  return (
    <>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {isError && <p>Error server</p>}
      {isSuccess && (
        <section className={styles.container}>
          <h2 className={styles.title}>Читайте также</h2>
          <ul className={styles.list}>
            {data.map((item) => (
              <div key={item.id}>
                <CardNewsList news={item} />
              </div>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default NewsOtherList
