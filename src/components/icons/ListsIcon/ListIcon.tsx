import { FC } from 'react'
import { IIconsProps } from '../@types'

const ListIcon: FC<IIconsProps> = ({ color = '#BDBDBD' }) => {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect y='0.5' width='14.5036' height='3.22302' rx='1' fill={color} />
      <rect y='11.2773' width='14.5036' height='3.22302' rx='1' fill={color} />
      <rect y='5.88867' width='14.5036' height='3.22302' rx='1' fill={color} />
    </svg>
  )
}

export default ListIcon
