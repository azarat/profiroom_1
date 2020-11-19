import React, { useState } from 'react'
import { NextPage } from 'next'

import MainLayout from '../layouts/MainLayout'
import Link from 'next/link'

//components
import Card from '../src/components/Landing/Card'
import Slider from '../src/components/Landing/Slider'

//images
import PhoneMessageSmall from '../public/app-news-message1.svg'
import PhoneMessageBig from '../public/app-news-message2.svg'

//constants
import {
  cardContent,
  cardContentNext,
  sliderCardContent,
  categories,
  questionMenuData,
} from '../src/constants/landing'

const index: NextPage = (props): JSX.Element => {
  const [client, setClient] = useState<boolean>(true)
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const [activeButton, setActiveButton] = useState<number>()

  const selectRole = (str: string): void => {
    const y = document.querySelectorAll('.how-its-work__card-flipper')
    y.forEach((i) => {
      const t = i as HTMLElement
      if (str === 'client') {
        t.style.transform = 'rotateY(0deg)'
      } else {
        t.style.transform = 'rotateY(180deg)'
      }
    })

    setClient(!client)
    setActiveButton(undefined)
  }

  const nextSlide = (str: string): void => {
    console.log(str)
    if (str === 'right') {
      if (activeSlide < sliderCardContent.length - 1) {
        setActiveSlide(activeSlide + 1)
        setFadeIn(true)
      }
    }

    if (str === 'left') {
      if (activeSlide > 0) {
        setActiveSlide(activeSlide - 1)
        setFadeIn(true)
      }
    }
  }

  const selectActiveButton = (num: number): void => {
    if (activeButton === num) {
      setActiveButton(undefined)
    } else {
      setActiveButton(num)
    }
  }
  return (
    <MainLayout categories={props}>
      <div className="overflow-hidden">
        <div className="wrapper">
          <div className="container">
            <h5 className="wrapper__title">PROFIROOM ДЛЯ БІЗНЕСУ - БІРЖА ФРІЛАНСУ</h5>
            <strong className="wrapper__description">
              Найміть фрілансера швидко з будь-якої точки по оптимальній для вас ціні
            </strong>
            <Link href="/catalog">
              <a className="button wrapper__button">ПЕРЕЙТИ ДО КАТАЛОГУ</a>
            </Link>
          </div>
        </div>
        <div className="main-description">
          <div className="container">
            <div className="main-description__wrapper">
              <div className="main-description__text">
                <p className="main-description__subtitle">ПЕРЕВАГИ</p>
                <strong className="main-description__title">Чому Profiroom?</strong>
                <p className="main-description__description">
                  Біржа фрілансерів допомагає замовнику заощадити час і гроші для свого бізнесу.
                  Адже розробник, дизайнер або копірайтер, творець графіки / аудіо або відео,
                  перекладач або диктор зроблять роботу якісно, швидко і вам не потрібно
                  облаштовувати робоче місце зі сплатою податків і внесків до фондів.
                  <Link href="/login?isRegister=true">
                    <a className="button main-description__button">ЗАРЕЄСТРУВАТИСЯ</a>
                  </Link>
                </p>
              </div>
              <div className="main-description__card-wrapper">
                <div className="main-description__card-container">
                  {cardContent.map(
                    ({ id, image, title, description }): JSX.Element => (
                      <Card
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        description={description}
                      />
                    )
                  )}
                </div>
                <div className="main-description__card-container">
                  {cardContentNext.map(
                    ({ id, image, title, description }): JSX.Element => (
                      <Card
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        description={description}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-its-work">
          <div className="container">
            <div className="how-its-work__wrapper">
              <div className="how-its-work__text">
                <p className="how-its-work__subtitle">ПРАЦЮЙ З ВПЕВНЕНІСТЮ</p>
                <strong className="how-its-work__title">Як це працює?</strong>
                <Slider
                  client={client}
                  activeSlide={activeSlide}
                  selectRole={selectRole}
                  nextSlide={nextSlide}
                  data={sliderCardContent}
                  fadeIn={fadeIn}
                  setFadeIn={setFadeIn}
                />
              </div>
              <div className="how-its-work__desktop">
                {sliderCardContent.map((el) => (
                  <div className="how-its-work__row" key={el.id}>
                    <div className="how-its-work__number-card">
                      <div className="how-its-work__number-card-child">
                        <p>{el.id}</p>
                      </div>
                    </div>
                    <div className="how-its-work__card-container">
                      <div className="how-its-work__card-flipper">
                        <div className="how-its-work__card-front">
                          <img src={el.clientImage} alt="info-card" width="100%" height="100%" />
                        </div>
                        <div className="how-its-work__card-back">
                          <img
                            src={el.freelancerImage}
                            alt="info-card"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="how-its-work__slider-card-content">
                      {client ? el.clientContent : el.freelancerContent}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="main-categories">
          <div className="container">
            <div className="main-categories__wrapper">
              <p className="main-categories__subtitle">КАТЕГОРІЇ РОБІТ</p>
              <strong className="main-categories__title">
                На біржі працюють фрілансери в наступних категоріях
              </strong>
              <div className="main-categories__card-container">
                {categories.map((el) => (
                  <div className="main-categories__card" key={el.id}>
                    <div className="main-categories__card-top">
                      <img src={el.image} alt="info-card" className="main-categories__card-image" />
                      <p className="main-categories__card-title">{el.title}</p>
                    </div>
                    <p className="main-categories__card-description">{el.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="container">
            <div className="questions__wrapper">
              <div className="questions__description-container">
                <p className="questions__subtitle">З&#39;ЯВИЛИСЯ ПИТАННЯ?</p>
                <strong className="questions__title">Поширені запитання</strong>
                <div className="questions__description">
                  {' '}
                  <p>Виберіть необхідну категорію: Замовникам / фрілансерам</p>
                  <br />
                  <p>
                    Якщо ви не знайшли потрібної відповіді, задайте своє питання технічної підтримки
                  </p>
                </div>
              </div>
              <div className="questions__button-block">
                <div className="select-role">
                  <p
                    className={client ? 'slider-title-active slider-title' : 'slider-title'}
                    onClick={() => selectRole('client')}
                    role="presentation"
                  >
                    Для замовника
                  </p>
                  <p
                    className={client ? 'slider-title' : 'slider-title slider-title-active'}
                    onClick={() => selectRole('freelancer')}
                    role="presentation"
                  >
                    Для фрілансера
                  </p>
                </div>
                <div className={client ? 'indicator' : ' indicator indicator-active'}></div>
                <hr className="indicator-bottom" />
                <div>
                  <div className="questions__button-container">
                    {client
                      ? questionMenuData.client.map((el) => (
                          <div
                            role="presentation"
                            onClick={() => selectActiveButton(el.id)}
                            className={`questions__button ${
                              activeButton === el.id && 'questions__open-button'
                            }`}
                            key={el.id}
                          >
                            <div className="questions__button-top">
                              <strong>{el.title}</strong>
                              <div className="questions__button-indicator-container">
                                <div className="questions__button-indicator-one"></div>
                                <div
                                  className={`questions__button-indicator-two ${
                                    activeButton === el.id && 'questions__button-indicator-open'
                                  }`}
                                ></div>
                              </div>
                            </div>
                            <div className="questions__button-content">{el.content}</div>
                          </div>
                        ))
                      : questionMenuData.freelancer.map((el) => (
                          <div
                            role="presentation"
                            onClick={() => selectActiveButton(el.id)}
                            className={`questions__button ${
                              activeButton === el.id && 'questions__open-button'
                            }`}
                            key={el.id}
                          >
                            <div className="questions__button-top">
                              {' '}
                              <strong>{el.title}</strong>
                              <div className="questions__button-indicator-container">
                                <div className="questions__button-indicator-one"></div>
                                <div
                                  className={`questions__button-indicator-two ${
                                    activeButton === el.id && 'questions__button-indicator-open'
                                  }`}
                                ></div>
                              </div>
                            </div>
                            <div className="questions__button-content">{el.content}</div>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-app">
          <div className="container">
            <div className="mobile-app__wrapper">
              <div>
                <p className="mobile-app__subtitle">МОБІЛЬНИЙ ДОДАТОК</p>
                <strong className="mobile-app__title">
                  Зовсім скоро!
                  <br /> Ваш помічник буде завжди під рукою
                </strong>
                <p className="mobile-app__description">
                  З мобільним додатком працювати буде набагато зручніше і швидше. <br />
                  Команда Profiroom повідомить вас про запуск
                </p>
              </div>
              <div className="mobile-app__phone">
                <img
                  src="/phone-screen.png"
                  alt="monile-app"
                  className="mobile-app__phone-screen"
                />
                <div className="mobile-app__phone-button"></div>
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
        <div className="container">
          <div className="get-start">
            <div className="get-start__info">
              <div>
                <strong className="get-start__title">
                  Зареєструватися зараз і вже через 10 хвилин почніть отримувати перші заявки від
                  фрілансерів.
                </strong>
                <p className="get-start__subtitle">Готові почати?</p>
              </div>
              <Link href="/login?isRegister=true">
                <a className="button get-start__button">СТВОРИТИ АКАУНТ</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getStaticProps } from '../src/utils/service'

export default index
