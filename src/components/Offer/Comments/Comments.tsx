import React, { useState } from 'react'
import ArrowSVG from '../../../../public/assets/img/arrow-down.svg'
import { UserOfferTypes } from '../../OfferCard/Types'
import CommentsList from './CommentsList'

const Comments: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  const [commentsType, setCommentsType] = useState('positive')

  return (
    <>
      <div className="offer__comments comments">
        <div className="comments__wrapper">
          <h5 className="comments__title">
            Рейтинг і відгуки (
            {userOffer.negative_comments_count + userOffer.positive_comments_count})
          </h5>
          <div className="comments__tabs">
            <div
              role="presentation"
              onClick={() => setCommentsType('positive')}
              className={`comments__btn ${
                commentsType === 'positive' ? 'comments__btn--active' : ''
              }`}
            >
              позитивні ({userOffer.positive_comments_count})
              <div
                className={`comments__arrow-wrapper   ${
                  commentsType === 'positive' ? 'comments__arrow-wrapper--active' : ''
                }`}
              >
                <ArrowSVG
                  className={`comments__arrow ${
                    commentsType === 'positive' ? 'comments__arrow--active' : ''
                  }`}
                />
              </div>
            </div>
            <div
              role="presentation"
              onClick={() => setCommentsType('negative')}
              className={`comments__btn ${
                commentsType === 'negative' ? 'comments__btn--active' : ''
              }`}
            >
              негативні ({userOffer.negative_comments_count})
              <div
                className={`comments__arrow-wrapper   ${
                  commentsType === 'negative' ? 'comments__arrow-wrapper--active' : ''
                }`}
              >
                <ArrowSVG
                  className={`comments__arrow ${
                    commentsType === 'negative' ? 'comments__arrow--active' : ''
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <CommentsList
          comments={
            commentsType === 'positive' ? userOffer.positiveComments : userOffer.negativeComments
          }
        />
      </div>
    </>
  )
}

export default Comments
