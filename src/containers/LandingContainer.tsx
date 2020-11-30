import React from 'react'
import Link from 'next/link'

//components
import MainDescription from '../components/Landing/MainDescription'
import HowItsWorks from '../components/Landing/HowItsWorks'
import MainCategories from '../components/Landing/MainCategories'
import Questions from '../components/Landing/Questions'
import MobileApp from '../components/Landing/MobileApp'
import GetStart from '../components/Landing/GetStart'

const LandingContainer: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <div className="promo">
          <h5 className="promo__title">PROFIROOM ДЛЯ БІЗНЕСУ - БІРЖА ФРІЛАНСУ</h5>
          <strong className="promo__description">
            Найміть фрілансера швидко з будь-якої точки по оптимальній для вас ціні
          </strong>
          <Link href="/catalog">
            <a className="button promo__button">ПЕРЕЙТИ ДО КАТАЛОГУ</a>
          </Link>
        </div>
      </div>
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
