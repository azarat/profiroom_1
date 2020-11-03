import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { NextPage } from 'next'
import Link from 'next/link'
import { Carousel, Checkbox } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const Offer: NextPage = (props): JSX.Element => {
  const [checkedList, setCheckedList] = useState<[]>([])

  const groupChange = (checkedList: any) => {
    setCheckedList(checkedList)
  }
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        role="presentation"
        className={className}
        style={{
          ...style,
          color: 'black',
          fontSize: '14px',
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    )
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        role="presentation"
        className={className}
        style={{
          ...style,
          color: 'black',
          fontSize: '14px',
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    )
  }

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <MainLayout categories={props}>
      <div className="offer">
        <div className="container">
          <div className="offer__wrapper">
            <h2 className="offer__title">1C Бугхалтерия</h2>
            <div className="offer__user-info">
              <Link href="/">
                <a className="offer__user-avatar-link">
                  <img className="offer__user-avatar" src="/assets/img/avatar.svg" alt="" />
                </a>
              </Link>
              <div className="offer__user-text">
                <Link href="/">
                  <a className="offer__user-name">Яна Петровская</a>
                </Link>
                <div className="offer__user-starr-wrapper">
                  <span className="offer__user-star"></span>
                </div>

                <span className="offer__user-comments">(1 відгук)</span>
              </div>
              <div className="offer__message-wrapper">
                <Link href="/">
                  <a className="offer__message">
                    <img src="/assets/img/envelope.svg" alt="" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="offer__gallery">
              <Carousel effect="fade" arrows {...settings}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>

            <div className="offer__about about">
              <h4 className="about__title">Опис послуги</h4>
              <div className="about__text">
                <p>Cоздаю:</p>
                {/* descriptiion */}
                <p>
                  test test test test test test test test test test test test test test test test
                  test test test test test test test test test test test test test
                </p>
              </div>
            </div>
            <div className="offer__tabs tabs">
              <div className="tabs__buttons-wrapper">
                <button className="tabs__button">Базовий</button>
                <button className="tabs__button tabs__button--disabled ">Стандарт</button>
                <button className="tabs__button tabs__button--disabled ">Преміум</button>
              </div>
              <div className="tabs__content-wrapper">
                <div className="tabs__content">
                  <div className="tabs__main-info">
                    <div className="tabs__title-wrapper">
                      <h4 className="tabs__title">Логотип</h4>
                      <span className="tabs__price">1000&#8372;</span>
                    </div>
                    <p className="tabs__short-description">Создают логотипы</p>
                  </div>
                  <div className="tabs__changes-term changes-term">
                    <span className="changes-term__correction">1 правок</span>
                    <span className="changes-term__term">222 днів виконання</span>
                  </div>
                  <div className="tabs__extra-options-wrapper">
                    <div className="tabs__extra-options-btn-wrapper">
                      <button className="tabs__extra-options-btn">
                        Вибрати додаткові опціїї
                        <img
                          className="tabs__extra-options-arrow tabs__extra-options-arrow--open"
                          src="/assets/img/arrow-down.svg"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="tabs__extra-options-list">
                      <Checkbox>
                        <p className="tabs__extra-options-item">Стислі терміни</p>
                        <p className="tabs__extra-options-price">
                          <strong>1000&#8372;</strong>
                        </p>
                      </Checkbox>
                      <Checkbox>
                        <p className="tabs__extra-options-item">Комерційне використання</p>
                        <p className="tabs__extra-options-price">
                          <strong>1000&#8372;</strong>
                        </p>
                      </Checkbox>
                      <Checkbox>
                        <p className="tabs__extra-options-item">Додаткові правки</p>
                        <p className="tabs__extra-options-price">
                          <strong>1000&#8372;</strong>
                        </p>
                      </Checkbox>
                    </div>
                    <div className="tabs__extra-option-order-wrapper">
                      <button className="tabs__extra-option-order-btn">
                        Замовити послугу за (2222&#8372;)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="offer__rating rating">
              <div className="offer__rating-wrapper">
                <h4 className="rating__title">Рейтинг послуги test</h4>
                <div className="rating__type">
                  <p className="rating__type-name">Якість послуги</p>
                  <div className="rating__type-numeral">
                    <span className="rating__type-star">0</span>
                  </div>
                </div>
                <div className="rating__type">
                  <p className="rating__type-name">Якість послуги</p>
                  <div className="rating__type-numeral">
                    <span className="rating__type-star">0</span>
                  </div>
                </div>
                <div className="rating__type">
                  <p className="rating__type-name">Якість послуги</p>
                  <div className="rating__type-numeral">
                    <span className="rating__type-star">0</span>
                  </div>
                </div>
                <div className="rating__type-average">
                  <span className="rating__type-average-text">Cередня оцінка</span>
                  <span className="rating__type-average-number">0</span>
                  <span className="rating__type-average-comments">(0 відгуків)</span>
                </div>
              </div>
            </div>

            <div className="offer__question question">
              <h4 className="question__title">Часто задавані питання</h4>
              <div className="qustion__list">
                <div className="question__item">
                  <p className="question__text">За скільки зробите</p>
                  <span className="question__toggler"></span>
                </div>
              </div>
            </div>

            <div className="offer__about-user about-user">
              <h4 className="about-user__title">Про фрілансера</h4>
              <div className="about-user__main-info">
                <Link href="">
                  <a className="about-user__avatar-link">
                    <img className="about-user__avatar" src="/assets/img/avatar.svg" alt="" />
                  </a>
                </Link>
                <p className="about-user__name">Алеша</p>
                <p className="about-user__status">Рівень:Стартовий</p>
                <div className="about-user__rating-wrapper">
                  <p className="about-user__rating"></p>
                  <span className="about-user__comments">(0 відгуків)</span>
                </div>
                <div className="about-user__online-status-wrapper">
                  <span className="about-user__online-status">Оффлайн</span>
                </div>
              </div>
              <div className="about-user__actions">
                <div className="about-user__action">
                  <Link href="/">
                    <a className="offer__message">
                      <img src="/assets/img/envelope.svg" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="about-user__action">
                  <Link href="/">
                    <a className="offer__message">
                      <img src="/assets/img/calendar.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="about-user__sub-info">
                <div className="about-user__country">
                  <p className="about-user__country-title">Країна</p>
                  <p className="about-user__country-name">Мексика</p>
                </div>
                <div className="about-user__term">
                  <p className="about-user__term-title">На сайті з</p>
                  <p className="about-user__term-info">2020-07-08 08:21:15</p>
                </div>
              </div>
            </div>

            <div className="offer__another-offers another-offers">
              <h2 className="another-offers__title">Інші послуги фрілансера</h2>
              <div className="another-offers__list">
                {props.offer.userOffer.user.userOffers.map((card) => (
                  <div className="another-offers__card card" key={card.id}>
                    <div className="card__img-wrapper">
                      <img className="card__img" src={card.mainImage} alt="" />
                    </div>
                    <div className="card__description">
                      <h1
                        role="presentation"
                        className="card__about"
                        // onClick={() => router.push(`/showOffer/${id}`)}
                      >
                        {card.title}
                      </h1>
                      <div className="card__bottom">
                        <div className="card__rating">
                          <div className="card__star-wrapper">
                            <img className="card__star" src="/assets/img/star.svg" alt="star" />
                            <span className="card__star-count">
                              {card.averageRating.averageMark}
                            </span>
                          </div>
                          <span className="card__reviews">({card.comments_count} відгуків)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* {props.offer.userOffer.user.userOffers.map((card) => (
                <OfferCard
                  key={card.id}
                  averageRating={card.averageRating}
                  comments_count={card.comments_count}
                  mainImage={card.mainImage}
                  minPrice={card.minPrice}
                  title={card.title}
                  // user={card.user}
                  id={card.id}
                />
              ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getOfferSideProps as getServerSideProps } from '../../src/utils/service'

export default Offer
