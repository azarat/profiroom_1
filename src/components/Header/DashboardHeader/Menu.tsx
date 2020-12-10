import React from 'react'

//types
import { MobileMenuProps } from './Types'

//antd
import { StarOutlined, RightOutlined } from '@ant-design/icons'

import { dataArray } from '../../../constants/dashboardMenu'
import ActiveLink from './ActiveLink'

const Menu: React.FC<MobileMenuProps> = ({
  isOpenMenu,
  openMenu,
  userData: { avatar, name, surname },
}): JSX.Element => {
  const array = new Array(5)

  return (
    <div className={`dashboard-menu ${isOpenMenu && 'dashboard-menu__open'}`}>
      <div className={`dashboard-menu__avatar ${isOpenMenu && 'dashboard-menu__avatar-open'}`}>
        <div
          className={`dashboard-menu__user-info ${isOpenMenu && 'dashboard-menu__user-info-open'}`}
        >
          <div className="dashboard-menu__avatar-border">
            <img
              src="https://profiroom.com/assets/images/images/aura_lvl0.svg"
              className={`dashboard-menu__avatar-aura ${
                isOpenMenu && 'dashboard-menu__avatar-border-open'
              }`}
              alt="aura"
            />
          </div>
          <div
            className={`dashboard-menu__avatar-image-container ${
              isOpenMenu && 'dashboard-menu__avatar-image-container-open'
            }`}
          >
            <img
              src={avatar}
              className={`dashboard-menu__avatar-image ${
                isOpenMenu && 'dashboard-menu__avatar-image-open'
              }`}
              alt="avatar"
            />
          </div>
          <p
            className={`dashboard-menu__username ${isOpenMenu && 'dashboard-menu__username-open'}`}
          >
            {name} {surname}
          </p>
          <div className={`dashboard-menu__stars ${isOpenMenu && 'dashboard-menu__stars-open'}`}>
            {array.fill(null).map((el, index) => (
              <div key={index + el}>
                <StarOutlined />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dashboard-menu__button-container">
        <div
          className={`dashboard-menu__open-button ${isOpenMenu && 'transform-90'}`}
          onClick={openMenu}
          role="presentation"
        >
          <RightOutlined className="dashboard-menu__open-button-icon" />
        </div>
      </div>
      <div className={`dashboard-menu__nav ${isOpenMenu && 'dashboard-menu__nav-open'}`}>
        {dataArray.map(({ id, image, title, link }) => (
          <div key={id} role="presentation">
            <ActiveLink activeClassName="dashboard-menu__button-active" href={`/dashboard${link}`}>
              <div className={`dashboard-menu__button ${'dashboard-menu__button-open'}`}>
                <div
                  className={`dashboard-menu__button-image-container  ${
                    isOpenMenu && 'dashboard-menu__button-image-container-open'
                  }`}
                >
                  <div className={`dashboard-menu__button-image ${image} `}></div>
                  {isOpenMenu && <p className="dashboard-menu__button-text-open">{title}</p>}
                  <p className="dashboard-menu__button-text-large">{title}</p>
                </div>
              </div>
            </ActiveLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
