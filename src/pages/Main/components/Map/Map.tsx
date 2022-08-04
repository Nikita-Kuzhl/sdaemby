import CircleGroupIcon from '../../../../components/icons/CircleGroupIcon'
import MapIcon from '../../../../components/icons/MapIcon'
import MapCardS from './components/MapRentCard/MapCard'
import styles from './Map.module.scss'

const Map = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <CircleGroupIcon color='#FFFFFF' style={styles.circle} />
        <div className={styles.search__container}>
          <h1 className={styles.search__title}>Поиск квартир на карте</h1>
          <p className={styles.search__subtitle}>
            Ищите квартиры на сутки в центре города, возле парка или в живописном районе
          </p>
          <button className={styles.search__button}>
            <MapIcon width={12} height={15} color='#FEC100' />
            Открыть карту
          </button>
        </div>
      </div>
      <MapCardS />
    </section>
  )
}

export default Map
