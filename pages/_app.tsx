import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/antd.less'
import '../styles/layouts.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
