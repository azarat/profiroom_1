import React, { useState, useCallback, useContext } from 'react'
import Link from 'next/link'

//components
import Menu from './Menu'
import SwitchComponent from './Switch'

//antd
import { Popover } from 'antd'
import { BellFilled } from '@ant-design/icons'
import { Response } from './Types'
import { MainContext } from '../../../context/MainContext'
import LangSelect from '../MainHeader/LangSelect'

type DashboardProps = {
  userData: Response
}

const DashboardHeader: React.FC<DashboardProps> = (props): JSX.Element => {
  const [isClient, setIsClient] = useState<boolean>(false)
  const { userData } = props

  const { lang, setLang, isMenuOpen: isMenuOpen, setMenuOpen: setMenuOpen } = useContext(
    MainContext
  )

  const selectRole = useCallback(() => {
    setIsClient(!isClient)
  }, [isClient])

  const openMenu = useCallback(() => {
    setMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

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
