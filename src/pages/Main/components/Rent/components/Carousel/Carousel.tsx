import styles from './Carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import SwiperCore, { Navigation } from 'swiper'
import { useState } from 'react'
import RightArrowIcon from '../../../../../../components/icons/RightArrowIcon'
import Card from '../../../../../../components/Card'
import { useGetApartQuery } from '../../../../../../app/service/apartService'
import Spinner from '../../../../../../components/Spinner'
import { useAppSelector } from '../../../../../../app/hooks'

SwiperCore.use([Navigation])

const Carousel = () => {
  const { area, metro } = useAppSelector((state) => state.main)
  const { data, isLoading, isSuccess, isError, isFetching } = useGetApartQuery({
    city: 1,
    limit: 12,
    page: 1,
    metro: metro === 0 ? undefined : metro,
    area: area === 0 ? undefined : area,
  })
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  return (
    <section className={styles.container}>
      {isFetching && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {!isLoading && !isFetching && (
        <div>
          <Swiper
            className={styles.myswiper}
            slideClass={styles.swiper__slide}
            slidesPerView='auto'
            width={80}
            navigation={{ prevEl, nextEl }}
          >
            {isSuccess &&
              data.apartment.map((i) => (
                <SwiperSlide key={i.id} className={styles.swiper__slide}>
                  <Card item={i} />
                </SwiperSlide>
              ))}
            {isError && <p className={styles.error}>Ошибка сервера...</p>}
          </Swiper>
          {!isError && (
            <div className={styles.list__arrow}>
              <button className={styles.arrow} ref={(node) => setPrevEl(node)}>
                <RightArrowIcon color='#664EF9' />
              </button>
              <button className={styles.arrow} ref={(node) => setNextEl(node)}>
                <RightArrowIcon color='#664EF9' />
              </button>
            </div>
          )}
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.quantity__container}>
          <h1 className={styles.quantity__title}>
            {isSuccess && !isFetching && !isLoading && !isError ? data.totalItems : '...'}{' '}
            <span>+</span>
          </h1>
          <p className={styles.quantity__subtitle}>Предложений по Минску</p>
        </div>
        <button className={styles.catalog__button}>
          Посмотреть все <RightArrowIcon color='white' />
        </button>
      </div>
    </section>
  )
}

export default Carousel
