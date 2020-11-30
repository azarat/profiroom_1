import React, { useState } from 'react'
//constants
import { questionMenuData } from '../../../constants/landing'

const Questions: React.FC = (): JSX.Element => {
  const [client, setClient] = useState<boolean>(true)
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

  const selectActiveButton = (num: number): void => {
    if (activeButton === num) {
      setActiveButton(undefined)
    } else {
      setActiveButton(num)
    }
  }

  return (
    <div className="questions">
      <div className="container">
        <div className="questions__wrapper">
          <div className="questions__description-container">
            <h3 className="questions__subtitle">З&#39;явилися питання?</h3>
            <h2 className="questions__title">Поширені запитання</h2>
            <div className="questions__description">
              <p>Виберіть необхідну категорію: Замовникам / фрілансерам</p>
              <br />
              <p>
                Якщо ви не знайшли потрібної відповіді, задайте своє питання технічної підтримки
              </p>
            </div>
          </div>
          <div className="questions__button-block">
            <div className="slider__select-role">
              <p
                className={client ? 'slider__title-active slider__title' : 'slider__title'}
                onClick={() => selectRole('client')}
                role="presentation"
              >
                Для замовника
              </p>
              <p
                className={client ? 'slider__title' : 'slider__title slider__title-active'}
                onClick={() => selectRole('freelancer')}
                role="presentation"
              >
                Для фрілансера
              </p>
            </div>
            <div
              className={
                client ? 'slider__indicator' : 'slider__indicator slider__indicator-active'
              }
            ></div>
            <hr className="slider__indicator-bottom" />
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
  )
}

export default Questions
