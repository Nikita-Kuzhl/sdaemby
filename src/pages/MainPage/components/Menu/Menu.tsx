import { FC } from 'react'
import Select from 'react-select'
import MapIcon from '../../../../components/icons/MapIcon'
import RightArrowIcon from '../../../../components/icons/RightArrowIcon'
import SetingIcon from '../../../../components/icons/SettingIcon'
import { city } from '../../../../constant/Link'
import styles from './Menu.module.scss'

const apartmentList = [
  {
    value: 0,
    label: 'Студия',
  },
  { value: 1, label: '1 комната' },
  { value: 2, label: '2 комнаты' },
  { value: 3, label: '3 комнаты' },
  { value: 4, label: '4 комнаты' },
  { value: 5, label: '5 и больше' },
]
const carsList = [
  { value: 2, label: '2 дверная' },
  { value: 3, label: '3 дверная' },
  { value: 4, label: '4 дверная' },
  { value: 5, label: '5 и больше' },
]
interface IProps {
  heading: string
}

const Menu: FC<IProps> = ({ heading }) => {
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          <div className={styles.item} style={{ width: 190 }}>
            <p className={styles.item__title}>Город</p>
            <Select
              className={styles.item__select}
              placeholder="Выберите"
              options={city.map((item) => {
                return { value: item.href, label: item.name }
              })}
            />
            <span className={styles.border}></span>
          </div>
          <div className={styles.item} style={{ width: 190 }}>
            <p className={styles.item__title}>
              {heading === 'Авто напрокат' ? 'Кол-во дверей' : 'Комнаты'}
            </p>
            <Select
              placeholder="Выбирете"
              className={styles.item__select}
              options={heading === 'Авто напрокат' ? carsList : apartmentList}
            />
          </div>
          <div className={styles.item} style={{ width: 215 }}>
            <p className={styles.item__title}>Цена за сутки (BYN)</p>
            <div className={styles.price__container}>
              <input
                type="text"
                placeholder="От"
                className={styles.input__price}
              />
              -
              <input
                type="text"
                placeholder="До"
                className={styles.input__price}
              />
            </div>
          </div>
          <div className={styles.item}>
            <button className={styles.title}>
              Больше опций <SetingIcon />{' '}
            </button>
          </div>
          <div className={styles.item}>
            <p className={styles.title}>
              На карте <MapIcon color="#664EF9" width={12} height={15} />
            </p>
            <button type="submit" className={styles.item__button}>
              Показать <RightArrowIcon />
            </button>
          </div>
        </ul>
      </section>
    </>
  )
}

export default Menu
