import React from 'react'
import Link from 'next/link'
import { UserOfferTypes } from '../OfferCard/Types'

const UserInfo: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  return (
    <div className="offer__user-info">
      <Link href="/">
        <a className="offer__user-avatar-link">
          <img className="offer__user-avatar" src={userOffer.user.avatar} alt="" />
        </a>
      </Link>
      <div className="offer__user-text">
        <Link href="/">
          <a className="offer__user-name">
            {userOffer.user.name} {userOffer.user.surname}
          </a>
        </Link>
        <div className="offer__user-starr-wrapper">
          <span className="offer__user-star"></span>
        </div>

        <span className="offer__user-comments">(1 відгук)</span>
      </div>
      <div className="offer__message-wrapper">
        <Link href="/">
          <a className="offer__message">
            <img src="/assets/img/envelope.svg" alt="envelope icon" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default UserInfo
