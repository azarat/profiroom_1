import React from 'react'
//svg
import PhoneMessageSmall from '../../../../public/app-news-message1.svg'
import PhoneMessageBig from '../../../../public/app-news-message2.svg'

const MobileApp: React.FC = (): JSX.Element => {
  return (
    <div className="mobile-app">
      <div className="container">
        <div className="mobile-app__wrapper">
          <div>
            <h3 className="mobile-app__subtitle">Мобільний додаток</h3>
            <h2 className="mobile-app__title">Зовсім скоро!</h2>
            <h2 className="mobile-app__title">Ваш помічник буде завжди під рукою</h2>
            <p className="mobile-app__description">
              З мобільним додатком працювати буде набагато зручніше і швидше. Команда Profiroom
              повідомить вас про запуск
            </p>
          </div>
          <div className="mobile-app__phone">
            <img src="/phone-screen.png" alt="mobile-app" className="mobile-app__phone-screen" />
            <div className="mobile-app__phone-button" />
            <div className="mobile-app__phone-message-small">
              <PhoneMessageSmall width="100%" height="100%" />
            </div>
            <div className="mobile-app__phone-message-big">
              <PhoneMessageBig width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp
