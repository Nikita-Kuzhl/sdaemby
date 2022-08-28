import CircleGroupIcon from '../../../../components/icons/CircleGroupIcon'
import ApartmentsMinsk from './components/ApartmentsMinsk'
import NewsFeed from './components/NewsFeed'
import styles from './News.module.scss'

const NewsMain = () => {
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

export default NewsMain
