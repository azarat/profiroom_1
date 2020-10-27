import React from 'react'
import Link from 'next/link'

const Service: React.FC = ({
  averageRating,
  comments_count,
  mainImage,
  minPrice,
  title,
  user,
}): JSX.Element => {
  return (
    <div className="services__item item">
      <div className="item__img-wrapper">
        <img className="item__img" src={mainImage} alt="img preview" />
      </div>
      <div className="item__description">
        <Link href="">
          <a className="item__about">{title}</a>
        </Link>
        <div className="item__bottom">
          <div className="item__rating">
            <div className="item__star-wrapper">
              <img className="item__star" src="/assets/img/star.svg" alt="star" />
              <span>{averageRating.averageMark}</span>
            </div>
            <span className="item__reviews">{comments_count}</span>
          </div>
          <div className="item__avatar-wrapper">
            <Link href="/">
              <a>
                <img className="item__avatar" src={user.avatar} alt="avatar" />
              </a>
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

export default Service
