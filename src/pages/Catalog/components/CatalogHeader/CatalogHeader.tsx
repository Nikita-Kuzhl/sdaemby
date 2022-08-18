import { useParams } from 'react-router-dom'
import { paramAction } from '../../../../app/features/param'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import {
  useGetAreaQuery,
  useGetCityQuery,
  useGetMetroQuery,
} from '../../../../app/service/apartService'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import { apartRooms, checkedApartParams, vowels } from '../../../../constant'
import styles from './CatalogHeader.module.scss'

const CatalogHeader = () => {
  const { rooms, priceFrom, priceTo, area, metro, sleepingPlaces, checkbox } = useAppSelector(
    (state) => state.param,
  )
  const { id: cityId } = useParams()
  const { data: dataCity, isSuccess: isSuccessCity } = useGetCityQuery(null)
  const { data: areaData, isSuccess: isSuccessArea } = useGetAreaQuery(Number(cityId))
  const { data: metroData, isSuccess: isSuccessMetro } = useGetMetroQuery(Number(cityId))
  const dispatch = useAppDispatch()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Breadcrumbs
          link={[
            {
              name: `Квартиры в ${
                isSuccessCity && dataCity.find((i) => i.id === Number(cityId))
                  ? vowels.includes(
                      dataCity.filter((item) => item.id === Number(cityId))[0].name.slice(-1),
                    )
                    ? dataCity
                        .filter((item) => item.id === Number(cityId))[0]
                        .name.slice(0, -1)
                        .concat('е')
                    : dataCity.filter((item) => item.id === Number(cityId))[0].name.concat('е')
                  : '...'
              }`,
            },
          ]}
        />
        <h2 className={styles.title}>
          Аренда квартир на сутки в{' '}
          {isSuccessCity && dataCity.find((i) => i.id === Number(cityId))
            ? vowels.includes(
                dataCity.filter((item) => item.id === Number(cityId))[0].name.slice(-1),
              )
              ? dataCity
                  .filter((item) => item.id === Number(cityId))[0]
                  .name.slice(0, -1)
                  .concat('е')
              : dataCity.filter((item) => item.id === Number(cityId))[0].name.concat('е')
            : '...'}
        </h2>
        {rooms || priceFrom || priceTo || area || metro || sleepingPlaces || checkbox.length ? (
          <ul className={styles.tag__list}>
            {!isNaN(rooms) && rooms && (
              <div className={styles.tag__item}>
                {rooms}-комнатные
                <button
                  className={styles.button__cross}
                  onClick={() => dispatch(paramAction.selectRooms(null))}
                >
                  <img alt='cross' src='/assets/images/cross.png' />
                </button>
              </div>
            )}
            {!isNaN(priceFrom) && priceFrom && (
              <div className={styles.tag__item}>
                Цена от {priceFrom.toFixed(2)} BYN
                <button
                  className={styles.button__cross}
                  onClick={() => dispatch(paramAction.selectPriceFrom(null))}
                >
                  <img alt='cross' src='/assets/images/cross.png' />
                </button>
              </div>
            )}
            {!isNaN(priceTo) && priceTo && (
              <div className={styles.tag__item}>
                Цена до {priceTo.toFixed(2)} BYN
                <button
                  className={styles.button__cross}
                  onClick={() => dispatch(paramAction.selectPriceTo(null))}
                >
                  <img alt='cross' src='/assets/images/cross.png' />
                </button>
              </div>
            )}
            {!isNaN(area) && area && isSuccessArea && (
              <div className={styles.tag__item}>
                {areaData.filter((item) => item.id === area)[0].name} р.
                <button
                  className={styles.button__cross}
                  onClick={() => dispatch(paramAction.selectArea(null))}
                >
                  <img alt='cross' src='/assets/images/cross.png' />
                </button>
              </div>
            )}
            {!isNaN(metro) && metro && isSuccessMetro && (
              <div className={styles.tag__item}>
                Метро - {metroData.filter((item) => item.id === metro)[0].name}
                <button
                  className={styles.button__cross}
                  onClick={() => dispatch(paramAction.selectMetro(null))}
                >
                  <img alt='cross' src='/assets/images/cross.png' />
                </button>
              </div>
            )}
            {sleepingPlaces !== null && (
              <div className={styles.tag__item}>
                Спальных мест - {sleepingPlaces}
                <button
                  className={styles.button__cross}
                  onClick={() => dispatch(paramAction.selectSleepingPlaces(null))}
                >
                  <img alt='cross' src='/assets/images/cross.png' />
                </button>
              </div>
            )}
            {checkbox &&
              checkbox.length >= 1 &&
              checkbox.map((item) => (
                <div key={item} className={styles.tag__item}>
                  {checkedApartParams.find((i) => i.value === item).label}
                  <button
                    className={styles.button__cross}
                    onClick={() => dispatch(paramAction.delChecbox(item))}
                  >
                    <img alt='cross' src='/assets/images/cross.png' />
                  </button>
                </div>
              ))}
          </ul>
        ) : (
          <>
            <p className={styles.recomend__text}>Рекомендуем посмотреть</p>
            <ul className={styles.tag__list}>
              <button
                onClick={() => dispatch(paramAction.selectPriceTo(50))}
                className={styles.tag__item}
              >
                Недорогие
              </button>
              {apartRooms.map((i) => (
                <button
                  onClick={() => dispatch(paramAction.selectRooms(i.value))}
                  key={i.value}
                  className={styles.tag__item}
                >
                  {i.label}
                </button>
              ))}
              {isSuccessArea &&
                areaData.map((i) => (
                  <button
                    onClick={() => dispatch(paramAction.selectArea(i.id))}
                    className={styles.tag__item}
                    key={i.id}
                  >
                    {i.name} р.
                  </button>
                ))}
            </ul>
          </>
        )}
      </div>
    </header>
  )
}

export default CatalogHeader
