import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'

import { useCallback, useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../../app/store'
import OptionMenu from '../OptionMenu'

const useParam = (value) => {
  const [param, setParam] = useState(value)
  const reset = useCallback(() => setParam(value), [value])
  return { param, reset }
}
test('render option menu', async () => {
  const paramValue = {
    rooms: 1,
    priceTo: 1,
    priceFrom: 1,
    sleepingPlaces: '2+1',
    area: 1,
    metro: 1,
    checkbox: [],
  }
  const hook = renderHook(() => useParam(paramValue))
  await render(
    <Provider store={store}>
      <BrowserRouter>
        <OptionMenu
          param={hook.result.current.param}
          setParam={hook.result.current.reset}
          cityId={1}
        />
      </BrowserRouter>
    </Provider>,
  )
  expect(screen.getAllByTestId('option menu')).toMatchSnapshot()
})
export {}
