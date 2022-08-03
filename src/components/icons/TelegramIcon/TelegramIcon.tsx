import { FC } from 'react'
import { IIconsProps } from '../@types'

const TelegramIcon: FC<IIconsProps> = ({
  color = 'white',
  width = 18,
  height = 18,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
    >
      <path
        d="M15.0172 3.24657L2.7047 7.99449C1.86442 8.33199 1.86928 8.80074 2.55053 9.00977L5.71164 9.99588L13.0255 5.38129C13.3714 5.17088 13.6873 5.28407 13.4276 5.51463L7.50192 10.8625H7.50053L7.50192 10.8632L7.28386 14.1216C7.60331 14.1216 7.74428 13.975 7.92345 13.8021L9.45886 12.3091L12.6526 14.6681C13.2415 14.9924 13.6644 14.8257 13.8109 14.123L15.9075 4.2424C16.1221 3.38199 15.579 2.9924 15.0172 3.24657V3.24657Z"
        fill={style ? 'currentColor' : color}
      />
    </svg>
  )
}

export default TelegramIcon
