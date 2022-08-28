import { Link } from 'react-router-dom'
import styles from './LinkFooter.module.scss'
import SocialFooter from '../SocialFooter'
import PayFooter from '../PayFooter'
import { useGetCityQuery } from '../../../app/service/apartService'
import { vowels } from '../../../constant'
import { paramAction } from '../../../app/features/param'
import { useDispatch } from 'react-redux'
const LinkFooter = () => {
  const { data: city, isSuccess } = useGetCityQuery(null)
  const dispatch = useDispatch()
  return (
    <section className={styles.container}>
      <ul className={styles.title__list}>
        <Link to='/' className={styles.title__item}>
          Коттеджи и усадьбы
        </Link>
        <Link to='/' className={styles.title__item}>
          Бани и сауны
        </Link>
        <Link to='/' className={styles.title__item}>
          Авто напрокат
        </Link>
        <SocialFooter />
      </ul>
      <div className={styles.apartaments}>
        <h1 className={styles.apartaments__title}>Квартиры</h1>
        <ul className={styles.apartaments__list}>
          {isSuccess &&
            city.map((item) => (
              <Link
                key={item.name}
                to={`/catalog/apart/${item.id}`}
                className={styles.apartaments__item}
                onClick={() => dispatch(paramAction.clearParam())}
              >
                Квартиры в{' '}
                {vowels.includes(item.name.slice(-1))
                  ? item.name.substring(0, item.name.length - 1).concat('е')
                  : item.name.concat('e')}
              </Link>
            ))}
        </ul>
      </div>
      <ul className={styles.pages__list}>
        <Link to='/news' className={styles.pages__item}>
          Новости
        </Link>
        <Link to='/' className={styles.pages__item}>
          Размещение и тарифы
        </Link>
        <Link to='/' className={styles.pages__item}>
          Объявления на карте
        </Link>
        <Link to='/contact' className={styles.pages__item}>
          Контакты
        </Link>
        <PayFooter />
      </ul>
    </section>
  )
}

export default LinkFooter
