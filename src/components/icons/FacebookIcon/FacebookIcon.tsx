import { FC } from 'react'
import { IIconsProps } from '../@types'

const FacebookIcon: FC<IIconsProps> = ({
  width = 21,
  height = 21,
  color = '#1e2123',
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
    >
      <path
        d="M10.8047 0.667969C5.28266 0.667969 0.805664 5.14497 0.805664 10.667C0.805664 15.657 4.46166 19.793 9.24266 20.546V13.558H6.70266V10.667H9.24266V8.46397C9.24266 5.95597 10.7357 4.57297 13.0187 4.57297C14.1127 4.57297 15.2587 4.76797 15.2587 4.76797V7.22697H13.9947C12.7547 7.22697 12.3667 7.99897 12.3667 8.78997V10.665H15.1377L14.6947 13.556H12.3667V20.544C17.1477 19.795 20.8037 15.658 20.8037 10.667C20.8037 5.14497 16.3267 0.667969 10.8047 0.667969Z"
        fill={color}
      />
    </svg>
  )
}

export default FacebookIcon