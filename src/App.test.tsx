import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { store } from './app/store'

test('route main', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('main page')).toBeInTheDocument()
})
test('route catalog', () => {
  render(
    <MemoryRouter initialEntries={['/catalog/apart/1']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('catalog page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/catalog/apart/1')
})
test('route auth', () => {
  render(
    <MemoryRouter initialEntries={['/signin']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('auth page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/signin')
})
test('route registration', () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('registration page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/signup')
})
test('route contact', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('contact page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/contact')
})
test('route news', () => {
  render(
    <MemoryRouter initialEntries={['/news']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('newslist page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/news')
})
test('route news item', () => {
  render(
    <MemoryRouter initialEntries={['/news/1']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('news page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/news/1')
})
test('route error', () => {
  render(
    <MemoryRouter initialEntries={['/asdasdkjndas']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByTestId('error page')).toBeInTheDocument()
  expect(screen.getByTestId('location-display')).toHaveTextContent('/asdasdkjndas')
})
