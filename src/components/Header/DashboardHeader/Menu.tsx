import React, { useState, useCallback } from 'react'
import Link from 'next/link'

//types
import { MobileMenuProps } from './Types'

//antd
import { StarOutlined, RightOutlined } from '@ant-design/icons'

import { dataArray } from '../../../constants/dashboardMenu'
//todo: add SVG  loader
// import Image from '../../../../public/assets/img/aura_lvl0.svg'

const Menu: React.FC<MobileMenuProps> = ({ isOpenMenu, openMenu, userData }): JSX.Element => {
  const [activeButton, setActiveButton] = useState<number>()
  const array = new Array(5)

  const { avatar, name, surname } = userData

  const selectActiveButton = useCallback(
    (id: number) => {
      setActiveButton(id)
    },
    [activeButton]
  )

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
        {dataArray.map(({ id, image, title, link, active }) => (
          <div key={id} onClick={() => selectActiveButton(id)} role="presentation">
            <Link href={link}>
              <div className={`dashboard-menu__button ${'dashboard-menu__button-open'}`}>
                <div
                  className={`dashboard-menu__button-image-container  ${
                    activeButton === id && 'dashboard-menu__button-image-container-active'
                  } ${isOpenMenu && 'dashboard-menu__button-image-container-open'}`}
                >
                  <div
                    className={`dashboard-menu__button-image ${image} ${
                      activeButton === id && `${active}`
                    }`}
                  ></div>
                  {isOpenMenu && <p className="dashboard-menu__button-text-open">{title}</p>}
                  <p className="dashboard-menu__button-text-large">{title}</p>
                </div>
                <p className="dashboard-menu__button-text">{title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
