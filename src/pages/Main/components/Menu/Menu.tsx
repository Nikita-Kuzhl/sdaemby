import { FC, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { paramAction } from '../../../../app/features/param'
import { useOutsideClick } from '../../../../app/hooks/useOutsideClick'
import { useGetCityQuery } from '../../../../app/service/apartService'
import { ISelectOnChangePropsNumber } from '../../../../app/types/selectTypes'
import MapIcon from '../../../../components/icons/MapIcon'
import RightArrowIcon from '../../../../components/icons/RightArrowIcon'
import SetingIcon from '../../../../components/icons/SettingIcon'
import OptionMenu from '../../../../components/OptionMenu'
import SelectStyle from '../../../../components/SelectStyle'
import { apartRooms, city } from '../../../../constant'
import styles from './Menu.module.scss'

interface IProps {
  heading: string
}

interface IParams {
  city?: number
  rooms: number
  priceTo: number
  priceFrom: number
  sleepingPlaces: string
  area: number
  metro: number
  checkbox: string[]
}

const Menu: FC<IProps> = ({ heading }) => {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, isSuccess, isError } = useGetCityQuery(null)
  const [openOptions, setOpenOptions] = useState(false)
  const [param, setParam] = useState<IParams>({
    city: null,
    rooms: null,
    priceTo: null,
    priceFrom: null,
    sleepingPlaces: null,
    area: null,
    metro: null,
    checkbox: [],
  })
  useOutsideClick(ref, setOpenOptions, openOptions)
  const submitClick = () => {
    param.rooms !== null && dispatch(paramAction.selectRooms(param.rooms))
    param.priceTo !== null &&
      param.priceTo !== 0 &&
      dispatch(paramAction.selectPriceTo(param.priceTo))
    param.priceFrom !== null &&
      param.priceFrom !== 0 &&
      dispatch(paramAction.selectPriceFrom(param.priceFrom))
    param.sleepingPlaces !== null &&
      dispatch(paramAction.selectSleepingPlaces(param.sleepingPlaces))
    dispatch(paramAction.selectCheckbox(param.checkbox))
    param.city !== null && navigate(`/catalog/apart/${param.city}`)
  }
  return (
    <>
      <section
        className={styles.container}
        style={openOptions ? { borderRadius: 0, borderTopRightRadius: 10 } : {}}
        ref={ref}
      >
        <ul className={styles.list}>
          <div className={styles.item} style={{ width: 190 }}>
            <p className={styles.item__title}>Город</p>
            {isError && (
              <Select
                styles={SelectStyle}
                className={styles.item__select}
                placeholder='Выберите'
                options={city.map((item) => {
                  return { value: item.href, label: item.name }
                })}
              />
            )}
            {!isError && isSuccess && (
              <Select
                styles={SelectStyle}
                className={styles.item__select}
                placeholder='Выберите'
                // eslint-disable-next-line
                //@ts-ignore
                onChange={(e: ISelectOnChangePropsNumber) => setParam({ ...param, city: e.value })}
                options={data.map((item) => {
                  return { value: item.id, label: item.name }
                })}
              />
            )}
            <span className={styles.border}></span>
          </div>
          <div className={styles.item} style={{ width: 190 }}>
            <p className={styles.item__title}>
              {heading === 'Авто напрокат' ? 'Кол-во дверей' : 'Комнаты'}
            </p>
            <Select
              styles={SelectStyle}
              placeholder='Выбирете'
              className={styles.item__select}
              // eslint-disable-next-line
              //@ts-ignore
              onChange={(e: ISelectOnChangePropsNumber) => setParam({ ...param, rooms: e.value })}
              options={apartRooms.map((i) => {
                return { value: i.value, label: i.label }
              })}
            />
          </div>
          <div className={styles.item} style={{ width: 215 }}>
            <p className={styles.item__title}>Цена за сутки (BYN)</p>
            <div className={styles.price__container}>
              <input
                onChange={(e) => setParam({ ...param, priceFrom: Number(e.target.value) })}
                type='text'
                placeholder='От'
                className={styles.input__price}
              />
              -
              <input
                onChange={(e) => setParam({ ...param, priceTo: Number(e.target.value) })}
                type='text'
                placeholder='До'
                className={styles.input__price}
              />
            </div>
          </div>
          <div className={styles.item}>
            <button onClick={() => setOpenOptions(!openOptions)} className={styles.title}>
              Больше опций <SetingIcon />{' '}
            </button>
          </div>
          <div className={styles.item}>
            <p className={styles.title}>
              На карте <MapIcon color='#664EF9' width={12} height={15} />
            </p>
            <button onClick={() => submitClick()} type='submit' className={styles.item__button}>
              Показать <RightArrowIcon />
            </button>
          </div>
        </ul>
        {openOptions && heading === 'Квартиры на сутки' && (
          <OptionMenu isMainPage={true} param={param} setParam={setParam} cityId={param.city} />
        )}
      </section>
    </>
  )
}

export default Menu
