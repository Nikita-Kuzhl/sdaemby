import { FC, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { favoriteAction } from '../../app/features/favorite'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { IApartment } from '../../app/types/apartTypes'
import HeartIcon from '../icons/HeartIcon'
import MapIcon from '../icons/MapIcon'
import MetroIcon from '../icons/MetroIcon'
import TelephoneIcon from '../icons/TelephoneIcon'
import UserIcon from '../icons/UserIcon'
import ModalContact from '../ModalContact'
import styles from './Card.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { useOutsideClick } from '../../app/hooks/useOutsideClick'

interface IProps {
  item: IApartment
  isApartPage?: boolean
}

const Card: FC<IProps> = ({ item, isApartPage = false }) => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { favorites } = useAppSelector((state) => state.favorite)
  const handleClickFavorite = () => {
    if (favorites.includes(item.id)) {
      return dispatch(favoriteAction.delFavorite(item.id))
    }
    return dispatch(favoriteAction.addFavorite(item.id))
  }
  useOutsideClick(ref, setOpen, open)

  return (
    <section style={isApartPage ? { height: 535 } : { height: 520 }} className={styles.container}>
      {Array.isArray(item.img) ? (
        <>
          <p className={styles.status}>Gold</p>
          <Swiper
            modules={[Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            className={styles.swiper__container}
          >
            {item.img.map((i) => (
              <SwiperSlide key={Math.floor(Math.random() * 500)}>
                <img className={styles.img} alt={i} src={`${process.env.REACT_APP_API}/${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <header className={styles.header}>
          <img
            className={styles.img}
            alt={item.img}
            src={`${process.env.REACT_APP_API}/${item.img}`}
          />
          {item.status === 'Gold' && <p className={styles.status}>{item.status}</p>}
        </header>
      )}
      <main className={styles.main}>
        <ul className={styles.info__list}>
          <div className={styles.price__container}>
            <h3 className={styles.price__item}>{item.price.toFixed(2)} BYN</h3>
            <p className={styles.price__description}>за сутки</p>
          </div>
          <ul className={styles.tag__list}>
            <p className={styles.tag}>
              <UserIcon width={15} height={15} color='#686868' />
              {item.sleepingPlaces.split('').reduce((a, c) => a + (isNaN(+c) ? 0 : +c), 0)} (
              {item.sleepingPlaces})
            </p>
            <p className={styles.tag}>{item.rooms} комн.</p>
            {!isApartPage && <p className={styles.tag}>{item.square} м²</p>}
          </ul>
        </ul>
        <div className={styles.street}>
          <MapIcon width={15} height={15.5} color='#BDBDBD' />
          {`${item.city.name}, ${item.outside}`}
        </div>
        <ul className={styles.metro__container}>
          <p className={styles.metro__item}>
            <MetroIcon />
            {item.metro.name}
          </p>
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
            {item.area.name}
          </p>
        </ul>
        <p style={isApartPage ? { lineHeight: '18px' } : {}} className={styles.description}>
          {item.description}
        </p>
      </main>
      <p className={styles.line}></p>
      <footer
        data-testid='card footer'
        ref={ref}
        style={isApartPage ? { marginTop: 13 } : {}}
        className={styles.footer}
      >
        {isApartPage && (
          <button
            data-testid='button add favorite'
            onClick={() => handleClickFavorite()}
            className={styles.button__heart}
          >
            <HeartIcon
              width={15}
              height={15}
              style={favorites.includes(item.id) ? styles.icon__heart_active : styles.icon__heart}
            />
          </button>
        )}
        <button
          data-testid='button open modal contact'
          style={isApartPage ? { background: '#F8F8F8', boxShadow: 'none' } : {}}
          className={styles.button__contact}
          onClick={() => setOpen(!open)}
        >
          <TelephoneIcon />
          Контакты
        </button>
        {open && <ModalContact isApartPage={isApartPage} user={item.user} />}
        <Link to='*' className={styles.button__more}>
          Подробнее
        </Link>
      </footer>
    </section>
  )
}

export default Card
