import RightArrowIcon from '../../../../../../components/icons/RightArrowIcon'
import styles from './NewsFeed.module.scss'

const news = [
  {
    id: 1,
    name: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
    date: '14 Январь',
  },
  { id: 2, name: 'Аренда квартиры посуточно', date: '14 Январь' },
  { id: 3, name: 'Дворцово-парковый комплекс Чапских', date: '14 Январь' },
  { id: 4, name: 'Дворцово-парковый комплекс Чапских', date: '14 Январь' },
  { id: 5, name: 'Дворцово-парковый комплекс Чапских', date: '14 Январь' },
]

const NewsFeed = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Новости</h1>
      <ul className={styles.list}>
        {news.map((item) => (
          <div key={item.id} className={styles.news}>
            <h5 className={styles.news__title}>{item.name}</h5>
            <p className={styles.news__date}>{item.date}</p>
          </div>
        ))}
      </ul>
      <button className={styles.button}>
        Посмотреть все <RightArrowIcon color="#664EF9" />
      </button>
    </section>
  )
}

export default NewsFeed
