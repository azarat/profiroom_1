import React from 'react'

//components
import MainDescription from '../components/Landing/MainDescription'
import HowItsWorks from '../components/Landing/HowItsWorks'
import MainCategories from '../components/Landing/MainCategories'
import Questions from '../components/Landing/Questions'
import MobileApp from '../components/Landing/MobileApp'
import GetStart from '../components/Landing/GetStart'
import Promo from '../components/Landing/Promo'

const LandingContainer: React.FC = (): JSX.Element => {
  return (
    <>
      <Promo />
      <MainDescription />
      <HowItsWorks />
      <MainCategories />
      <Questions />
      <MobileApp />
      <GetStart />
    </>
  )
}

export default LandingContainer
