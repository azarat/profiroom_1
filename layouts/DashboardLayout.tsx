import React from 'react'
import Head from 'next/head'

//components
import DashboardHeader from '../src/components/Header/DashboardHeader/DashboardHeader'

// Types
type DashboardLayoutProps = {
  children: React.ReactNode
  title?: string
  userData: any
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title, userData }) => {
  const { user } = userData
  return (
    <>
      <Head>
        <title>{`${title ? `${title} | Profiroom` : 'Profiroom - фриланс биржа'}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DashboardHeader userData={user} />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout
