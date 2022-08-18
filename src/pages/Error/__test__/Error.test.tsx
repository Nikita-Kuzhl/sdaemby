import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../../app/store'
import Error from '../Error'
import Main from '../../Main'
import { LocationDisplay } from '../../../App'

test('render error page', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Error />
        <Main />
        <LocationDisplay />
      </BrowserRouter>
    </Provider>,
  )
  expect(screen.getAllByText(/возможно/i))
  expect(screen.getAllByText(/ошибка/i))
  const button = screen.getByTestId('button to home')
  await userEvent.click(button)
  expect(screen.getByTestId('main page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/')
})
