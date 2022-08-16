import Select, { OnChangeValue } from 'react-select'
import { mainAction } from '../../../../../../app/features/main'
import { useAppDispatch } from '../../../../../../app/hooks'
import { useGetAreaQuery, useGetMetroQuery } from '../../../../../../app/service/apartService'
import { ISelectOnChangePropsNumber } from '../../../../../../app/types/selectTypes'
import MetroIcon from '../../../../../../components/icons/MetroIcon'
import SelectStyle from '../../../../../../components/SelectStyle'
import styles from './RentHeader.module.scss'

const areaCl = [
  { value: 1, label: 'Грушевка' },
  { value: 2, label: 'Восход' },
  { value: 3, label: 'Пушкинская' },
  { value: 4, label: 'Партизанская' },
]
const metroCl = [
  { value: 1, label: 'Шабаны' },
  { value: 2, label: 'Запад' },
  { value: 3, label: 'Восток' },
  { value: 4, label: 'Малиновка' },
]
const RentHeader = () => {
  const dispatch = useAppDispatch()
  const { data: metro, isError: isErrorMetro, isSuccess: isSuccessMetro } = useGetMetroQuery(1)
  const { data: area, isError: isErrorArea, isSuccess: isSuccessArea } = useGetAreaQuery(1)
  return (
    <section className={styles.container}>
      <div className={styles.title__list}>
        <p className={styles.subtitle}>КВАРТИРЫ НА СУТКИ</p>
        <h3 className={styles.title}>Аренда квартир в Минске</h3>
      </div>
      <div className={styles.select__list}>
        {isErrorMetro && (
          <Select
            styles={SelectStyle}
            className={styles.select}
            placeholder={
              <>
                <MetroIcon />
                Метро
              </>
            }
            options={metroCl}
          />
        )}
        {isSuccessMetro && (
          <Select
            styles={SelectStyle}
            className={styles.select}
            placeholder={
              <>
                <MetroIcon />
                Метро
              </>
            }
            // eslint-disable-next-line
            //@ts-ignore
            onChange={(e: OnChangeValue<ISelectOnChangePropsNumber, false>) =>
              dispatch(mainAction.selectParamMetro(e.value))
            }
            options={[
              { value: 0, label: 'Все' },
              ...metro.map((i) => {
                return { value: i.id, label: i.name }
              }),
            ]}
          />
        )}
        {isErrorArea && (
          <Select
            styles={SelectStyle}
            className={styles.select}
            placeholder='Район'
            options={areaCl}
          />
        )}
        {isSuccessArea && (
          <Select
            styles={SelectStyle}
            className={styles.select}
            placeholder='Район'
            // eslint-disable-next-line
            //@ts-ignore
            onChange={(e: ISelectOnChangePropsNumber) =>
              dispatch(mainAction.selectParamArea(e.value))
            }
            options={[
              { value: 0, label: 'Все' },
              ...area.map((i) => {
                return { value: i.id, label: i.name }
              }),
            ]}
          />
        )}
      </div>
    </section>
  )
}

export default RentHeader
