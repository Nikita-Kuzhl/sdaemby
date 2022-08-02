import RightArrowIcon from '../../../../../../components/icons/RightArrowIcon'
import styles from './MapCard.module.scss'

const MapCardS = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <div style={{ width: 100 }} className={styles.header__img}>
            <img src="/assets/images/clients.png" alt="clients" />
          </div>
          <h5 style={{ width: 200 }} className={styles.header__title}>
            Начните привлекать клиентов бесплатно!
          </h5>
        </header>
        <main className={styles.main}>
          Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в
          котором возможно <span>бесплатно создавать и публиковать</span>{' '}
          объявления на сайте.
        </main>
        <footer className={styles.footer}>
          <button className={styles.footer__button}>
            + Разместить объявление
          </button>
        </footer>
      </div>
      <div className={styles.card}>
        <header className={styles.header}>
          <div className={styles.header__img}>
            <img alt="move" src="/assets/images/move.png" />
          </div>
          <h5 style={{ width: 100 }} className={styles.header__title}>
            Поднимайте объявления
          </h5>
        </header>
        <main className={styles.main}>
          Вы в любое время можете <span>поднимать</span> объявления{' '}
          <span>вверх первой страницы</span>
          каталога, они разместятся сразу после платных объявлений до тех пор,
          пока другой пользователь не повторит процедуру.
        </main>
        <footer className={styles.footer}>
          <button className={styles.footer__button}>
            Узнать стоимость услуги{' '}
            <RightArrowIcon color="rgba(36, 36, 36, 1)" />
          </button>
        </footer>
      </div>
      <div className={styles.card}>
        <header className={styles.header__gold}>
          <h5 className={styles.header__title__gold}>Приоритет Gold</h5>
        </header>
        <main className={styles.main}>
          Приоритетное размещение <span>Gold</span> позволяет{' '}
          <span>закрепить ваше объявление</span> в верхней части каталога!
          <p>
            Gold объявления <span>перемещаются каждые 5 мин</span> на 1 позицию,
            что делает размещение одинаковым для всех.
          </p>
          <img
            src="/assets/images/stars.svg"
            alt="start"
            className={styles.stars}
          />
        </main>
        <footer className={styles.footer}>
          <button className={styles.button__gold}>
            Еще о тарифе Gold <RightArrowIcon color="white" />
          </button>
        </footer>
        <img
          src="/assets/images/card_bg.svg"
          alt="card_bg"
          className={styles.card_bg}
        />
      </div>
    </section>
  )
}

export default MapCardS
