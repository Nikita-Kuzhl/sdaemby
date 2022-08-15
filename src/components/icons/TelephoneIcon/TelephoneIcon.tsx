import { FC } from 'react'
import { IIconsProps } from '../@types'

const TelephoneIcon: FC<IIconsProps> = ({
  color = '#664EF9',
  width = '9',
  height = '16',
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 9 16'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={style}
    >
      <path
        d='M7.18253 0.349609H1.72797C0.787063 0.349609 0.0234375 1.11324 0.0234375 2.05415L0.0234375 13.6451C0.0234375 14.586 0.787063 15.3496 1.72797 15.3496H7.18253C8.12344 15.3496 8.88707 14.586 8.88707 13.6451V2.05415C8.88707 1.11324 8.12344 0.349609 7.18253 0.349609ZM4.45527 14.6678C3.88935 14.6678 3.43254 14.211 3.43254 13.6451C3.43254 13.0792 3.88935 12.6223 4.45527 12.6223C5.02119 12.6223 5.478 13.0792 5.478 13.6451C5.478 14.211 5.02116 14.6678 4.45527 14.6678ZM7.52345 11.9405H1.38709V2.39507H7.52345V11.9405Z'
        fill={color}
      />
    </svg>
  )
}

export default TelephoneIcon
