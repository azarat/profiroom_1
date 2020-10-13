import React, { useState } from 'react'
import { NextPage } from 'next'
// MainLayout
import MainLayout from '../layouts/MainLayout'
// Components
import LoginForm from '../src/components/LoginForm/LoginForm'
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm'
// Style

const login: NextPage = (): JSX.Element => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false)

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
      <div className="login">{renderData}</div>
    </MainLayout>
  )
}

export default login
