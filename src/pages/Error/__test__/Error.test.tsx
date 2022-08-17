import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { store } from '../../../app/store'
import Error from '../Error'
import Main from '../../Main'

test('render error page', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Error />
        <Main />
      </BrowserRouter>
    </Provider>,
  )
  expect(screen.getAllByText(/возможно/i))
  expect(screen.getAllByText(/ошибка/i))
  const button = screen.getByTestId('button to home')
  await userEvent.click(button)
  expect(screen.getByTestId('main page')).toBeInTheDocument()
})
