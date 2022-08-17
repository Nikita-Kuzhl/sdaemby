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
import styles from './ItemList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { useOutsideClick } from '../../app/hooks/useOutsideClick'
interface IProps {
  item: IApartment
}

const ItemList: FC<IProps> = ({ item }) => {
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
    <section className={styles.container}>
      {Array.isArray(item.img) ? (
        <>
          <Swiper
            modules={[Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            className={styles.swiper__container}
            style={{ margin: 0 }}
          >
            <p className={styles.status}>Gold</p>
            {item.img.map((i) => (
              <SwiperSlide key={Math.floor(Math.random() * 500)}>
                <img className={styles.img} alt={i} src={`${process.env.REACT_APP_API}/${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className={styles.img__container}>
          <img
            className={styles.img}
            alt={item.img}
            src={`${process.env.REACT_APP_API}/${item.img}`}
          />
          {item.status === 'Gold' && <p className={styles.status}>{item.status}</p>}
        </div>
      )}
      <div className={styles.main__container}>
        <div className={styles.title_price__container}>
          <h3 className={styles.title}>
            {item.rooms}-комн. аппартаменты на {item.area.name}
          </h3>
          <div className={styles.price__container}>
            <h3 className={styles.price__item}>{item.price.toFixed(2)} BYN</h3>
            <p className={styles.price__description}>за сутки</p>
          </div>
        </div>
        <div className={styles.map__container}>
          <MapIcon color='#664EF9' width={16} height={20} /> {item.city.name}, {item.outside}
        </div>
        <ul className={styles.tag__list}>
          <p className={styles.tag}>
            <UserIcon color='#686868' />
            {item.sleepingPlaces.split('').reduce((a, c) => a + (isNaN(+c) ? 0 : +c), 0)} (
            {item.sleepingPlaces})
          </p>
          <p className={styles.tag}>{item.rooms} комн.</p>
          <p className={styles.tag}>
            <MetroIcon color='#664EF9' />
            {item.metro.name}
          </p>
          <p className={styles.tag}>
            <span>район:</span>
            {item.area.name}
          </p>
        </ul>
        <p className={styles.description}>{item.description}</p>
        <div ref={ref} className={styles.action__container}>
          <div className={styles.action__buttons}>
            <button
              style={{ background: '#F8F8F8', boxShadow: 'none' }}
              className={styles.button__contact}
              onClick={() => setOpen(!open)}
            >
              <TelephoneIcon />
              Контакты
            </button>
            {favorites.includes(item.id) ? (
              <button onClick={() => handleClickFavorite()} className={styles.heart__button}>
                <p>Добавлено</p>
                <HeartIcon style={styles.heart__icon_active} width={15} height={15} />
              </button>
            ) : (
              <button onClick={() => handleClickFavorite()} className={styles.heart__button}>
                <p>В закладки</p>
                <HeartIcon style={styles.heart__icon} width={15} height={15} />
              </button>
            )}
          </div>
          <Link to='*' className={styles.button__more}>
            Подробнее
          </Link>
        </div>
      </div>
      {open && <ModalContact isListStyle={true} user={item.user} />}
    </section>
  )
}

export default ItemList
