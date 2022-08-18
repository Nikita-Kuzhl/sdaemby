import { paginationSlice } from '..'
import { store } from '../../../store'

describe('pagination redux state', () => {
  it('select page in news list', () => {
    store.dispatch(paginationSlice.actions.selectPageNews(2))
    expect(store.getState().pagination.page).toEqual(2)
  })
  it('select page in catalog', () => {
    store.dispatch(paginationSlice.actions.selectPageApart(2))
    expect(store.getState().pagination.pageApart).toEqual(2)
  })
})
export {}
