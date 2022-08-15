import { Link } from 'react-router-dom'
import MapIcon from '../../icons/MapIcon'
import styles from './TopLine.module.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetInfoUserQuery } from '../../../app/service/authService'
import RightArrowIcon from '../../icons/RightArrowIcon'
import { authAction } from '../../../app/features/auth'
import HeartIcon from '../../icons/HeartIcon'
const TopLine = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  const { favorites } = useAppSelector((state) => state.favorite)
  const dispatch = useAppDispatch()
  const { data, isSuccess } = useGetInfoUserQuery(null)
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <Link to='/' className={styles.list__item}>
          Главная
        </Link>
        <Link to='/news' className={styles.list__item}>
          Новости
        </Link>
        <Link to='*' className={styles.list__item}>
          Размещение и тарифы
        </Link>
        <Link to='*' className={styles.list__item}>
          <MapIcon style={styles.mapicon} />
          Объявления на карте
        </Link>
        <Link to='/contact' className={styles.list__item}>
          Контакты
        </Link>
      </ul>
      <ul className={styles.action__list}>
        <Link to='*' onClick={() => console.log('Закладки - ', favorites)} className={styles.sub}>
          Закладки
          <HeartIcon style={styles.heart__icon} width={15.7} height={15} stroke='#8291A3' />
        </Link>
        {!isAuth ? (
          <Link to='/signin' className={styles.auth}>
            Вход и регистрация
          </Link>
        ) : (
          isSuccess && (
            <div className={styles.user}>
              <img
                src={`${process.env.REACT_APP_API}/${data.avatar}`}
                className={styles.user__img}
              />
              <p className={styles.user__name}>{data.name}</p>
              <button className={styles.user__icon} onClick={() => dispatch(authAction.delToken())}>
                <RightArrowIcon color='#4e64f9' />
              </button>
            </div>
          )
        )}
      </ul>
    </nav>
  )
}

export default TopLine
