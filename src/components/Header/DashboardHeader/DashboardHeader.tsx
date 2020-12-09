import React, { useState, useCallback, useContext } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

//components
import Menu from './Menu'
import SwitchComponent from './Switch'
import LangSelect from '../MainHeader/LangSelect'

//antd
import { Popover } from 'antd'
import { BellFilled } from '@ant-design/icons'
//ctx
import { MainContext } from '../../../context/MainContext'
//types
import { DashboardHeaderProps } from './Types'
//ctx
import { MainContext } from '../../../context/MainContext'

const DashboardHeader: React.FC<DashboardHeaderProps> = (props): JSX.Element => {
  const [isClient, setIsClient] = useState<boolean>(false)
  const { userData } = props

  const { lang, setLang, isMenuOpen, setMenuOpen, setLogin } = useContext(MainContext)

  const selectRole = useCallback(() => {
    setIsClient(!isClient)
  }, [isClient])

  const openMenu = useCallback(() => {
    setMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  const handleExit = () => {
    Cookies.remove('jwt_token')
    Cookies.remove('user_id')
    setLogin(false)
  }

  return (
    <>
      <header className="dashboard-header">
        <div className="dashboard-header__nav">
          <div className="dashboard-header__logo">profiroom</div>
          <div className="dashboard-header__nav-button-group">
            <Popover placement="bottom" content={'Тут будут уведомления'} trigger="click">
              <BellFilled className="dashboard-header__bell-icon" />
            </Popover>
            <div className="dashboard-header__switch-desktop">

              <SwitchComponent isClient={isClient} selectRole={selectRole} />
            </div>
            <LangSelect language={lang} updateLanguage={setLang} />
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
            <div>
              <button
                className={`c-hamburger c-hamburger--htx ${isMenuOpen && 'is-active'}`}
                onClick={openMenu}
              >
                <span>toggle menu</span>
              </button>
            </div>
            <SwitchComponent isClient={isClient} selectRole={selectRole} />
          </div>
        </div>
      </header>
      <Menu isOpenMenu={isMenuOpen} openMenu={openMenu} userData={userData} />
    </>
  )
}

export default DashboardHeader
