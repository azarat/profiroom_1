import React, { useState } from 'react'
import type { AppProps } from 'next/app'
// Context
import { MainContext } from '../src/context/MainContext'

// Style
import '../styles/antd.less'
import '../styles/layouts.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [lang, setLang] = useState<string>('uk')
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [isHistoryOpen, setHistoryOpen] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)

  return (
    <MainContext.Provider
      value={{ lang, setLang, isMenuOpen, setMenuOpen, isHistoryOpen, setHistoryOpen, login, setLogin }}
    >
      <Component {...pageProps} />
    </MainContext.Provider>
  )
}

export default MyApp
