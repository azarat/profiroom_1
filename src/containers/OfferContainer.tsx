import React, { useState, useRef, RefObject, useEffect } from 'react'

//antd
import { Checkbox } from 'antd'

//types
import { ExtraListTypes, UserOfferTypes } from '../../src/components/OfferCard/Types'
//components
import Breadcrumb from '../../src/components/Offer/Breadcrump'
import CarouselFull from '../components/Offer/CarouselFull'
import UserInfo from '../components/Offer/UserInfo'
import OfferGallery from '../components/Offer/OfferGallery'
import Compare from '../components/Offer/Compare'
import Rating from '../components/Offer/Rating'
import Question from '../components/Offer/Question'
import AboutUser from '../components/Offer/AboutUser'
import AnotherOffer from '../components/Offer/AnotherOffer'
import Comments from '../components/Offer/Comments/Comments'

const OfferContainer: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  const [isExtraOpen, setExtraOpen] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(userOffer.basic.price)
  const [isAddExtraOpen, setAddExtraOpen] = useState<boolean>(false)
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false)
  const [isFullSizeOpen, SetFullSizeOpen] = useState<boolean>(false)
  const [extraList, setExtraList] = useState<ExtraListTypes[]>([])

  const handleFullCarousel = () => {
    SetFullSizeOpen((prev) => !prev)
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

  const handleExtraOpen = () => {
    setExtraOpen((prev) => !prev)
  }

  return (
    <>
      <div className="offer">
        <Breadcrumb />
        <CarouselFull
          userOffer={userOffer}
          isFullSizeOpen={isFullSizeOpen}
          handleFullCarousel={handleFullCarousel}
        />

        <div className="container">
          <div
            className={`offer__wrapper ${
              isAddExtraOpen || isConfirmOpen ? 'offer__wrapper--extra' : ''
            }`}
          >
            <div className="offer__inner">
              <h2 className="offer__title">{userOffer.title}</h2>
              <UserInfo userOffer={userOffer} />
              <OfferGallery userOffer={userOffer} handleFullCarousel={handleFullCarousel} />
              <div className="offer__about about" id="about">
                <h4 className="about__title">Опис послуги</h4>
                <div className="about__text">
                  <p dangerouslySetInnerHTML={{ __html: userOffer.description }}></p>
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
                        <button className="tabs__extra-options-btn" onClick={handleExtraOpen}>
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
              <Compare userOffer={userOffer} setAddExtraOpen={setAddExtraOpen} />
              <Rating userOffer={userOffer} />
              <Comments userOffer={userOffer} />
              <Question userOffer={userOffer} />
              <AboutUser userOffer={userOffer} />
              <AnotherOffer userOffer={userOffer} />
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
    </>
  )
}

export { getOfferSideProps as getServerSideProps } from '../../src/utils/service'

export default OfferContainer
