import React, { useContext } from 'react'
import Head from 'next/head'

//components
import DashboardHeader from '../src/components/Header/DashboardHeader/DashboardHeader'
import { MainContext } from '../src/context/MainContext'

// Types
type DashboardLayoutProps = {
  children: React.ReactNode
  title?: string
  userData: any
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title, userData }) => {
  const { user } = userData

  const { isMenuOpen } = useContext(MainContext)
  return (
    <>
      <Head>
        <title>{`${title ? `${title} | Profiroom` : 'Profiroom - фріланс біржа'}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div className="main-wrapper">
        <DashboardHeader userData={user} />
        <main
          // style={{ overflowY: 'scroll' }}
          className={`dashboard-content ${isMenuOpen ? 'dashboard-content--blur' : ''}`}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default DashboardLayout
