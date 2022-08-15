import { FC } from 'react'
import { IIconsProps } from '../@types'

const TilesIcon: FC<IIconsProps> = ({ color = '#BDBDBD' }) => {
  return (
    <svg width='14' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='0.00390625' width='5.44444' height='5.44444' rx='1' fill={color} />
      <rect x='0.00390625' y='8.55469' width='5.44444' height='5.44444' rx='1' fill={color} />
      <rect x='8.55957' width='5.44444' height='5.44444' rx='1' fill={color} />
      <rect x='8.55957' y='8.55469' width='5.44444' height='5.44444' rx='1' fill={color} />
    </svg>
  )
}

export default TilesIcon
