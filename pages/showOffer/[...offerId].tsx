import React, { useState, useRef, RefObject, useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { NextPage } from 'next'
import Link from 'next/link'
import { Carousel, Checkbox } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import useOutsideClick from '../../src/hooks/useOutsideClick'
import { useRouter } from 'next/router'

const Offer: NextPage = (props): JSX.Element => {
  const {
    offer: { userOffer },
  } = props

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isExtraOpen, setExtraOpen] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(userOffer.basic.price)
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  let slider2 = []
  let slider1 = []

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const router = useRouter()

  const handleActiveIndex = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  const extraCommercialRef = useRef<HTMLParagraphElement>(null)
  const extraTermRef = useRef<HTMLParagraphElement>(null)
  const extraChangesRef = useRef<HTMLParagraphElement>(null)

  const handleExtraOptions = (
    event: React.ChangeEvent<HTMLInputElement>,
    ref: RefObject<HTMLElement>
  ) => {
    let newPrice = totalPrice
    if (event.target.checked) {
      newPrice += Number(ref.current?.innerText)
    } else {
      newPrice -= Number(ref.current?.innerText)
    }

    console.log(newPrice)
    setTotalPrice(newPrice)
    console.log(event.target.checked)
  }

  const questionListref = useRef<HTMLDivElement>(null)
  useOutsideClick(questionListref, () => {
    setActiveIndex(null)
  })

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
            <h2 className="offer__title">{userOffer.title}</h2>
            <div className="offer__user-info">
              <Link href="/">
                <a className="offer__user-avatar-link">
                  <img className="offer__user-avatar" src={userOffer.user.avatar} alt="" />
                </a>
              </Link>
              <div className="offer__user-text">
                <Link href="/">
                  <a className="offer__user-name">
                    {userOffer.user.name} {userOffer.user.surname}
                  </a>
                </Link>
                <div className="offer__user-starr-wrapper">
                  <span className="offer__user-star"></span>
                </div>

                <span className="offer__user-comments">(1 відгук)</span>
              </div>
              <div className="offer__message-wrapper">
                <Link href="/">
                  <a className="offer__message">
                    <img src="/assets/img/envelope.svg" alt="envelope icon" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="offer__gallery">
              <Carousel
                effect="fade"
                arrows
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (slider1 = slider)}
              >
                {userOffer.files.map((img: string, index: number) => (
                  <div className="offer__gallery-item-wrapper" key={index}>
                    <img
                      className="offer__gallery-img"
                      src={`https://profiroom.com/Backend/public/storage/offerFiles/big/${img}`}
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="offer__sub-gallery">
              <Carousel
                asNavFor={nav1}
                ref={(slider) => (slider2 = slider)}
                slidesToShow={2}
                focusOnSelect={true}
                centerMode
              >
                {userOffer.files.map((img: string, index: number) => (
                  <div className="offer__sub-gallery-item-wrapper" key={index}>
                    <img
                      className="offer__sub-gallery-img"
                      src={`https://profiroom.com/Backend/public/storage/offerFiles/big/${img}`}
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="offer__about about">
              <h4 className="about__title">Опис послуги</h4>
              <div className="about__text">
                <p>{userOffer.description}</p>
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
                      <h4 className="tabs__title">{userOffer.basic.title}</h4>
                      <span className="tabs__price">{userOffer.basic.price}</span>
                    </div>
                    <p className="tabs__short-description">{userOffer.basic.description}</p>
                  </div>
                  <div className="tabs__changes-term changes-term">
                    <span className="changes-term__correction">
                      {userOffer.basic.changes} правок
                    </span>
                    <span className="changes-term__term">
                      {userOffer.basic.term} днів виконання
                    </span>
                  </div>
                  <div className="tabs__extra-options-wrapper">
                    <div className="tabs__extra-options-btn-wrapper">
                      <button
                        className="tabs__extra-options-btn"
                        onClick={() => setExtraOpen((prev) => !prev)}
                      >
                        Вибрати додаткові опціїї
                        <img
                          className={`tabs__extra-options-arrow ${
                            isExtraOpen && 'tabs__extra-options-arrow--open'
                          }`}
                          src="/assets/img/arrow-down.svg"
                          alt=""
                        />
                      </button>
                    </div>
                    <div
                      className={`tabs__extra-options-list ${
                        isExtraOpen && 'tabs__extra-options-list--open'
                      }`}
                    >
                      {userOffer.extra_changes && (
                        <Checkbox onChange={(e) => handleExtraOptions(e, extraChangesRef)}>
                          <p className="tabs__extra-options-item">Додаткові правки</p>
                          <p
                            className="tabs__extra-options-price"
                            id="changes"
                            ref={extraChangesRef}
                          >
                            <strong>{userOffer.extra_changes.price}</strong>
                          </p>
                        </Checkbox>
                      )}

                      {userOffer.extra_commercial && (
                        <Checkbox onChange={(e) => handleExtraOptions(e, extraCommercialRef)}>
                          <p className="tabs__extra-options-item">Комерційне використання</p>
                          <p
                            className="tabs__extra-options-price"
                            id="commercial"
                            ref={extraCommercialRef}
                          >
                            <strong>{userOffer.extra_commercial.price}</strong>
                          </p>
                        </Checkbox>
                      )}
                      {/* {userOffer.extra_features.length >= 1 && (
                        <Checkbox>
                          <p className="tabs__extra-options-item">Додаткові правки</p>
                          <p className="tabs__extra-options-price">
                            <strong>{userOffer.extra_features[0].price}&#8372;</strong>
                          </p>
                        </Checkbox>
                      )} */}
                      {userOffer.extra_terms.length >= 1 && (
                        <Checkbox onChange={(e) => handleExtraOptions(e, extraTermRef)}>
                          <p className="tabs__extra-options-item">Стислі сроки</p>
                          <p className="tabs__extra-options-price" id="terms" ref={extraTermRef}>
                            <strong>{userOffer.extra_terms[0].price}</strong>
                          </p>
                        </Checkbox>
                      )}
                    </div>
                    <div className="tabs__extra-option-order-wrapper">
                      <button className="tabs__extra-option-order-btn">
                        Замовити послугу за ({totalPrice}&#8372;)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="offer__rating rating">
              <div className="offer__rating-wrapper">
                <h4 className="rating__title">Рейтинг послуги {userOffer.title}</h4>
                <div className="rating__type">
                  <p className="rating__type-name">Якість послуги</p>
                  <div className="rating__type-numeral">
                    <span className="rating__type-star">{userOffer.averageRating.qualityMark}</span>
                  </div>
                </div>
                <div className="rating__type">
                  <p className="rating__type-name">Термін виконання</p>
                  <div className="rating__type-numeral">
                    <span className="rating__type-star">{userOffer.averageRating.termMark}</span>
                  </div>
                </div>
                <div className="rating__type">
                  <p className="rating__type-name">Ввічливість фрілансера</p>
                  <div className="rating__type-numeral">
                    <span className="rating__type-star">
                      {userOffer.averageRating.politenessMark}
                    </span>
                  </div>
                </div>
                <div className="rating__type-average">
                  <span className="rating__type-average-text">Cередня оцінка</span>
                  <span className="rating__type-average-number">
                    {userOffer.averageRating.averageMark}
                  </span>
                  <span className="rating__type-average-comments">
                    ({userOffer.comments_count} відгуків)
                  </span>
                </div>
              </div>
            </div>

            <div className="offer__question question">
              <h4 className="question__title">Часто задавані питання</h4>
              <div className="qustion__list" ref={questionListref}>
                {userOffer.offer_faq.map((question, index: number) => (
                  <div
                    role="presentation"
                    className="question__item"
                    key={question.id}
                    onClick={() => handleActiveIndex(index)}
                  >
                    <p className="question__text">{question.question}</p>
                    <p
                      className={`question__answer ${
                        index === activeIndex && 'question__answer--open '
                      }`}
                    >
                      {question.answer}
                    </p>
                    <span className="question__toggler"></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="offer__about-user about-user">
              <h4 className="about-user__title">Про фрілансера</h4>
              <div className="about-user__main-info">
                <Link href="">
                  <a className="about-user__avatar-link">
                    <img className="about-user__avatar" src={userOffer.user.avatar} alt="" />
                  </a>
                </Link>
                <p className="about-user__name">
                  {userOffer.user.name} {userOffer.user.surname}
                </p>
                <p className="about-user__status">Рівень:Стартовий</p>
                <div className="about-user__rating-wrapper">
                  <p className="about-user__rating"></p>
                  <span className="about-user__comments">
                    ({userOffer.comments_count} відгуків)
                  </span>
                </div>
                <div className="about-user__online-status-wrapper">
                  <span className="about-user__online-status">
                    {userOffer.user.status === 'online' ? 'Онлайн' : 'Офлайн'}
                  </span>
                </div>
              </div>
              <div className="about-user__actions">
                <div className="about-user__action">
                  <Link href="/">
                    <a className="offer__message">
                      <img src="/assets/img/envelope.svg" alt="message icon" />
                    </a>
                  </Link>
                </div>
                <div className="about-user__action">
                  <Link href="/">
                    <a className="offer__message">
                      <img src="/assets/img/calendar.svg" alt="calendar icon" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="about-user__sub-info">
                <div className="about-user__country">
                  <p className="about-user__country-title">Країна</p>
                  <p className="about-user__country-name">{userOffer.user.country}</p>
                </div>
                <div className="about-user__term">
                  <p className="about-user__term-title">На сайті з</p>
                  <p className="about-user__term-info">{userOffer.created_at}</p>
                </div>
              </div>
            </div>

            <div className="offer__another-offers another-offers">
              <h2 className="another-offers__title">Інші послуги фрілансера</h2>
              <div className="another-offers__list">
                {userOffer.user.userOffers.map((card) => (
                  <div className="another-offers__card card" key={card.id}>
                    <div className="card__img-wrapper">
                      <img className="card__img" src={card.mainImage} alt="" />
                    </div>
                    <div className="card__description">
                      <h1
                        role="presentation"
                        className="card__about"
                        onClick={() => {
                          document.body.scrollIntoView()
                          router.push(`/showOffer/${card.id}`)
                        }}
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
