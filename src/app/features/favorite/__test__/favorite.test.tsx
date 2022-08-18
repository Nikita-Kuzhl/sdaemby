import { favoriteSlice } from '..'
import { store } from '../../../store'
const favorite = 1
describe('favorite redux state', () => {
  it('add favorite global state', () => {
    store.dispatch(favoriteSlice.actions.addFavorite(favorite))
    expect(JSON.parse(localStorage.getItem('favorite'))).toEqual([favorite])
    expect(store.getState().favorite.favorites).toEqual([favorite])
  })
  it('del favorite', () => {
    store.dispatch(favoriteSlice.actions.delFavorite(favorite))
    expect(JSON.parse(localStorage.getItem('favorite'))).toEqual([])
    expect(store.getState().favorite.favorites).toEqual([])
  })
})
export {}
