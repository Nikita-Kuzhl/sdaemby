import CircleGroupIcon from '../../../../components/icons/CircleGroupIcon'
import ApartmentsMinsk from './components/ApartmentsMinsk/ApartmentsMinsk'
import NewsFeed from './components/NewsFeed/NewsFeed'
import styles from './News.module.scss'

const News = () => {
  return (
    <section className={styles.container}>
      <CircleGroupIcon style={styles.circle} color='#FFD54F' />

      <main className={styles.main}>
        <ApartmentsMinsk />
        <NewsFeed />
      </main>
    </section>
  )
}

export default News
