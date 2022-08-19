import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../../app/store'
import Pagination from '../Pagination'

test('render pagination', () => {
  const currentPage = 1
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Pagination currentPage={currentPage} totalPages={10} />
      </Provider>
    </BrowserRouter>,
  )
  userEvent.click(screen.getByText('3'))
  expect(store.getState().pagination.page).toEqual(3)
})
