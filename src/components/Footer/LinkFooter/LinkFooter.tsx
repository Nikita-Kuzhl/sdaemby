import { Link } from 'react-router-dom'
import styles from './LinkFooter.module.scss'
import { city } from '../../../constant/Link/index'
const LinkFooter = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.title__list}>
        <Link to='/' className={styles.title__item}>Коттеджи и усадьбы</Link>
        <Link to='/' className={styles.title__item}>Бани и сауны</Link>
        <Link to='/' className={styles.title__item}>Авто напрокат</Link>
      </ul>
      <div className={styles.apartaments}>
        <h1 className={styles.apartaments__title}>Квартиры</h1>
        <ul className={styles.apartaments__list}>
          {city.map(item => (
            <Link to={`/${item.href}`} className={styles.apartaments__item}>Квартиры в {item.name}</Link>
          ))}
        </ul>
      </div>
      <ul className={styles.pages__list}>
        <Link to='/' className={styles.pages__item}>Новости</Link>
        <Link to='/' className={styles.pages__item}>Размещение и тарифы</Link>
        <Link to='/' className={styles.pages__item}>Объявления на карте</Link>
        <Link to='/' className={styles.pages__item}>Контакты</Link>
      </ul>
    </section>
  )
}

export default LinkFooter