import React, { useEffect } from 'react'
import Head from 'next/head'

//components
import DashboardHeader from '../src/components/Header/DashboardHeader/DashboardHeader'

// Types
import { DashboardLayoutProps } from '../src/common/Types'

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  className = '',
  children,
  title,
  userData,
}) => {
  const { user } = userData

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('fixed')
    return () => {
      body?.classList.remove('fixed')
    }
  }, [])

  return (
    <>
      <Head>
        <title>{`${title ? `${title} | Profiroom` : 'Profiroom - фриланс биржа'}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DashboardHeader userData={user} />
      <main className={`dashboard-main ${className}`}>{children}</main>
    </>
  )
}

export default DashboardLayout
