import React, { FC } from 'react'
import Select from 'react-select'
import { useGetAreaQuery, useGetMetroQuery } from '../../app/service/apartService'
import { ISelectOnChangePropsNumber, ISelectOnChangePropsString } from '../../app/types/selectTypes'
import { checkedApartParams, sleepingPlaces as sleepingPlacesList } from '../../constant'
import CheckBox from '../CheckBox'
import SelectStyle from '../SelectStyle'
import styles from './OptionMenu.module.scss'

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

interface IProps {
  cityId: number
  param: IParams
  setParam: React.Dispatch<React.SetStateAction<IParams>>
  isMainPage?: boolean
}
const OptionMenu: FC<IProps> = ({ cityId, param, setParam, isMainPage = false }) => {
  const { data: metroData, isSuccess: isSuccessMetro } = useGetMetroQuery(cityId)
  const { data: areaData, isSuccess: isSuccessArea } = useGetAreaQuery(cityId)

  return (
    <section
      className={styles.container}
      style={isMainPage ? { width: 1060, borderRadius: '0 0 10px 10px' } : {}}
    >
      <div className={styles.main} style={isMainPage ? { width: 1060, paddingLeft: 20 } : {}}>
        <ul className={styles.tag__list}>
          <div className={styles.tag__item}>
            <p className={styles.tag__title}>Спальные места</p>
            <Select
              placeholder='Выберите'
              styles={SelectStyle}
              options={sleepingPlacesList}
              value={
                param.sleepingPlaces
                  ? sleepingPlacesList.filter((i) => i.value === param.sleepingPlaces)[0]
                  : ''
              }
              // eslint-disable-next-line
              //@ts-ignore
              onChange={(e: ISelectOnChangePropsString) =>
                setParam({ ...param, sleepingPlaces: e.value })
              }
              className={styles.select}
            />
          </div>
          {!isMainPage && (
            <>
              <div className={styles.tag__item}>
                <p className={styles.tag__title}>Район</p>
                <Select
                  placeholder='Выберите'
                  styles={SelectStyle}
                  value={
                    isSuccessArea && param.area
                      ? areaData
                          .map((i) => {
                            if (i.id === param.area) {
                              return { value: i.id, label: i.name }
                            }
                          })
                          .filter((i) => i !== undefined)[0]
                      : ''
                  }
                  options={
                    isSuccessArea && [
                      ...areaData.map((item) => {
                        return { value: item.id, label: item.name }
                      }),
                    ]
                  }
                  // eslint-disable-next-line
                  //@ts-ignore
                  onChange={(e: ISelectOnChangePropsNumber) =>
                    setParam({ ...param, area: e.value })
                  }
                  className={styles.select}
                />
              </div>
              <div className={styles.tag__item}>
                <p className={styles.tag__title}>Метро</p>
                <Select
                  placeholder='Выберите'
                  styles={SelectStyle}
                  value={
                    isSuccessMetro && param.metro
                      ? metroData
                          .map((i) => {
                            if (i.id === param.metro) {
                              return { value: i.id, label: i.name }
                            }
                          })
                          .filter((i) => i !== undefined)[0]
                      : ''
                  }
                  options={
                    isSuccessMetro && [
                      ...metroData.map((item) => {
                        return { value: item.id, label: item.name }
                      }),
                    ]
                  }
                  // eslint-disable-next-line
                  //@ts-ignore
                  onChange={(e: ISelectOnChangePropsNumber) =>
                    setParam({ ...param, metro: e.value })
                  }
                  className={styles.select}
                />
              </div>
            </>
          )}
        </ul>
        <ul className={styles.check__list}>
          {checkedApartParams.map((i) => (
            <button
              onClick={() =>
                param.checkbox.includes(i.value)
                  ? setParam({
                      ...param,
                      checkbox: param.checkbox.filter((item) => item !== i.value),
                    })
                  : setParam({ ...param, checkbox: [...param.checkbox, i.value] })
              }
              key={i.id}
              className={styles.check__item}
            >
              <CheckBox active={param.checkbox.includes(i.value)} />
              <p className={styles.check__title}>{i.label}</p>
            </button>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OptionMenu
