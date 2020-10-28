import React from 'react'
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
} from '@ant-design/icons'

//todo: add SVG  loader
// import Image from '../../../../public/assets/img/aura_lvl0.svg'

//todo: replace icons and delete hard code
const Menu: React.FC<MobileMenuProps> = ({ isOpenMenu }): JSX.Element => {
  return (
    <div className={`dashboard-menu ${isOpenMenu && 'dashboard-menu__open'}`}>
      <div className="dashboard-menu__avatar">
        {/* <Image /> */}
        AVATAR
      </div>
      <Link href="/dashboard/">
        <div className="dashboard-menu__button">
          <div className="dashboard-menu__button-image-container">
            <AppstoreOutlined className="dashboard-menu__button-image" />
          </div>
          <p className="dashboard-menu__button-text">ДАШБОАРД</p>
        </div>
      </Link>
      <Link href="/dashboard/">
        <div className="dashboard-menu__button">
          <div className="dashboard-menu__button-image-container">
            <ProfileOutlined className="dashboard-menu__button-image" />
          </div>
          <p className="dashboard-menu__button-text">ПРОЕКТИ</p>
        </div>
      </Link>
      <Link href="/dashboard/">
        <div className="dashboard-menu__button">
          <div className="dashboard-menu__button-image-container">
            <MailOutlined className="dashboard-menu__button-image" />
          </div>
          <p className="dashboard-menu__button-text">ЧАТ</p>
        </div>
      </Link>
      <Link href="/dashboard/">
        <div className="dashboard-menu__button">
          <div className="dashboard-menu__button-image-container">
            <BlockOutlined className="dashboard-menu__button-image" />
          </div>
          <p className="dashboard-menu__button-text">МОЇ ПОСЛУГИ</p>
        </div>
      </Link>
      <Link href="/dashboard/">
        <div className="dashboard-menu__button">
          <div className="dashboard-menu__button-image-container">
            <LineChartOutlined className="dashboard-menu__button-image" />
          </div>
          <p className="dashboard-menu__button-text">ФІНАНСИ</p>
        </div>
      </Link>
      <Link href="/dashboard/">
        <div className="dashboard-menu__button">
          <div className="dashboard-menu__button-image-container">
            <SettingOutlined className="dashboard-menu__button-image" />
          </div>
          <p className="dashboard-menu__button-text">НАЛАШТУВАННЯ</p>
        </div>
      </Link>
    </div>
  )
}

export default Menu
