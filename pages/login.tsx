import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
// MainLayout
import MainLayout from '../layouts/MainLayout'
// Components
import LoginForm from '../src/components/LoginForm/LoginForm'
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm'
// Style

const login: NextPage = (): JSX.Element => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false)
  const [mobile, setMobile] = useState<boolean>(false)

  useEffect(() => {
    if (window.innerWidth > 767) {
      setMobile(true)
    }
  })

  const handleRegistration = (): void => {
    setIsRegistration((prev) => !prev)
  }

  const renderData = isRegistration ? (
    <RegistrationForm registrationHandler={handleRegistration} />
  ) : (
    <LoginForm registrationHandler={handleRegistration} />
  )

  return (
    <MainLayout>
      {!mobile && <div className="login">{renderData}</div>}
      {mobile && (
        <div className={`login ${isRegistration && 'right-panel-active'}`}>
          <div className="container__form container__signup">
            <RegistrationForm registrationHandler={handleRegistration} />
          </div>

          <div className="container__form container__signin">
            <LoginForm registrationHandler={handleRegistration} />
          </div>

          <div className="container__overlay">
            <div className="login__overlay">
              <div className="overlay__panel overlay__left">
                <h2 className="overlay__panel-title">Уже заходили?</h2>
                <p className="overlay__panel-description">
                  Будемо раді бачити вас знову на кращій платформі фрілансу Profiroom
                </p>
                <button onClick={handleRegistration} className="login__btn">
                  Увійти
                </button>
              </div>
              <div className="overlay__panel overlay__right">
                <h2 className="overlay__panel-title">Вперше на сайті?</h2>
                <p className="overlay__panel-description">
                  Ласкаво просимо на кращу платформу фрілансу Profiroom!
                </p>
                <button onClick={handleRegistration} className="login__btn">
                  Зареєструватись
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
}

export default login
