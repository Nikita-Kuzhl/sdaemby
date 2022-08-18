import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { useState as useStateMock } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../../app/store'
import OptionMenu from '../OptionMenu'

// const [param, setParam] = useStateMock({
//   rooms: 1,
//   priceTo: 1,
//   priceFrom: 1,
//   sleepingPlaces: '2+1',
//   area: 1,
//   metro: 1,
//   checkbox: [],
// })
test('render option menu', () => {
  //   const par = renderHook(() =>
  //     useStateMock({
  //       rooms: 1,
  //       priceTo: 1,
  //       priceFrom: 1,
  //       sleepingPlaces: '2+1',
  //       area: 1,
  //       metro: 1,
  //       checkbox: [],
  //     }),
  //   )
  //   console.log(par)
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <OptionMenu param={param} setParam={setParam} cityId={1} />
  //       </BrowserRouter>
  //     </Provider>,
  //   )
  //   screen.debug()
})
export {}
