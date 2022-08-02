import styles from './Presentation.module.scss'
import { city } from '../../../../constant/Link'
import RightArrowIcon from '../../../../components/icons/RightArrowIcon'
import Links from '../Links/Links'
import { Link } from 'react-router-dom'
const Presentation = () => {
  return (
    <section className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.list}>
          <div className={styles.item__big}>
            <p className={styles.subtitle}>Снять квартиру</p>
            <h1 className={styles.title}>Квартиры на сутки</h1>
            <ul className={styles.tag__list}>
              {city.map((item) => (
                <button className={styles.tag__item} key={item.href}>
                  {item.name === 'Гродное'
                    ? item.name
                    : item.name.substring(0, item.name.length - 1)}
                </button>
              ))}
            </ul>
          </div>
          <div
            className={styles.item__mini}
            style={{
              background:
                'linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(/assets/images/cottage.png)',
            }}
          >
            <p className={styles.subtitle}>Снять коттедж на праздник</p>
            <h1 className={styles.title}>Коттеджи и усадьбы</h1>

            <Link to={'/cottage'} className={styles.arrow__icon}>
              <RightArrowIcon color="#FFFFFF" />
            </Link>
          </div>
          <div
            className={styles.item__mini}
            style={{
              background:
                'linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(/assets/images/bath.png)',
            }}
          >
            <p className={styles.subtitle}>Попариться в бане с друзьями</p>
            <h1 className={styles.title}>Бани и сауны</h1>
            <Link to={'/bath'} className={styles.arrow__icon}>
              <RightArrowIcon color="#FFFFFF" />
            </Link>
          </div>

          <div className={styles.item__big}>
            <p className={styles.subtitle}>Если срочно нужна машина</p>
            <h1 className={styles.title}>Авто на прокат</h1>
            <Link to={'/auto'} className={styles.arrow__icon}>
              <RightArrowIcon color="#FFFFFF" />
            </Link>
          </div>
        </div>
      </div>
      <Links />
    </section>
  )
}

export default Presentation
