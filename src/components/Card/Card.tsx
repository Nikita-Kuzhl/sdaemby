import { useState } from 'react'
import MapIcon from '../icons/MapIcon'
import ModalContact from '../ModalContact'
import styles from './Card.module.scss'

const item = {
  id: 1,
  src: '/assets/images/1.png',
  price: '65.00',
  rooms: 4,
  square: 179,
  people: 4,
  street: 'б-р Мулявина, д. 10',
  city: { id: 1, name: 'Минск' },
  metro: [
    { id: 1, name: 'Грушевка' },
    { id: 2, name: 'Шабаны' },
  ],
  description:
    'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры,описание квартиры,описание квартиры,описание квартиры,описание квартиры,описание квартиры,описание квартиры',
  status: { id: 2, name: 'Gold' },
  user_id: 1,
}
const user = {
  id: 1,
  name: 'Dmitriy',
  status: 'Владелец',
  email: 'vladimir6234@tut.by',
  avatar: '/assets/images/avatar.png',
  telephone: '+375 (29) 291-14-44',
}

const Card = () => {
  // const [user,setUser] = useState()
  const [open, setOpen] = useState(false)
  const metro = item.metro.slice(1)
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img alt={item.street} src={item.src} />
        <p className={styles.status}>{item.status.name || null}</p>
      </header>
      <main className={styles.main}>
        <ul className={styles.info__list}>
          <div className={styles.price__container}>
            <h3 className={styles.price__item}>{item.price} BYN</h3>
            <p className={styles.price__description}>за сутки</p>
          </div>
          <ul className={styles.tag__list}>
            <p className={styles.tag}>
              <img src='/assets/images/user.svg' alt='user' />
              {item.people} (2+2)
            </p>
            <p className={styles.tag}>{item.rooms} комн.</p>
            <p className={styles.tag}>{item.square} м²</p>
          </ul>
        </ul>
        <div className={styles.street}>
          <MapIcon width={12} height={15} color='#BDBDBD' />
          {`${item.city.name}, ${item.street}`}
        </div>
        <ul className={styles.metro__container}>
          <p className={styles.metro__item}>
            <img src='/assets/images/metro.svg' alt='metro' />
            {item.metro[0].name}
          </p>
          {metro.map((item) => (
            <p className={styles.metro__item} key={item.id}>
              <svg
                width='6'
                height='7'
                viewBox='0 0 6 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <ellipse cx='2.75' cy='3.20732' rx='2.75' ry='2.84209' fill='#BDBDBD' />
              </svg>

              {item.name}
            </p>
          ))}
        </ul>
        <p className={styles.description}>{item.description}</p>
      </main>
      <p className={styles.line}></p>
      <footer className={styles.footer}>
        <button className={styles.button__contact} onClick={() => setOpen(!open)}>
          <img src='/assets/images/telephone.svg' alt='phone' />
          Контакты
        </button>
        {open && <ModalContact user={user} />}
        <button className={styles.button__more}>Подробнее</button>
      </footer>
    </section>
  )
}

export default Card
