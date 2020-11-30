import React from 'react'
import Link from 'next/link'

const GetStart: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <div className="get-start">
        <div className="get-start__info">
          <div>
            <strong className="get-start__title">
              Зареєструватися зараз і вже через 10 хвилин почніть отримувати перші заявки від
              фрілансерів.
            </strong>
            <p className="get-start__subtitle">Готові почати?</p>
          </div>
          <Link href="/login?isRegister=true">
            <a className="button get-start__button">СТВОРИТИ АКАУНТ</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetStart
