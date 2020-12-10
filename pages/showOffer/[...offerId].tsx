import React, { useState, useRef, RefObject, useEffect } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
//layout
import MainLayout from '../../layouts/MainLayout'
//antd
import { Checkbox } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
//hooks
import useOutsideClick from '../../src/hooks/useOutsideClick'
//types
import { ExtraListTypes, OfferTypes } from '../../src/components/OfferCard/Types'
//components
import Carousel from '../../src/components/Carousel/Carousel'

const Offer: NextPage<OfferTypes> = (props): JSX.Element => {
  const {
    offer: { userOffer },
  } = props

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isExtraOpen, setExtraOpen] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(userOffer.basic.price)
  const [isAddExtraOpen, setAddExtraOpen] = useState<boolean>(false)
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false)
  const [isFullSizeOpen, SetFullSizeOpen] = useState<boolean>(false)
  const [extraList, setExtraList] = useState<ExtraListTypes[]>([])

  const router = useRouter()

  const handleActiveIndex = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  useEffect(() => {
    document.body.scrollIntoView()
  }, [])

  const extraCommercialRef = useRef<HTMLParagraphElement>(null)
  const extraCommercialTextRef = useRef<HTMLParagraphElement>(null)
  const extraTermRef = useRef<HTMLParagraphElement>(null)
  const extraTermTextRef = useRef<HTMLParagraphElement>(null)
  const extraChangesRef = useRef<HTMLParagraphElement>(null)
  const extraChangesTextRef = useRef<HTMLParagraphElement>(null)

  const handleExtraOptions = (
    event: any,
    ref: RefObject<HTMLElement>,
    textRef: RefObject<HTMLElement>
  ) => {
    let newPrice = totalPrice
    const newExtra = extraList
    if (event.target.checked) {
      newPrice += Number(ref.current?.innerText)
      newExtra.push({ name: textRef.current!.innerText, price: Number(ref.current?.innerText) })
    } else {
      newPrice -= Number(ref.current?.innerText)
      newExtra.splice(
        newExtra.findIndex(({ name }) => name === textRef.current?.innerText),
        1
      )
    }
    setExtraList(newExtra)
    setTotalPrice(newPrice)
  }

  const questionListref = useRef<HTMLDivElement>(null)
  useOutsideClick(questionListref, () => {
    setActiveIndex(null)
  })

  return (
    <MainLayout categories={props}>
      <div className="offer">
        <nav className="offer__nav">
          <ul className="nav">
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                Портфоліо
              </a>
            </li>
            <li className="nav__item">
              <a href="#compare" className="nav__link">
                Пакети і послуги
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Опис
              </a>
            </li>
            <li className="nav__item">
              <a href="#rating" className="nav__link">
                Рейтинг
              </a>
            </li>
            <li className="nav__item">
              <a href="#comments" className="nav__link">
                Відгуки
              </a>
            </li>
            <li className="nav__item">
              <a href="#faq" className="nav__link">
                Питання та відповіді
              </a>
            </li>
            <li className="nav__item">
              <a href="#about-freelancer" className="nav__link">
                Про фрілансера
              </a>
            </li>
          </ul>
        </nav>
        <div className={`offer__fullsize ${isFullSizeOpen ? 'offer__fullsize--open' : ''}`}>
          <div className="offer__fullsize-wrapper">
            <div
              className="offer__fullsize-close-icon"
              role="presentation"
              onClick={() => SetFullSizeOpen(false)}
            ></div>
            <Carousel
              buttonNext={<RightOutlined />}
              buttonPrev={<LeftOutlined />}
              files={userOffer.files}
              open={isFullSizeOpen}
            >
              {userOffer.files.map((img: string, index: number) => (
                <div className="offer__gallery-item-wrapper--full" key={index}>
                  <img
                    className="offer__gallery-img--full"
                    src={`https://profiroom.com/Backend/public/storage/offerFiles/big/${img}`}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="container">
          <div
            className={`offer__wrapper ${
              isAddExtraOpen || isConfirmOpen ? 'offer__wrapper--extra' : ''
            }`}
          >
            <div className="offer__inner">
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
              <div className="offer__gallery" id="portfolio">
                <div
                  role="presentation"
                  className="offer__fullsize-icon-wrapper"
                  onClick={() => SetFullSizeOpen(true)}
                >
                  <img src="/svg/full-size.svg" alt="" />
                </div>
                <Carousel
                  buttonNext={<RightOutlined />}
                  buttonPrev={<LeftOutlined />}
                  files={userOffer.files}
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

              <div className="offer__about about" id="about">
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
                          <Checkbox
                            onChange={(e) =>
                              handleExtraOptions(e, extraChangesRef, extraChangesTextRef)
                            }
                          >
                            <p
                              className="tabs__extra-options-item"
                              id="extrachanges"
                              ref={extraChangesTextRef}
                            >
                              Додаткові правки
                            </p>
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
                          <Checkbox
                            onChange={(e) =>
                              handleExtraOptions(e, extraCommercialRef, extraCommercialTextRef)
                            }
                          >
                            <p
                              className="tabs__extra-options-item"
                              id="extracommercial"
                              ref={extraCommercialTextRef}
                            >
                              Комерційне використання
                            </p>
                            <p
                              className="tabs__extra-options-price"
                              id="commercial"
                              ref={extraCommercialRef}
                            >
                              <strong>{userOffer.extra_commercial.price}</strong>
                            </p>
                          </Checkbox>
                        )}
                        {userOffer.extra_terms.length >= 1 && (
                          <Checkbox
                            onChange={(e) => handleExtraOptions(e, extraTermRef, extraTermTextRef)}
                          >
                            <p
                              className="tabs__extra-options-item"
                              id="extraterms"
                              ref={extraTermTextRef}
                            >
                              Стислі сроки
                            </p>
                            <p className="tabs__extra-options-price" id="terms" ref={extraTermRef}>
                              <strong>{userOffer.extra_terms[0].price}</strong>
                            </p>
                          </Checkbox>
                        )}
                      </div>
                      <div className="tabs__extra-option-order-wrapper">
                        <button
                          className="tabs__extra-option-order-btn"
                          onClick={() => setAddExtraOpen(true)}
                        >
                          Замовити послугу за ({totalPrice}&#8372;)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offer__compare compare" id="compare">
                <h4 className="compare__title"> Порівняйте і виберіть варіант пакету послуг </h4>
                <div className="compare__wrapper">
                  <div className="compare__table-title">
                    <div className="compare__table-cell"></div>
                    <div className="compare__table-cell">Базовий</div>
                  </div>
                  <div className="compare__table-item">
                    <div className="compare__item-cell">Назва послуги</div>
                    <div className="compare__item-cell">Тест</div>
                  </div>
                  <div className="compare__table-item">
                    <div className="compare__item-cell">Короткий опис</div>
                    <div className="compare__item-cell">Херня</div>
                  </div>
                  <div className="compare__table-item">
                    <div className="compare__item-cell ">Термін виконання</div>
                    <div className="compare__item-cell compare__item-cell--center">222</div>
                  </div>
                  <div className="compare__table-item">
                    <div className="compare__item-cell ">Кількість правок</div>
                    <div className="compare__item-cell compare__item-cell--center">2</div>
                  </div>
                  <div className="compare__table-item">
                    <div className="compare__item-cell">Ціна</div>
                    <div className="compare__item-cell compare__item-cell--center">
                      2222&#8372;
                      <div className="compare__item-cell-btn">вибрати</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offer__rating rating" id="rating">
                <div className="offer__rating-wrapper">
                  <h4 className="rating__title">Рейтинг послуги {userOffer.title}</h4>
                  <div className="rating__type">
                    <p className="rating__type-name">Якість послуги</p>
                    <div className="rating__type-numeral">
                      <span className="rating__type-star">
                        {userOffer.averageRating.qualityMark}
                      </span>
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
                    <p className="rating__type-average-text">Cередня оцінка</p>
                    <span className="rating__type-average-number">
                      {userOffer.averageRating.averageMark}
                    </span>
                    <span className="rating__type-average-comments">
                      ({userOffer.comments_count} відгуків)
                    </span>
                  </div>
                </div>
              </div>

              <div className="offer__question question" id="faq">
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

              <div className="offer__about-user about-user" id="about-freelancer">
                <h4 className="about-user__title">Про фрілансера</h4>
                <div className="about-user__main-info">
                  <div className="about-user__avatar-link-wrapper">
                    <Link href="">
                      <a className="about-user__avatar-link">
                        <img className="about-user__avatar" src={userOffer.user.avatar} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="about-user__main-info-inner">
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
                        {userOffer.user.online ? 'Онлайн' : 'Офлайн'}
                      </span>
                    </div>
                  </div>
                  <div className="about-user__actions">
                    <div className="about-user__action">
                      <Link href="/">
                        <a className="offer__message">
                          <img src="/assets/img/shape.svg" alt="shape icon" />
                        </a>
                      </Link>
                    </div>
                    <div className="about-user__action">
                      <Link href="/">
                        <a className="offer__message">
                          <img src="/assets/img/envelope.svg" alt="calendar icon" />
                        </a>
                      </Link>
                    </div>
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
                <h2 className="another-offers__title">
                  Інші послуги фрілансера
                  <span className="another-offers__sub-title">
                    (3 з{' '}
                    {userOffer.user.userOffers !== undefined && userOffer.user.userOffers.length})
                  </span>
                </h2>
                <div className="another-offers__list">
                  {userOffer.user.userOffers !== undefined &&
                    userOffer.user.userOffers.map((card) => (
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
                              <span className="card__reviews">
                                ({card.comments_count} відгуків)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <Link href="/">
                  <a className="another-offers__profile-link">більше послуг в профілі</a>
                </Link>
              </div>
            </div>
            <div className="offer__running-block">
              <div className="offer__tabs tabs tabs--desktop">
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
                          <Checkbox
                            onChange={(e) =>
                              handleExtraOptions(e, extraChangesRef, extraChangesTextRef)
                            }
                          >
                            <p
                              className="tabs__extra-options-item"
                              id="extrachanges"
                              ref={extraChangesTextRef}
                            >
                              Додаткові правки
                            </p>
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
                          <Checkbox
                            onChange={(e) =>
                              handleExtraOptions(e, extraCommercialRef, extraCommercialTextRef)
                            }
                          >
                            <p
                              className="tabs__extra-options-item"
                              id="extracommercial"
                              ref={extraCommercialTextRef}
                            >
                              Комерційне використання
                            </p>
                            <p
                              className="tabs__extra-options-price"
                              id="commercial"
                              ref={extraCommercialRef}
                            >
                              <strong>{userOffer.extra_commercial.price}</strong>
                            </p>
                          </Checkbox>
                        )}
                        {userOffer.extra_terms.length >= 1 && (
                          <Checkbox
                            onChange={(e) => handleExtraOptions(e, extraTermRef, extraTermTextRef)}
                          >
                            <p
                              className="tabs__extra-options-item"
                              id="extraterms"
                              ref={extraTermTextRef}
                            >
                              Стислі сроки
                            </p>
                            <p className="tabs__extra-options-price" id="terms" ref={extraTermRef}>
                              <strong>{userOffer.extra_terms[0].price}</strong>
                            </p>
                          </Checkbox>
                        )}
                      </div>
                      <div className="tabs__extra-option-order-wrapper">
                        <button
                          className="tabs__extra-option-order-btn"
                          onClick={() => setAddExtraOpen(true)}
                        >
                          Замовити послугу за ({totalPrice}&#8372;)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`offer__add-block add-block ${isAddExtraOpen ? 'add-block--active' : ''}`}
          >
            <div className="add-block__wrapper">
              <h3 className="add-block__title">
                {extraList.length > 0
                  ? 'Ви обрали додаткові опції:'
                  : 'Ви не обрали додаткових опцій'}
              </h3>
              {/* <h4 className="add-block__subtitle">{userOffer.title}</h4> */}
              <div className="add-block__extra">
                <ul>
                  {extraList.map((extra, index) => (
                    <li key={index}>{extra.name}</li>
                  ))}
                </ul>
              </div>
              <div className="add-block__add-btn-wrapper">
                <button
                  className="add-block__add-btn"
                  onClick={() => {
                    setAddExtraOpen(false), setConfirmOpen(true)
                  }}
                >
                  до замовлення
                </button>
              </div>
              <div className="add-block__back-btn-wrapper">
                <button className="add-block__back-btn" onClick={() => setAddExtraOpen(false)}>
                  назад до послуги
                </button>
              </div>
            </div>
          </div>
          <div
            className={`offer__confirm-block confirm-block ${
              isConfirmOpen ? 'confirm-block--open' : ''
            }`}
          >
            <div className="confirm-block__top-info">
              <p className="confirm-block__type">Базовий</p>
              <p className="confirm-block__base-price">{userOffer.basic.price}</p>
            </div>
            <span className="confirm-block__price-no-features">
              Загальна вартість (без доп. Опцій)
            </span>
            <div className="confirm-block__features">
              <span className="confirm-block__correction">{userOffer.basic.changes} правок</span>
              <span className="confirm-block__term">{userOffer.basic.term} днів виконання</span>
            </div>
            <div className="confirm-block__extra">
              {extraList.length > 0 ? (
                <>
                  <h4 className="confirm-block__extra-title">Додаткові опції</h4>
                  {extraList.map((extra, index) => (
                    <div key={index} className="confirm-block__extra-item">
                      <p>{extra.name}</p>
                      <p>
                        {extra.price} <strong>UAH</strong>
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <h4 className="confirm-block__extra-title">Послуга без додаткових опцій</h4>
              )}
            </div>
            <div className="confirm-block__сommission">
              <p>Комісія за сервіс</p>
              <p>
                <strong>0 UAH</strong>
              </p>
            </div>
            <div className="confirm-block__final-price">
              <p className="confirm-block__price-text">кінцева вартість</p>
              <p>
                <strong>{totalPrice}</strong>
              </p>
            </div>
            <div className="confirm-block__btn-wrapper">
              <button className="confirm-block__confirm-btn">підтвердити замовлення</button>
              <button
                className="confirm-block__btn-back"
                onClick={() => {
                  setAddExtraOpen(true), setConfirmOpen(false)
                }}
              >
                назад
              </button>
            </div>

            <span className="confirm-block__bottom-text">
              * Підтвердження замовлення не є його оплатою.
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getOfferSideProps as getServerSideProps } from '../../src/utils/service'

export default Offer
