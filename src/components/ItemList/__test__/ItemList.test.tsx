import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../../app/store'
import ItemList from '../ItemList'
const item = {
  id: 1,
  outside: 'пр. Косиора, 69',
  price: 141,
  rooms: 4,
  square: 108,
  description:
    'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры,',
  sleepingPlaces: '1',
  img: ['/apartments/1.png', '/apartments/3.png', '/apartments/3.png'],
  status: 'Standart',
  gas_stove: '1',
  oven: '0',
  coffee_maker: '0',
  microwave: '1',
  tableware: '1',
  dishwasher: '0',
  user: {
    name: 'Владимир',
    email: 'nik200203@gmail.com',
    telephone: '+375 (29) 291-14-44',
    avatar: '/avatar/boy.png',
  },
  city: {
    id: 1,
    name: 'Минск',
  },
  metro: {
    id: 1,
    name: 'Московскаая',
  },
  area: {
    id: 1,
    name: 'Заводской',
  },
}
render(
  <Provider store={store}>
    <BrowserRouter>
      <ItemList item={item} />
    </BrowserRouter>
  </Provider>,
)
test('render item list components', () => {
  const buttonFav = screen.getByTestId('button add favorite list')
  userEvent.click(buttonFav)
  expect(store.getState().favorite.favorites).toEqual([1])
  const buttonFavActive = screen.getByTestId('button add favorite list active')
  userEvent.click(buttonFavActive)
  expect(store.getState().favorite.favorites).toEqual([])
  const buttonModalOpen = screen.getByTestId('button open modal contact list')
  userEvent.click(buttonModalOpen)
  expect(screen.getByTestId('modal contact')).toBeInTheDocument()
})
export {}
