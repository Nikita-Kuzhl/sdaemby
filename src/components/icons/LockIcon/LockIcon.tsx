import { FC } from 'react'
import { IIconsProps } from '../@types'

const LockIcon: FC<IIconsProps> = ({ color, width = 20, height = 21, style }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={style}
    >
      <g clipPath='url(#clip0_2831_1601)'>
        <path
          d='M15.625 8H15V5.5C15 2.7425 12.7575 0.5 10 0.5C7.2425 0.5 5 2.7425 5 5.5V8H4.375C3.34167 8 2.5 8.84083 2.5 9.875V18.625C2.5 19.6592 3.34167 20.5 4.375 20.5H15.625C16.6583 20.5 17.5 19.6592 17.5 18.625V9.875C17.5 8.84083 16.6583 8 15.625 8ZM6.66667 5.5C6.66667 3.66167 8.16167 2.16667 10 2.16667C11.8383 2.16667 13.3333 3.66167 13.3333 5.5V8H6.66667V5.5ZM10.8333 14.435V16.3333C10.8333 16.7933 10.4608 17.1667 10 17.1667C9.53917 17.1667 9.16667 16.7933 9.16667 16.3333V14.435C8.67083 14.1458 8.33333 13.6142 8.33333 13C8.33333 12.0808 9.08083 11.3333 10 11.3333C10.9192 11.3333 11.6667 12.0808 11.6667 13C11.6667 13.6142 11.3292 14.1458 10.8333 14.435Z'
          fill={style ? 'currentColor' : color}
        />
      </g>
      <defs>
        <clipPath id='clip0_2831_1601'>
          <rect width='20' height='20' fill='white' transform='translate(0 0.5)' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LockIcon
