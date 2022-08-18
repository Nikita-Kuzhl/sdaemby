import { mainSlice } from '..'
import { store } from '../../../store'

describe('main redux state', () => {
  it('select param metro', () => {
    store.dispatch(mainSlice.actions.selectParamMetro(1))
    expect(store.getState().main.metro).toEqual(1)
  })
  it('select param area', () => {
    store.dispatch(mainSlice.actions.selectParamArea(1))
    expect(store.getState().main.area).toEqual(1)
  })
})
export {}
