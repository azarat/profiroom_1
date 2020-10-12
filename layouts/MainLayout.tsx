import React from 'react'
import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'
import Header from '../src/components/Header/Header'

type MainLayoutProps = {
  children: React.ReactNode
  title?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title ? `${title} | Profiroom` : 'Profiroom - фриланс биржа'}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
