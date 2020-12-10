import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
// Context
import { MainContext } from '../../../context/MainContext'
// Components
import MobileMenu from './MobileMenu'
import LangSelect from './LangSelect'
import UserDrowDown from './UserDropDown'

// Antd
import { Input } from 'antd'

import { decodeFunc } from '../../../utils/decode'

const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState({})
  const router = useRouter()

  const { lang: updateLang, setLang: setUpdateLang, login, setLogin } = useContext(MainContext)

  const handleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const updateLanguage = (value: string) => {
    setUpdateLang(value)
  }

  useEffect(() => {
    const jwt_token = Cookies.get('jwt_token')

    if (jwt_token) {
      const userInfo = decodeFunc(jwt_token)
      setUserInfo(userInfo)
      setLogin(true)
    }
  }, [])

  const handleExit = (): void => {
    Cookies.remove('jwt_token')
    Cookies.remove('user_id')
    setLogin(false)
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div onClick={handleMenu} role="presentation" className="header__menu-wrapper">
              <img src="/assets/img/menu.svg" alt="burger" />
            </div>
            <div className="header__logo-wrapper">
              <Link href="/">
                <a>
                  <img src="/assets/img/logo.svg" alt="logo" />
                </a>
              </Link>
            </div>

            <div
              className={` ${
                router.pathname === '/login' ? 'header__nav-wrapper--auth' : 'header__nav-wrapper'
              }`}
            >
              <nav className="nav">
                <Link href="/">
                  <a className="nav__item">Головна</a>
                </Link>
                <Link href="/catalog">
                  <a className="nav__item">Каталог</a>
                </Link>
              </nav>
            </div>

            <div
              className={`${
                router.pathname === '/login'
                  ? 'header__search-wrapper--auth'
                  : 'header__search-wrapper'
              }`}
            >
              <Input.Search
                placeholder="Розпочати пошук..."
                onSearch={(value) => console.log(value)}
                enterButton
              />
            </div>
            <UserDrowDown handleExit={handleExit} isLogined={login} userInfo={userInfo} />
            <div className="header__select-auth-wrapper">
              <LangSelect updateLanguage={updateLanguage} language={updateLang} />
              {!login && (
                <>
                  {router.pathname !== '/login' && (
                    <div className="header__login-anchor">
                      <Link href={{ pathname: '/login', query: { isLogin: true } }}>
                        <a className="header__login">Увійти</a>
                      </Link>
                    </div>
                  )}
                  {router.pathname !== '/login' ? (
                    <div className="header__register-anchor">
                      <Link href={{ pathname: '/login', query: { isRegister: true } }}>
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
          </div>
          <MobileMenu isOpen={openMenu} closeMenu={handleMenu} updateLanguage={updateLanguage} />
        </div>
      </header>
    </>
  )
}

export default Header
