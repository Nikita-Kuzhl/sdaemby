import styles from './Carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import SwiperCore, { Navigation } from 'swiper'
import { useState } from 'react'
import RightArrowIcon from '../../../../../../components/icons/RightArrowIcon'
import Card from '../../../../../../components/Card'

SwiperCore.use([Navigation])

const Carousel = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  return (
    <section className={styles.container}>
      <Swiper
        slideClass={styles.swiper__slide}
        slidesPerView={3}
        // spaceBetween={30}
        navigation={{ prevEl, nextEl }}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiper__slide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <Card />
        </SwiperSlide>
      </Swiper>
      <div className={styles.list__arrow}>
        <button className={styles.arrow} ref={(node) => setPrevEl(node)}>
          <RightArrowIcon color='#664EF9' />
        </button>
        <button className={styles.arrow} ref={(node) => setNextEl(node)}>
          <RightArrowIcon color='#664EF9' />
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.quantity__container}>
          <h1 className={styles.quantity__title}>
            341 <span>+</span>
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
