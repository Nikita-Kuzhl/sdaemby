import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetByIdQuery } from '../../app/service/newsService'
import Spinner from '../../components/Spinner'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import styles from './News.module.scss'
import NewsHeader from './components/NewsHeader/NewsHeader'
import NewsOtherList from './components/NewsOtherList/NewsOtherList'

const News = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isError, isLoading, isSuccess } = useGetByIdQuery(Number(id))
  useEffect(() => {
    if (data === null) navigate('*')
  }, [isSuccess])
  return (
    <DefaultLayout>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {isSuccess && <div className={styles.bg} />}
      {isError && <p>Error Server</p>}

      <main className={styles.container}>
        {isSuccess && data !== null && (
          <>
            <NewsHeader name={data.name} date={data.date} />
            <img
              className={styles.img}
              alt={data.name}
              src={`${process.env.REACT_APP_API}/${data.img}`}
            />
            <p className={styles.description}>{data.text}</p>
          </>
        )}
      </main>
      {isSuccess && <NewsOtherList />}
    </DefaultLayout>
  )
}

export default News
