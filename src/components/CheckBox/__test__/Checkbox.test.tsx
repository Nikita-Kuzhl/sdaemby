import { render, screen } from '@testing-library/react'
import CheckBox from '../CheckBox'

test('checkbox test', () => {
  const { rerender } = render(<CheckBox active={false} />)
  expect(screen.getByTestId('checkbox')).toHaveClass('container')
  expect(screen.getByRole('img'))
  rerender(<CheckBox active={true} />)
  expect(screen.getByTestId('checkbox')).toHaveClass('container__active')
  expect(screen.getByRole('img'))
})
