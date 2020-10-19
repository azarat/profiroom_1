import React, { TouchEventHandler, useState } from 'react'

import Image from '../../assets/svg/shevron-blue.inline.svg'

import { SliderProps } from './Types'

export default function Slider({
  client,
  selectRole,
  activeSlide,
  nextSlide,
  data,
  fadeIn,
  setFadeIn,
}: SliderProps): JSX.Element {
  const [startTouchPosition, setStartTouchPosition] = useState<number>(0)
  const [endTouchPosition, setEndTouchPosition] = useState<number>(0)

  const touchMove: TouchEventHandler = (event: React.TouchEvent): void => {
    setEndTouchPosition(event.touches[0].clientX)
  }

  const touchStart: TouchEventHandler = (event: React.TouchEvent): void => {
    setStartTouchPosition(event.touches[0].clientX)
  }

  const touchEnd: TouchEventHandler = (event: React.TouchEvent): void => {
    if (startTouchPosition > endTouchPosition) {
      nextSlide('right')
    } else if (startTouchPosition < endTouchPosition) {
      nextSlide('left')
    }
    setStartTouchPosition(0)
  }

  const endAnimation = (): void => {
    setFadeIn(false)
  }

  return (
    <div className="how-its-work__test">
      {' '}
      <div className="how-its-work__select-role">
        <p
          className={
            client
              ? 'how-its-work__slider-title-active how-its-work__slider-title'
              : 'how-its-work__slider-title'
          }
          onClick={() => selectRole('client')}
          role="presentation"
        >
          Для замовника
        </p>
        <p
          className={
            client
              ? 'how-its-work__slider-title'
              : 'how-its-work__slider-title how-its-work__slider-title-active'
          }
          onClick={() => selectRole('freelancer')}
          role="presentation"
        >
          Для фрілансера
        </p>
      </div>
      <div
        className={
          client
            ? 'how-its-work__indicator'
            : ' how-its-work__indicator how-its-work__indicator-active'
        }
      ></div>
      <hr className="how-its-work__indicator-bottom" />
      {client ? (
        <div>
          <p>
            Виберіть категорію послуг вашого проекту. Потім визначтеся з фрілансером виходячи з
            портфоліо, відгуків, рейтингу.
          </p>
          <br />
          <p> Ці 4 простих правила допоможуть вам знайти найкращого для себе виконавця</p>
        </div>
      ) : (
        <div>
          <p>
            Фахівцю вигідно презентувати свої послуги на біржі, отримуючи нові замовлення від
            клієнтів. Онлайн платформа дозволяє працювати вам з будь-якого місця без будильників,
            начальників і понеділків.
          </p>
          <br />
          <p>
            Для успішної роботи на біржі фрілансу, створіть продающий профіль, заповніть портфоліо і
            отримуйте хороші відгуки за вдало виконані проекти. Чим більше проектів ви здаєте - тим
            вищі шанси, що нові замовники замовлять саме ваші послуги. Ось 4 простих правила
            успішної роботи для фрілансера
          </p>
        </div>
      )}
      <div className="how-its-work__main-mobile">
        <div className="how-its-work__number-card">
          <div className="how-its-work__number-card-child">
            <p>{data[activeSlide].id}</p>
          </div>
        </div>
        <div
          className={fadeIn ? 'fade how-its-work__card-container' : 'how-its-work__card-container'}
          onTouchMove={(e) => touchMove(e)}
          onTouchEnd={(e) => touchEnd(e)}
          onTouchStart={(e) => touchStart(e)}
          onAnimationEnd={endAnimation}
        >
          <div className="how-its-work__card-flipper">
            <div className="how-its-work__card-front">
              <img src={data[activeSlide].clientImage} width="100%" height="100%" />
            </div>
            <div className="how-its-work__card-back">
              <img src={data[activeSlide].freelancerImage} width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div
          className={
            fadeIn ? 'fade how-its-work__slider-card-content' : 'how-its-work__slider-card-content'
          }
          onAnimationEnd={endAnimation}
        >
          <p>{client ? data[activeSlide].clientContent : data[activeSlide].freelancerContent}</p>
        </div>
        <div className="how-its-work__slider-button-container">
          <div className="how-its-work__slider-button" onClick={() => nextSlide('left')}>
            <Image
              className={
                activeSlide <= 0
                  ? 'how-its-work__slider-button-left how-its-work__slider-button-disable'
                  : 'how-its-work__slider-button-left'
              }
            />
          </div>
          <div className="how-its-work__slider-button" onClick={() => nextSlide('right')}>
            <Image
              className={
                activeSlide >= data.length - 1
                  ? 'how-its-work__slider-button-right how-its-work__slider-button-disable'
                  : 'how-its-work__slider-button-right'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
