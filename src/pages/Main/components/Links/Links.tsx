import { useState } from 'react'
import { Link } from 'react-router-dom'
import RightArrowIcon from '../../../../components/icons/RightArrowIcon'
import { city, cottage } from '../../../../constant/Link'
import styles from './Links.module.scss'

const Links = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className={styles.container}>
      <div className={styles.apartments}>
        <h3 className={styles.title}>Квартиры</h3>
        <ul className={styles.list}>
          {city.map((item) => (
            <Link key={item.href} to={`/catalog/${item.href}`} className={styles.item}>
              Квартиры в {item.name} <p className={styles.quantity}>{item.quantity}</p>
            </Link>
          ))}
        </ul>
      </div>
      <h3 className={styles.title}>Коттеджи и усадьбы</h3>
      <ul className={styles.list}>
        {cottage.map((item) => (
          <Link key={item.href} to={`/catalog/${item.href}`} className={styles.item}>
            {item.name} <p className={styles.quantity}>{item.quantity}</p>
          </Link>
        ))}
      </ul>
      {open ? (
        <>
          <h3 className={styles.title}>Бани и сауны</h3>
          <ul className={styles.list}>
            {city.map((item) => (
              <Link key={item.href} to={`/catalog/${item.href}`} className={styles.item}>
                Бани и сауны в {item.name} <p className={styles.quantity}>{item.quantity}</p>
              </Link>
            ))}
          </ul>
          <h3 className={styles.title}>Авто на прокат</h3>
          <ul className={styles.list}>
            {city.map((item) => (
              <Link key={item.href} to={`/catalog/${item.href}`} className={styles.item}>
                Авто на прокат в {item.name} <p className={styles.quantity}>{item.quantity}</p>
              </Link>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={() => setOpen(true)} className={styles.button__yet}>
          Ещё
          <RightArrowIcon style={styles.icon} color='#FEB700' />
        </button>
      )}
      <h3 className={styles.title}>Популярные направления</h3>
      <ul className={styles.list}>
        <Link className={styles.item} to={'/'}>
          Коттеджи и усадьбы на о. Брасласких{' '}
        </Link>
        <Link className={styles.item} to={'/'}>
          Коттеджи и усадьбы (жилье) на Нарочи
        </Link>
        <Link className={styles.item} to={'/'}>
          Коттеджи и усадьбы (жилье) у воды, на берегу, на озере
        </Link>
      </ul>
    </section>
  )
}

export default Links
