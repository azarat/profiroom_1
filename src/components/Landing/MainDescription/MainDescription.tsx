import React from 'react'
import Card from './MainDescriptionCard'
import { cardContent, cardContentNext } from '../../../constants/landing'
import Link from 'next/link'

const MainDescription: React.FC = (): JSX.Element => {
  return (
    <div className="main-description">
      <div className="container">
        <div className="main-description__wrapper">
          <div className="main-description__text">
            <p className="main-description__subtitle">Переваги</p>
            <h2 className="main-description__title">Чому Profiroom?</h2>
            <p className="main-description__description">
              Біржа фрілансерів допомагає замовнику заощадити час і гроші для свого бізнесу. Адже
              розробник, дизайнер або копірайтер, творець графіки / аудіо або відео, перекладач або
              диктор зроблять роботу якісно, швидко і вам не потрібно облаштовувати робоче місце зі
              сплатою податків і внесків до фондів.
              <Link href="/login?isRegister=true">
                <a className="main-description__button">Зареєструватися</a>
              </Link>
            </p>
          </div>
          <div className="main-description__card-wrapper">
            <div className="main-description__card-container">
              {cardContent.map(
                ({ id, image, title, description }): JSX.Element => (
                  <Card key={id} id={id} image={image} title={title} description={description} />
                )
              )}
            </div>
            <div className="main-description__card-container">
              {cardContentNext.map(
                ({ id, image, title, description }): JSX.Element => (
                  <Card key={id} id={id} image={image} title={title} description={description} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDescription
