import React from 'react'
import { UserOfferTypes } from '../OfferCard/Types'

const Rating: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  return (
    <div className="offer__rating rating" id="rating">
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
            <span className="rating__type-star">{userOffer.averageRating.politenessMark}</span>
          </div>
        </div>
        <div className="rating__type-average">
          <p className="rating__type-average-text">Cередня оцінка</p>
          <span className="rating__type-average-number">{userOffer.averageRating.averageMark}</span>
          <span className="rating__type-average-comments">
            ({userOffer.comments_count} відгуків)
          </span>
        </div>
      </div>
    </div>
  )
}

export default Rating
