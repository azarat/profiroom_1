import React, { useRef, useState } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'
import { UserOfferTypes } from '../OfferCard/Types'

const Question: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleActiveIndex = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  const questionListref = useRef<HTMLDivElement>(null)
  useOutsideClick(questionListref, () => {
    setActiveIndex(null)
  })

  return (
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
              className={`question__answer ${index === activeIndex && 'question__answer--open '}`}
              dangerouslySetInnerHTML={{ __html: question.answer }}
            ></p>
            <span className="question__toggler"></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
