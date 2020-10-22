import React from 'react'
import Head from 'next/head'
import DashboardHeader from '../src/components/Header/DashboardHeader/DashboardHeader'

// Types
type DashboardLayoutProps = {
  children: React.ReactNode
  title?: string
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title ? `${title} | Profiroom` : 'Profiroom - фриланс биржа'}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DashboardHeader />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout
