import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
// Components
import LoginForm from '../src/components/LoginForm/LoginForm'
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm'
import Header from '../src/components/Header/MainHeader/Header'
import { Button } from 'antd'
// Style

const login: NextPage = (): JSX.Element => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    if (router.query.isRegister) {
      setIsRegistration(true)
    }
  }, [router.query.isRegister])

  const handleRegistration = (): void => {
    setIsRegistration((prev) => !prev)
  }

  const renderData = isRegistration ? (
    <>
      <Header />
      <RegistrationForm registrationHandler={handleRegistration} />
      <div className="login__form-wrapper-btn">
        <Button onClick={handleRegistration} type="primary" className="login__handle-button">
          Маєте аккаунт?
        </Button>
      </div>
    </>
  ) : (
    <>
      <Header />
      <LoginForm />
      <div className="login__form-wrapper-btn">
        <Button type="primary" onClick={handleRegistration} className="login__handle-button">
          Зареєструватись
        </Button>
      </div>
    </>
  )

  return (
    <>
      <div className="login login__mobile">{renderData}</div>

      <div className={`login login__desktop ${isRegistration && 'right-panel-active'}`}>
        <div className="container__form container__signup">
          <RegistrationForm registrationHandler={handleRegistration} />
        </div>

        <div className="container__form container__signin">
          <LoginForm />
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
    </>
  )
}

export { authUser as getServerSideProps } from '../src/utils/auth'

export default login
