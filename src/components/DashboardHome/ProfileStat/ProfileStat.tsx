import React from 'react'
//types
import { ProfileStatProps } from './Types'

const ProfileStat: React.FC<ProfileStatProps> = ({ avatar, views, offerViews }): JSX.Element => {
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
        {!!offerViews.length && (
          <div className="profile-stats__offers-views">
            <p className="profile-stats__offers-views-title">Найбільш популярні послуги</p>
            <div className="profile-stats__popular-offers">
              <div className="profile-stats__popular-offers-item">
                <div className="profile-stats__offers-item-img-wrapper">
                  <img
                    src={offerViews[0]?.subCatImg}
                    alt=""
                    className="profile-stats__offers-item-img"
                  />
                </div>
                <div>
                  <p className="profile-stats__offers-item-name">{offerViews[0].title}</p>
                  <p className="profile-stats__offers-item-view">{offerViews[0].Views} просмотра</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileStat
