import React, { useState } from 'react'
import Link from 'next/link'

//types
import { MobileMenuProps } from './Types'

//antd
import {
  AppstoreOutlined,
  ProfileOutlined,
  MailOutlined,
  BlockOutlined,
  LineChartOutlined,
  SettingOutlined,
  StarOutlined,
  RightOutlined,
} from '@ant-design/icons'

//todo: add SVG  loader
// import Image from '../../../../public/assets/img/aura_lvl0.svg'

//todo: replace icons and delete hard code
const Menu: React.FC<MobileMenuProps> = ({ isOpenMenu, openMenu, userData }): JSX.Element => {
  const array = new Array(5)

  return (
    <div className={`dashboard-menu ${isOpenMenu && 'dashboard-menu__open'}`}>
      <div className={`dashboard-menu__avatar ${isOpenMenu && 'dashboard-menu__avatar-open'}`}>
        {/* <Image /> */}
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
          <img
            src={userData.avatar}
            className={`dashboard-menu__avatar-image ${
              isOpenMenu && 'dashboard-menu__avatar-image-open'
            }`}
            alt="avatar"
          />
          <p
            className={`dashboard-menu__username ${isOpenMenu && 'dashboard-menu__username-open'}`}
          >
            {userData.name} {userData.surname}
          </p>
          <div className={`dashboard-menu__stars ${isOpenMenu && 'dashboard-menu__stars-open'}`}>
            {array.fill(null).map((el, index) => (
              <div key={index} style={{ color: 'orange' }}>
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
      <div className="dashboard-menu__nav">
        <Link href="/dashboard/">
          <div className="dashboard-menu__button">
            <div
              className={`dashboard-menu__button-image-container ${
                isOpenMenu && 'dashboard-menu__button-image-container-open'
              }`}
            >
              <AppstoreOutlined className="dashboard-menu__button-image" />
              {isOpenMenu && <p className="dashboard-menu__button-text-desktop">ДАШБОАРД</p>}
            </div>
            <p className="dashboard-menu__button-text">ДАШБОАРД</p>
          </div>
        </Link>
        <Link href="/dashboard/">
          <div className="dashboard-menu__button">
            <div
              className={`dashboard-menu__button-image-container ${
                isOpenMenu && 'dashboard-menu__button-image-container-open'
              }`}
            >
              <ProfileOutlined className="dashboard-menu__button-image" />
              {isOpenMenu && <p className="dashboard-menu__button-text-desktop">ПРОЕКТИ</p>}
            </div>
            <p className="dashboard-menu__button-text">ПРОЕКТИ</p>
          </div>
        </Link>
        <Link href="/dashboard/">
          <div className="dashboard-menu__button">
            <div
              className={`dashboard-menu__button-image-container ${
                isOpenMenu && 'dashboard-menu__button-image-container-open'
              }`}
            >
              <MailOutlined className="dashboard-menu__button-image" />
              {isOpenMenu && <p className="dashboard-menu__button-text-desktop">ЧАТ</p>}
            </div>
            <p className="dashboard-menu__button-text">ЧАТ</p>
          </div>
        </Link>
        <Link href="/dashboard/">
          <div className="dashboard-menu__button">
            <div
              className={`dashboard-menu__button-image-container ${
                isOpenMenu && 'dashboard-menu__button-image-container-open'
              }`}
            >
              <BlockOutlined className="dashboard-menu__button-image" />
              {isOpenMenu && <p className="dashboard-menu__button-text-desktop">МОЇ ПОСЛУГИ</p>}
            </div>
            <p className="dashboard-menu__button-text">МОЇ ПОСЛУГИ</p>
          </div>
        </Link>
        <Link href="/dashboard/">
          <div className="dashboard-menu__button">
            <div
              className={`dashboard-menu__button-image-container ${
                isOpenMenu && 'dashboard-menu__button-image-container-open'
              }`}
            >
              <LineChartOutlined className="dashboard-menu__button-image" />
              {isOpenMenu && <p className="dashboard-menu__button-text-desktop">ФІНАНСИ</p>}
            </div>
            <p className="dashboard-menu__button-text">ФІНАНСИ</p>
          </div>
        </Link>
        <Link href="/dashboard/">
          <div className="dashboard-menu__button">
            <div
              className={`dashboard-menu__button-image-container ${
                isOpenMenu && 'dashboard-menu__button-image-container-open'
              }`}
            >
              <SettingOutlined className="dashboard-menu__button-image" />
              {isOpenMenu && <p className="dashboard-menu__button-text-desktop">ДАШБОАРД</p>}
            </div>
            <p className="dashboard-menu__button-text">НАЛАШТУВАННЯ</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
