import React from 'react'

// Components
import {
  MainDescription,
  HowItWorks,
  MainCategories,
  Questions,
  MobileApp,
  GetStart,
  Promo,
} from '../components/Landing'

const LandingContainer: React.FC = (): JSX.Element => {
  return (
    <>
      <Promo />
      <MainDescription />
      <HowItWorks />
      <MainCategories />
      <Questions />
      <MobileApp />
      <GetStart />
    </>
  )
}

export default LandingContainer
