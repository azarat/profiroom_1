import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import nextCookie from 'next-cookies'

//components
import Menu from './Menu'
import SwitchComponent from './Switch'

//antd
import { Popover } from 'antd'
import { BellFilled, MenuOutlined } from '@ant-design/icons'

const DashboardHeader: React.FC = (): JSX.Element => {
  const [isClient, setIsClient] = useState<boolean>(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const { jwt_token } = nextCookie('ctx')
    if (jwt_token) {
      if (userData.length <= 0) {
        fetch(`https://profiroom.com/Backend/api/dashboard`, {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            setUserData(res)
          })
      }
    }

    const windowW = typeof window !== 'undefined' && window.innerWidth

    if (windowW >= 1200) {
      setIsOpenMenu(true)
    }
  })

  const selectRole = (): void => {
    setIsClient(!isClient)
  }

  const openMenu = (): void => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div>
      <header>
        <div className="dashboard-header">
          <div className="container">
            <div className="dashboard-header__nav">
              <div className="dashboard-header__logo">profiroom</div>
              <div className="dashboard-header__nav-button-group">
                <Popover placement="bottom" content={'Тут будут уведомления'} trigger="click">
                  <BellFilled className="dashboard-header__bell-icon" />
                </Popover>
                <div className="dashboard-header__switch-desktop">
                  <SwitchComponent isClient={isClient} selectRole={selectRole} />
                </div>
                <div className="dashboard-header__nav">
                  <Link href="/">
                    <a className="dashboard-header__link dashboard-header__go-to-main">Головна</a>
                  </Link>
                  <Link href="/">
                    <a className="dashboard-header__link">Вийти</a>
                  </Link>
                </div>
              </div>
              <div className="dashboard-header__subnav-button-group">
                {/* <MenuOutlined className="dashboard-header__menu-button" onClick={openMenu} /> */}
                <div>
                  <button
                    className={`c-hamburger c-hamburger--htx ${isOpenMenu && 'is-active'}`}
                    onClick={openMenu}
                  >
                    <span>toggle menu</span>
                  </button>
                </div>
                <SwitchComponent isClient={isClient} selectRole={selectRole} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu isOpenMenu={isOpenMenu} openMenu={openMenu} userData={userData} />
    </div>
  )
}

export default DashboardHeader
