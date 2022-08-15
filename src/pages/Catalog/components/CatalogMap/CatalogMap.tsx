import MapIcon from '../../../../components/icons/MapIcon'
import styles from './CatalogMap.module.scss'

const CatalogMap = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.modal}>
        <h1 className={styles.title}>Показать найденные квартиры на карте</h1>
        <p className={styles.description}>
          Ищите новостройки рядом с работой, парком или родственниками
        </p>
        <button className={styles.button}>
          <MapIcon width={15} height={15} color='#FEC100' /> Открыть карту
        </button>
      </div>
    </section>
  )
}

export default CatalogMap
