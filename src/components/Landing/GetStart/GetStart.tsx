import React from 'react'
import Link from 'next/link'

const GetStart: React.FC = (): JSX.Element => {
  return (
    <div className="get-start">
      <div className="container">
        <div className="get-start__wrapper">
          <div>
            <h3 className="get-start__title">
              Зареєструватися зараз і вже через 10 хвилин почніть отримувати перші заявки від
              фрілансерів.
            </h3>
            <h3 className="get-start__subtitle">Готові почати?</h3>
          </div>
          <Link href="/login?isRegister=true">
            <a className="get-start__button">створити аккаунт</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetStart
