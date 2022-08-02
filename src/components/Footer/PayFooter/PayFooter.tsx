import styles from './PayFooter.module.scss'
const payList = [
  { src: '/assets/images/visa.png', alt: 'visa', height: 13 },
  { src: '/assets/images/webpay.png', alt: 'webpay', height: 16 },
  {
    src: '/assets/images/verified-by-visa.png',
    alt: 'verified by visa',
    height: 16,
  },
  { src: '/assets/images/mastercard.png', alt: 'mastercard', height: 20 },
  {
    src: '/assets/images/securecode.png',
    alt: 'mastercard secure code',
    height: 16,
  },
  { src: '/assets/images/belcard.png', alt: 'belcard', height: 30 },
]
const PayFooter = () => {
  return (
    <ul className={styles.list}>
      {payList.map((item) => (
        <img
          key={item.alt}
          src={item.src}
          alt={item.alt}
          height={item.height}
        />
      ))}
    </ul>
  )
}

export default PayFooter
