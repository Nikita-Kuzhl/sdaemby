import { FC } from 'react'
import { IIconsProps } from '../@types'

const RightArrowIcon: FC<IIconsProps> = ({ width = 7, height = 12, color = '#242424', style }) => {
  return (
    <svg
      className={style}
      width={width}
      height={height}
      viewBox='0 0 7 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.21484 10.75L5.96484 6L1.21484 1.25'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default RightArrowIcon
