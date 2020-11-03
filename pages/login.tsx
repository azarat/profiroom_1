import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
// Components
import LoginForm from '../src/components/LoginForm/LoginForm'
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm'
import Header from '../src/components/Header/MainHeader/Header'
import { useRouter } from 'next/router'
// Style

const login: NextPage = (): JSX.Element => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false)
  const [mobile, setMobile] = useState<boolean>(false)

  const windowWidth = typeof window !== 'undefined' && window.innerWidth

  const router = useRouter()

  useEffect(() => {
    if (windowWidth > 767) {
      setMobile(true)
    }
  }, [windowWidth])

  useEffect(() => {
    if (router.query.isRegister) {
      setIsRegistration(true)
    }
  }, [router.query.isRegister])

  const handleRegistration = (): void => {
    setIsRegistration((prev) => !prev)
  }

  const renderData = isRegistration ? (
    <RegistrationForm registrationHandler={handleRegistration} />
  ) : (
    <LoginForm registrationHandler={handleRegistration} />
  )

  return (
    <>
      {!mobile && <div className="login">{renderData}</div>}
      {mobile && (
        <div className={`login ${isRegistration && 'right-panel-active'}`}>
          <div className="container__form container__signup">
            <RegistrationForm registrationHandler={handleRegistration} />
          </div>

          <div className="container__form container__signin">
            <LoginForm registrationHandler={handleRegistration} />
          </div>

          <Header />
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
    </>
  )
}

export { getStaticProps } from '../src/utils/service'

export default login
