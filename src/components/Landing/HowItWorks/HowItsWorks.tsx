import React, { useState } from 'react'
import Slider from './HowItWorksSlider'

import { sliderCardContent } from '../../../constants/landing'

const HowItsWorks: React.FC = (): JSX.Element => {
  const [client, setClient] = useState<boolean>(true)
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [fadeIn, setFadeIn] = useState<boolean>(false)

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

    setClient((prev) => !prev)
  }

  const nextSlide = (str: string): void => {
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

  return (
    <div className="how-its-work">
      <div className="container">
        <div className="how-its-work__wrapper">
          <div className="how-its-work__text">
            <h3 className="how-its-work__subtitle">Працюй з впевненістю</h3>
            <h2 className="how-its-work__title">Як це працює?</h2>
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
                      <img src={el.freelancerImage} alt="info-card" width="100%" height="100%" />
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
  )
}

export default HowItsWorks
