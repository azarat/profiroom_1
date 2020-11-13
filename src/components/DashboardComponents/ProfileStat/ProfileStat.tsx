import React from 'react'
import { offerView } from '../HomeTypes'

type ProfileStatTypes = {
  avatar: string
  views: number
  offerViews: offerView[]
}

const ProfileStat: React.FC<ProfileStatTypes> = ({ avatar, views, offerViews }): JSX.Element => {
  return (
    <div className="home__profile-stats profile-stats">
      <h5 className="profile-stats__title">Показники профілю</h5>
      <div className="profile-stats__profile-views-wrapper">
        <div className="profile-stats__profile-views">
          <div className="profile-stats__profile-avatar-wrapper">
            <img className="profile-stats__profile-avatar" src={avatar} alt="" />
          </div>
          <div className="profile-stats__profile-text-wrapper">
            <p className="profile-stats__profile-text">Мій профіль</p>
            <p className="profile-stats__profile-text-stat">{views} перегляд(ів)</p>
          </div>
        </div>
        <div className="profile-stats__offers-views">
          <p className="profile-stats__offers-views-title">Найбільш популярні послуги</p>
          <div className="profile-stats__popular-offers">
            <div className="profile-stats__popular-offers-item">
              <div className="profile-stats__offers-item-img-wrapper">
                <img
                  src={offerViews && offerViews[0].subCatImg}
                  alt=""
                  className="profile-stats__offers-item-img"
                />
              </div>
              <div>
                <p className="profile-stats__offers-item-name">
                  {offerViews && offerViews[0].title}
                </p>
                <p className="profile-stats__offers-item-view">
                  {offerViews && offerViews[0].Views} просмотра
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileStat
