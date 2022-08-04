import CircleGroupIcon from '../../../../../../components/icons/CircleGroupIcon'
import styles from './ApartmentsMinsk.module.scss'

const ApartmentsMinsk = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>ЧТО ТАКОЕ SDAEM.BY</p>
        <h1 className={styles.title}>Квартира на сутки в Минске</h1>
      </div>
      <div className={styles.text_with_image}>
        <img src='/assets/images/orchid.png' alt='orchid' className={styles.img} />
        <p className={styles.text}>
          <span>Нужна квартира на сутки в Минске?</span>
          <br /> На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает
          более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.
          <br />
          <br /> В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры
          с большим количеством комнат в разных районах города, с различной степенью удобства от
          дешевых до VIP с джакузи.
        </p>
      </div>
      <p className={styles.description}>
        Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с
        владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены
        исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости
        взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут
        совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.
      </p>
      <CircleGroupIcon style={styles.circle} color='#FFD54F' />
    </section>
  )
}

export default ApartmentsMinsk
