import React, { useState, useCallback, useContext } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

//components
import Menu from './Menu'
import SwitchComponent from './Switch'

//antd
import { Popover } from 'antd'
import { BellFilled } from '@ant-design/icons'

//types
import { DashboardHeaderProps } from './Types'
//ctx
import { MainContext } from '../../../context/MainContext'

const DashboardHeader: React.FC<DashboardHeaderProps> = (props): JSX.Element => {
  const [isClient, setIsClient] = useState<boolean>(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const { userData } = props

  const { setLogin } = useContext(MainContext)

  const selectRole = useCallback(() => {
    setIsClient(!isClient)
  }, [isClient])

  const openMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu)
  }, [isOpenMenu])

  const handleExit = () => {
    Cookies.remove('jwt_token')
    Cookies.remove('user_id')
    setLogin(false)
  }

  return (
    <div>
      <header>
        <div className="dashboard-header">
          <div className="dashboard-header__nav">
            <Link href="/">
              <a className="dashboard-header__logo">profiroom</a>
            </Link>
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
                  <a className="dashboard-header__link" onClick={handleExit} role="presentation">
                    Вийти
                  </a>
                </Link>
              </div>
            </div>
            <div className="dashboard-header__subnav-button-group">
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
      </header>
      <Menu isOpenMenu={isOpenMenu} openMenu={openMenu} userData={userData} />
    </div>
  )
}

export default DashboardHeader
