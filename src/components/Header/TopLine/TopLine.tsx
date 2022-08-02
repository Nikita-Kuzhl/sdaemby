import { Link } from 'react-router-dom'
import MapIcon from '../../icons/MapIcon'
import styles from './TopLine.module.scss'
import HeartIcons from '../../../assets/icons/heart.svg'
const TopLine = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <Link to="/" className={styles.list__item}>
          Главная
        </Link>
        <Link to="/" className={styles.list__item}>
          Новости
        </Link>
        <Link to="/" className={styles.list__item}>
          Размещение и тарифы
        </Link>
        <Link to="/" className={styles.list__item}>
          <MapIcon style={styles.mapicon} />
          Объявления на карте
        </Link>
        <Link to="/" className={styles.list__item}>
          Контакты
        </Link>
      </ul>
      <ul className={styles.action__list}>
        <Link to="/" className={styles.sub}>
          Закладки
          <img className={styles.sub_image} src={HeartIcons} alt="heart" />
        </Link>
        <Link to="/" className={styles.auth}>
          Вход и регистрация
        </Link>
      </ul>
    </nav>
  )
}

export default TopLine
