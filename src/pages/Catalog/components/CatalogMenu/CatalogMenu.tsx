import clsx from 'clsx'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'
import { paramAction } from '../../../../app/features/param'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import RightArrowIcon from '../../../../components/icons/RightArrowIcon'
import SetingIcon from '../../../../components/icons/SettingIcon'
import OptionMenu from '../../../../components/OptionMenu'
import SelectStyle from '../../../../components/SelectStyle'
import { apartRooms } from '../../../../constant'
import styles from './CatalogMenu.module.scss'

interface IParams {
  rooms: number
  priceTo: number
  priceFrom: number
  sleepingPlaces: string
  area: number
  metro: number
  checkbox: string[]
}

const CatalogMenu = () => {
  const dispatch = useAppDispatch()
  const [openOptions, setOpenOptions] = useState(false)
  const { id: cityId } = useParams()
  const { rooms, priceFrom, priceTo, sleepingPlaces, area, metro, checkbox } = useAppSelector(
    (state) => state.param,
  )
  const [param, setParam] = useState<IParams>({
    rooms: rooms,
    priceTo: priceTo,
    priceFrom: priceFrom,
    sleepingPlaces: sleepingPlaces,
    area: area,
    metro: metro,
    checkbox: checkbox,
  })
  const submitClick = () => {
    param.rooms !== null && dispatch(paramAction.selectRooms(param.rooms))
    param.priceTo !== null &&
      param.priceTo !== 0 &&
      dispatch(paramAction.selectPriceTo(param.priceTo))
    param.priceFrom !== null &&
      param.priceFrom !== 0 &&
      dispatch(paramAction.selectPriceFrom(param.priceFrom))
    param.metro !== null && dispatch(paramAction.selectMetro(param.metro))
    param.area !== null && dispatch(paramAction.selectArea(param.area))
    param.sleepingPlaces !== null &&
      dispatch(paramAction.selectSleepingPlaces(param.sleepingPlaces))
    dispatch(paramAction.selectCheckbox(param.checkbox))
  }
  const clearClick = () => {
    dispatch(paramAction.clearParam())
    setParam({
      rooms: null,
      priceTo: null,
      priceFrom: null,
      sleepingPlaces: null,
      area: null,
      metro: null,
      checkbox: [],
    })
  }
  return (
    <>
      <section className={styles.container}>
        <div className={styles.main}>
          <div className={styles.item}>
            <p className={styles.item__title}>Комнаты</p>
            <Select
              styles={SelectStyle}
              placeholder='Выберите'
              value={param.rooms ? apartRooms.find((i) => i.value === param.rooms) : ''}
              options={apartRooms.map((i) => {
                return { value: i.value, label: i.label }
              })}
              className={styles.select}
              onChange={(e: any) => setParam({ ...param, rooms: e.value })}
            />
          </div>
          <div className={styles.item}>
            <p className={styles.item__title}>Цена за сутки (BYN)</p>
            <ul className={styles.input__list}>
              <input
                onChange={(e) => setParam({ ...param, priceFrom: Number(e.target.value) })}
                value={param.priceFrom || ''}
                className={styles.input}
                type='text'
                placeholder='От'
                min={0}
              />
              -
              <input
                onChange={(e) => setParam({ ...param, priceTo: Number(e.target.value) })}
                className={styles.input}
                value={param.priceTo || ''}
                type='text'
                placeholder='До'
                min={0}
              />
            </ul>
          </div>
          <div className={clsx(styles.item, openOptions ? styles.border__bottom : '')}>
            <button onClick={() => setOpenOptions(!openOptions)} className={styles.button__opt}>
              Болешь опций <SetingIcon />
            </button>
          </div>
          <div className={styles.item}>
            <button className={styles.button__clear} onClick={() => clearClick()}>
              Очистить
            </button>
            <button type='reset' onClick={() => submitClick()} className={styles.button__show}>
              Показать объекты <RightArrowIcon color='white' />
            </button>
          </div>
        </div>
      </section>
      {openOptions && <OptionMenu setParam={setParam} param={param} cityId={Number(cityId)} />}
    </>
  )
}

export default CatalogMenu
