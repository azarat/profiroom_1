import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { UserOfferTypes } from '../OfferCard/Types'

const AnotherOffer: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  const router = useRouter()

  console.log(userOffer)

  return (
    <div className="offer__another-offers another-offers">
      <h2 className="another-offers__title">
        Інші послуги фрілансера
        <span className="another-offers__sub-title">
          {userOffer.user.userOffers!.length < 3 && userOffer.user.userOffers !== undefined
            ? `(${userOffer.user.userOffers!.length})`
            : `(3 з ${userOffer.user.userOffers!.length})`}
        </span>
      </h2>
      <div className="another-offers__list">
        {userOffer.user.userOffers !== undefined &&
          userOffer.user.userOffers.map((card) => (
            <div
              className="another-offers__card card"
              key={card.id}
              role="presentation"
              onClick={() => {
                document.body.scrollIntoView()
                router.push(`/showOffer/${card.id}`)
              }}
            >
              <div className="card__img-wrapper">
                <img className="card__img" src={card.mainImage} alt="" />
              </div>
              <div className="card__description">
                <h1 role="presentation" className="card__about">
                  {card.title}
                </h1>
                <div className="card__bottom">
                  <div className="card__rating">
                    <div className="card__star-wrapper">
                      <img className="card__star" src="/assets/img/star.svg" alt="star" />
                      <span className="card__star-count">{card.averageRating.averageMark}</span>
                    </div>
                    <span className="card__reviews">({card.comments_count} відгуків)</span>
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
  )
}

export default AnotherOffer
