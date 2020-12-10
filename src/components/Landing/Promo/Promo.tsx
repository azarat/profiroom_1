import React from 'react'
import Link from 'next/link'

const Promo = (): JSX.Element => {
  return (
    <div className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <p className="promo__description">Profiroom для бізнесу - біржа фрілансу</p>
          <h1 className="promo__title">
            Найміть фрілансера швидко з будь-якої точки по оптимальній для вас ціні
          </h1>
          <Link href="/catalog">
            <a className="button promo__button">ПЕРЕЙТИ ДО КАТАЛОГУ</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Promo
