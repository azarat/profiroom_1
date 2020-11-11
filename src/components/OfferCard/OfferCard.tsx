import React from 'react'
import Link from 'next/link'
import { OfferCardPropsTypes } from './Types'
import { useRouter } from 'next/router'

const OfferCard: React.FC<OfferCardPropsTypes> = ({
  averageRating: { averageMark },
  comments_count,
  mainImage,
  minPrice,
  title,
  user: { avatar },
  id,
}): JSX.Element => {
  const router = useRouter()

  return (
    <div className="services__item item">
      <div
        role="presentation"
        className="item__img-wrapper"
        onClick={() => {
          router.push(`/showOffer/${id}`)
        }}
      >
        <img className="item__img" src={mainImage} alt="img preview" />
      </div>
      <div className="item__description">
        <h1
          role="presentation"
          className="item__about"
          onClick={() => {
            router.push(`/showOffer/${id}`)
          }}
        >
          {title}
        </h1>

        <div className="item__bottom">
          <div className="item__rating">
            <div className="item__star-wrapper">
              <img className="item__star" src="/assets/img/star.svg" alt="star" />
              {typeof averageMark !== undefined && (
                <span className="item__star-count">{averageMark}</span>
              )}
            </div>
            <span className="item__reviews">({comments_count} відгуків)</span>
          </div>
          <div className="item__avatar-wrapper">
            <Link href="/">
              <a>{avatar && <img className="item__avatar" src={avatar} alt="avatar" />}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="item__price-block">
        <div className="item__price-wrapper">
          <span className="item__price">
            починаючи від <strong>&#8372; {minPrice}</strong>
          </span>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
