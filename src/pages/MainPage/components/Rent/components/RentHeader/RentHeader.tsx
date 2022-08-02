import Select from 'react-select'
import styles from './RentHeader.module.scss'
const area = [
  { value: 1, label: 'Грушевка' },
  { value: 2, label: 'Восход' },
  { value: 3, label: 'Пушкинская' },
  { value: 4, label: 'Партизанская' },
]
const metro = [
  { value: 1, label: 'Шабаны' },
  { value: 2, label: 'Запад' },
  { value: 3, label: 'Восток' },
  { value: 4, label: 'Малиновка' },
]
const RentHeader = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title__list}>
        <p className={styles.subtitle}>КВАРТИРЫ НА СУТКИ</p>
        <h3 className={styles.title}>Аренда квартир в Минске</h3>
      </div>
      <div className={styles.select__list}>
        <Select
          className={styles.select}
          placeholder={
            <>
              <img src="/assets/images/metro.svg" alt="metro" />
              Метро
            </>
          }
          options={metro}
        />
        <Select className={styles.select} placeholder="Район" options={area} />
      </div>
    </section>
  )
}

export default RentHeader
