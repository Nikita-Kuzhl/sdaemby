import { FC } from 'react'
import { Link } from 'react-router-dom'
import { INewsItem } from '../../../../app/types/newsTypes'
import styles from './CardNewsList.module.scss'

interface IProps {
  news: INewsItem
}

const CardNewsList: FC<IProps> = ({ news }) => {
  return (
    <section key={news.id} className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.img}
          alt={news.name}
          src={`${process.env.REACT_APP_API}/${news.img}`}
        />
      </header>
      <main className={styles.main}>
        <h4 className={styles.title}>{news.name}</h4>
        <p className={styles.description}>{news.text}</p>
      </main>
      <p className={styles.line}></p>
      <footer className={styles.footer}>
        <p className={styles.date}>{news.date.toLowerCase().substring(0, news.date.length - 2)}</p>
        <Link className={styles.link} to={`/news/${news.id}`}>
          Читать
        </Link>
      </footer>
    </section>
  )
}

export default CardNewsList
