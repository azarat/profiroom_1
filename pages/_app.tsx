import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/antd.less'
import '../styles/layouts.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
