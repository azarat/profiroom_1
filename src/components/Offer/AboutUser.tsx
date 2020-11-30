import Link from 'next/link'
import React from 'react'
import { UserOfferTypes } from '../OfferCard/Types'

const AboutUser: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  return (
    <div className="offer__about-user about-user" id="about-freelancer">
      <h4 className="about-user__title">Про фрілансера</h4>
      <div className="about-user__main-info">
        <div className="about-user__avatar-link-wrapper">
          <Link href="">
            <a className="about-user__avatar-link">
              <img className="about-user__avatar" src={userOffer.user.avatar} alt="" />
            </a>
          </Link>
        </div>
        <div className="about-user__main-info-inner">
          <p className="about-user__name">
            {userOffer.user.name} {userOffer.user.surname}
          </p>
          <p className="about-user__status">Рівень:Стартовий</p>
          <div className="about-user__rating-wrapper">
            <p className="about-user__rating"></p>
            <span className="about-user__comments">({userOffer.comments_count} відгуків)</span>
          </div>
          <div className="about-user__online-status-wrapper">
            <span
              className={
                userOffer.user.online
                  ? 'about-user__online-status--online'
                  : 'about-user__online-status'
              }
            >
              {userOffer.user.online ? 'Онлайн' : 'Офлайн'}
            </span>
          </div>
        </div>
        <div className="about-user__actions">
          <div className="about-user__action">
            <Link href="/">
              <a className="offer__message">
                <img src="/assets/img/shape.svg" alt="shape icon" />
              </a>
            </Link>
          </div>
          <div className="about-user__action">
            <Link href="/">
              <a className="offer__message">
                <img src="/assets/img/envelope.svg" alt="calendar icon" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="about-user__sub-info">
        <div className="about-user__country">
          <p className="about-user__country-title">Країна</p>
          <p className="about-user__country-name">{userOffer.user.country}</p>
        </div>
        <div className="about-user__term">
          <p className="about-user__term-title">На сайті з</p>
          <p className="about-user__term-info">{userOffer.created_at}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUser
