import styles from './NewsList.module.scss'
import DefaultLayout from '../../layouts/DefaultLayout'
import HeaderNewsList from './components/HeaderNewsList/HeaderNewsList'
import { useGetAllNewsQuery } from '../../app/service/newsService'
import CardNewsList from './components/CardNewsList/CardNewsList'
import Spinner from '../../components/Spinner'
import { useEffect } from 'react'
import Pagination from '../../components/Pagination'
import { useAppSelector } from '../../app/hooks'

const NewsList = () => {
  const { page } = useAppSelector((state) => state.pagination)
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetAllNewsQuery(page)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [isFetching])
  return (
    <DefaultLayout>
      <main
        className={styles.container}
        style={isFetching ? { minHeight: 400 } : {}}
      >
        {isSuccess && (
          <div
            className={styles.bg}
            style={isFetching ? { display: 'none' } : {}}
          />
        )}
        <HeaderNewsList />
        <div className={styles.list}>
          {(isFetching && <Spinner />) || (isLoading && <Spinner />)}
          {isError && <p>Error Server</p>}
          {isSuccess &&
            data.news.map((item) => (
              <div key={item.id} style={isFetching ? { display: 'none' } : {}}>
                <CardNewsList news={item} />
              </div>
            ))}
        </div>
        {isSuccess && !isFetching && (
          <div className={styles.pagination}>
            <Pagination
              currentPage={data.currentPage}
              totalPages={data.totalPages}
            />
          </div>
        )}
      </main>
    </DefaultLayout>
  )
}

export default NewsList
