import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/antd.less'
import '../styles/layouts.scss'
import { NextPage } from 'next'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
