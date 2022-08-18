import { authSlice } from '..'
import { store } from '../../../store'
const token = 'djkajdkjdsakjkdfaksnjkvdj3jendj2n3fkj'
describe('auth redux state', () => {
  it('add token global state ', () => {
    store.dispatch(authSlice.actions.addToken(token))
    expect(localStorage.getItem('token')).toEqual(token)
    expect(store.getState().auth.token).toEqual(token)
  })
  it('delete token global state ', () => {
    store.dispatch(authSlice.actions.delToken())
    expect(localStorage.getItem('token')).toEqual(null)
    expect(store.getState().auth.token).toEqual('')
  })
})
export {}
