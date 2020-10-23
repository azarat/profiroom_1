import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Context
import { MainContext } from '../../../context/MainContext'
// Components
import MobileMenu from './MobileMenu'
import LangSelect from './LangSelect'
import UserDrowDown from './UserDropDown'

// Antd
import { Input } from 'antd'

const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [isLogined, setIsLogined] = useState<boolean>(true)
  const router = useRouter()

  const { lang: updateLang, setLang: setUpdateLang } = useContext(MainContext)

  const handleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const updateLanguage = (value: string) => {
    setUpdateLang(value)
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div onClick={handleMenu} role="presentation" className="header__menu-wrapper">
              <Link href="/">
                <a>
                  <img src="/assets/img/menu.svg" alt="burger" />
                </a>
              </Link>
            </div>
            <div className="header__logo-wrapper">
              <img src="/assets/img/logo.svg" alt="logo" />
            </div>

            <div className="header__nav-wrapper">
              <nav className="nav">
                <Link href="/">
                  <a className="nav__item">Головна</a>
                </Link>
                <Link href="/catalog">
                  <a className="nav__item">Каталог</a>
                </Link>
              </nav>
            </div>

            <div className="header__search-wrapper">
              <Input.Search
                placeholder="Розпочати пошук..."
                onSearch={(value) => console.log(value)}
                enterButton
              />
            </div>
            <UserDrowDown isLogined={isLogined} />
            <LangSelect updateLanguage={updateLanguage} language={updateLang} />
            {!isLogined && (
              <>
                {router.pathname !== '/login' && (
                  <div className="header__login-anchor">
                    <Link href="/">
                      <a className="header__login">Увійти</a>
                    </Link>
                  </div>
                )}
                {router.pathname !== '/login' ? (
                  <div className="header__register-anchor">
                    <Link href="/">
                      <a className="header__register">Зареєструватися</a>
                    </Link>
                  </div>
                ) : (
                  <div className="header__register-anchor">
                    <Link href="/">
                      <a className="header__register">На головну</a>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
          <MobileMenu isOpen={openMenu} closeMenu={handleMenu} updateLanguage={updateLanguage} />
        </div>
      </header>
    </>
  )
}

export default Header