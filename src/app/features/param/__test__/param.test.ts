import { paramSlice } from '..'
import { store } from '../../../store'
const param = {
  area: 1,
  list: 'true',
  rooms: 3,
  priceTo: 20,
  priceFrom: 1000,
  metro: 2,
  sleepingPlaces: '2+1',
  sort: 2,
  checkbox: ['asd', 'asdf'],
}
describe('param redux state', () => {
  it('set  param area', () => {
    store.dispatch(paramSlice.actions.selectArea(param.area))
    expect(Number(sessionStorage.getItem('area'))).toEqual(param.area)
    expect(store.getState().param.area).toEqual(param.area)
  })
  it('set param checkbox', () => {
    store.dispatch(paramSlice.actions.selectCheckbox(param.checkbox))
    expect(JSON.parse(sessionStorage.getItem('checkbox'))).toEqual(param.checkbox)
    expect(store.getState().param.checkbox).toEqual(param.checkbox)
  })
  it('del param checkbox', () => {
    store.dispatch(paramSlice.actions.selectCheckbox(param.checkbox))
    expect(store.getState().param.checkbox).toEqual(param.checkbox)
    store.dispatch(paramSlice.actions.delChecbox('asd'))
    expect(store.getState().param.checkbox).toEqual(['asdf'])
  })
  it('set list param', () => {
    store.dispatch(paramSlice.actions.selectList(true))
    expect(sessionStorage.getItem('list')).toEqual(param.list)
    expect(store.getState().param.list).toEqual(param.list)
  })
  it('set param room', () => {
    store.dispatch(paramSlice.actions.selectRooms(param.rooms))
    expect(Number(sessionStorage.getItem('rooms'))).toEqual(param.rooms)
    expect(store.getState().param.rooms).toEqual(param.rooms)
  })
  it('set param price to', () => {
    store.dispatch(paramSlice.actions.selectPriceTo(param.priceTo))
    expect(Number(sessionStorage.getItem('priceTo'))).toEqual(param.priceTo)
    expect(store.getState().param.priceTo).toEqual(param.priceTo)
  })
  it('set param price from', () => {
    store.dispatch(paramSlice.actions.selectPriceFrom(param.priceFrom))
    expect(Number(sessionStorage.getItem('priceFrom'))).toEqual(param.priceFrom)
    expect(store.getState().param.priceFrom).toEqual(param.priceFrom)
  })
  it('set param metro', () => {
    store.dispatch(paramSlice.actions.selectMetro(param.metro))
    expect(Number(sessionStorage.getItem('metro'))).toEqual(param.metro)
    expect(store.getState().param.metro).toEqual(param.metro)
  })
  it('set param sleeping places', () => {
    store.dispatch(paramSlice.actions.selectSleepingPlaces(param.sleepingPlaces))
    expect(sessionStorage.getItem('sleepingPlaces')).toEqual(param.sleepingPlaces)
    expect(store.getState().param.sleepingPlaces).toEqual(param.sleepingPlaces)
  })
  it('set param sort', () => {
    store.dispatch(paramSlice.actions.selectSort(param.sort))
    expect(Number(sessionStorage.getItem('sort'))).toEqual(param.sort)
    expect(store.getState().param.sort).toEqual(param.sort)
  })
  it('clear sort options', () => {
    store.dispatch(paramSlice.actions.selectArea(param.area))
    store.dispatch(paramSlice.actions.selectCheckbox(param.checkbox))
    store.dispatch(paramSlice.actions.selectRooms(param.rooms))
    store.dispatch(paramSlice.actions.selectPriceTo(param.priceTo))
    store.dispatch(paramSlice.actions.selectPriceFrom(param.priceFrom))
    store.dispatch(paramSlice.actions.selectMetro(param.metro))
    store.dispatch(paramSlice.actions.selectSleepingPlaces(param.sleepingPlaces))
    expect(store.getState().param).toEqual(param)
    store.dispatch(paramSlice.actions.clearParam())
    expect(store.getState().param).toEqual({
      checkbox: [],
      area: null,
      rooms: null,
      priceTo: null,
      priceFrom: null,
      metro: null,
      sleepingPlaces: null,
      sort: 2 || null,
      list: 'true' || null,
    })
  })
})
export {}
